/**
 * Drives `--scroll-pct` (0–1) on the document root so CSS can shift soft
 * background tones as the user scrolls — similar to Apple's marketing pages.
 */
export class ScrollAmbientController {
  private readonly root: HTMLElement;

  private readonly ambientLayer: HTMLDivElement;

  private rafId: number | null = null;

  public constructor(root: HTMLElement = document.documentElement) {
    this.root = root;
    this.ambientLayer = document.createElement('div');
    this.ambientLayer.className = 'ambient';
    this.ambientLayer.setAttribute('aria-hidden', 'true');
  }

  public start(): void {
    document.body.prepend(this.ambientLayer);
    window.addEventListener('scroll', this.onScroll, { passive: true });
    window.addEventListener('resize', this.onScroll, { passive: true });
    this.applyScrollFraction();
    requestAnimationFrame(() => this.applyScrollFraction());
  }

  public stop(): void {
    window.removeEventListener('scroll', this.onScroll);
    window.removeEventListener('resize', this.onScroll);
    if (this.rafId !== null) {
      cancelAnimationFrame(this.rafId);
      this.rafId = null;
    }
    this.ambientLayer.remove();
  }

  private readonly onScroll = (): void => {
    this.scheduleUpdate();
  };

  private scheduleUpdate(): void {
    if (this.rafId !== null) {
      return;
    }
    this.rafId = requestAnimationFrame(() => {
      this.rafId = null;
      this.applyScrollFraction();
    });
  }

  private applyScrollFraction(): void {
    const doc = document.documentElement;
    const scrollable = Math.max(0, doc.scrollHeight - window.innerHeight);
    const raw = scrollable > 0 ? window.scrollY / scrollable : 0;
    const pct = Math.min(1, Math.max(0, raw));
    this.root.style.setProperty('--scroll-pct', pct.toFixed(4));
  }
}
