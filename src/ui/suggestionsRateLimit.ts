/**
 * Client-side suggestion throttling (per browser). True enforcement needs a server.
 * Limits: max sends per device per day, max per email address per day, min gap between attempts.
 */

const STORAGE_KEY = 'luminy_suggestions_rate_v1';

/** Max completed mailto flows per device in the rolling window. */
export const SUGGESTIONS_MAX_SENDS_PER_DEVICE = 5;

/** Max sends per (normalized) email address on this device in the rolling window. */
export const SUGGESTIONS_MAX_SENDS_PER_EMAIL = 3;

const WINDOW_MS = 24 * 60 * 60 * 1000;

/** Minimum time between attempts from this device. */
const MIN_INTERVAL_MS = 45_000;

interface Stored {
  readonly sends: number[];
  readonly emailSends: Record<string, number[]>;
}

function empty(): Stored {
  return { sends: [], emailSends: {} };
}

function load(): Stored {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return empty();
    const parsed = JSON.parse(raw) as Partial<Stored>;
    if (!parsed || !Array.isArray(parsed.sends)) return empty();
    const emailSends =
      parsed.emailSends && typeof parsed.emailSends === 'object' && !Array.isArray(parsed.emailSends)
        ? { ...parsed.emailSends }
        : {};
    for (const k of Object.keys(emailSends)) {
      if (!Array.isArray(emailSends[k])) delete emailSends[k];
    }
    return { sends: parsed.sends, emailSends };
  } catch {
    return empty();
  }
}

function save(data: Stored): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch {
    /* quota / private mode — rate state may not persist */
  }
}

function pruneTimestamps(now: number, timestamps: number[]): number[] {
  const cutoff = now - WINDOW_MS;
  return timestamps.filter((t) => t > cutoff);
}

export function normalizeSuggestionEmail(email: string): string {
  return email.trim().toLowerCase();
}

export type SuggestionSendGate = { ok: true } | { ok: false; message: string; retryAfterMs?: number };

export function checkSuggestionSendAllowed(email: string): SuggestionSendGate {
  const now = Date.now();
  const normalized = normalizeSuggestionEmail(email);
  let { sends, emailSends } = load();
  sends = pruneTimestamps(now, sends);

  const emailList = pruneTimestamps(now, [...(emailSends[normalized] ?? [])]);

  if (sends.length >= SUGGESTIONS_MAX_SENDS_PER_DEVICE) {
    const oldest = Math.min(...sends);
    return {
      ok: false,
      message: `You can open the suggestion email draft up to ${SUGGESTIONS_MAX_SENDS_PER_DEVICE} times per day on this device. Try again later.`,
      retryAfterMs: oldest + WINDOW_MS - now,
    };
  }

  if (emailList.length >= SUGGESTIONS_MAX_SENDS_PER_EMAIL) {
    const oldest = Math.min(...emailList);
    return {
      ok: false,
      message: `This email address has reached the daily limit for new drafts on this device (${SUGGESTIONS_MAX_SENDS_PER_EMAIL} per day). Try again tomorrow or use Contact us in the footer.`,
      retryAfterMs: oldest + WINDOW_MS - now,
    };
  }

  const lastDevice = sends.length > 0 ? Math.max(...sends) : 0;
  if (lastDevice > 0 && now - lastDevice < MIN_INTERVAL_MS) {
    const wait = MIN_INTERVAL_MS - (now - lastDevice);
    return {
      ok: false,
      message: `Please wait ${Math.ceil(wait / 1000)}s before sending again.`,
      retryAfterMs: wait,
    };
  }

  return { ok: true };
}

/** Call after launching the mailto draft so limits apply even if the user cancels Mail. */
export function recordSuggestionSend(email: string): void {
  const now = Date.now();
  const normalized = normalizeSuggestionEmail(email);
  let { sends, emailSends } = load();
  sends = pruneTimestamps(now, sends);
  sends.push(now);

  const prev = pruneTimestamps(now, [...(emailSends[normalized] ?? [])]);
  prev.push(now);
  emailSends = { ...emailSends, [normalized]: prev };

  for (const k of Object.keys(emailSends)) {
    emailSends[k] = pruneTimestamps(now, emailSends[k] ?? []);
    if (emailSends[k].length === 0) delete emailSends[k];
  }

  save({ sends, emailSends });
}
