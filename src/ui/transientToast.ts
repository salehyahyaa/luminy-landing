const DEFAULT_MS = 2800;

/**
 * Short bottom toast (shared by email copy, suggestions mailto, etc.).
 */
export function showTransientToast(message: string, durationMs: number = DEFAULT_MS): void {
  const existing = document.querySelector('.email-toast');
  existing?.remove();

  const toast = document.createElement('div');
  toast.className = 'email-toast';
  toast.setAttribute('role', 'status');
  toast.setAttribute('aria-live', 'polite');
  toast.textContent = message;
  document.body.appendChild(toast);

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      toast.classList.add('email-toast--visible');
    });
  });

  window.setTimeout(() => {
    toast.classList.remove('email-toast--visible');
  }, durationMs);

  window.setTimeout(() => {
    toast.remove();
  }, durationMs + 450);
}
