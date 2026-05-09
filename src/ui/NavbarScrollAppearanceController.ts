/**
 * Toggles `nav--scrolled` on the site header so the bar can show a hairline
 * border only after the page is scrolled (Apple-style).
 */
export class NavbarScrollAppearanceController {
  private readonly header: HTMLElement;

  private readonly scrolledClass = 'nav--scrolled';

  private readonly thresholdPx: number;

  private scheduledFrame = 0;

  public constructor(selector = 'header.nav', thresholdPx = 8) {
    const el = document.querySelector(selector);
    if (!el) {
      throw new Error(`Navbar not found: ${selector}`);
    }
    this.header = el as HTMLElement;
    this.thresholdPx = thresholdPx;
  }

  public start(): void {
    this.sync();
    window.addEventListener('scroll', this.onScroll, { passive: true });
  }

  public stop(): void {
    window.removeEventListener('scroll', this.onScroll);
    if (this.scheduledFrame !== 0) {
      cancelAnimationFrame(this.scheduledFrame);
      this.scheduledFrame = 0;
    }
  }

  private readonly onScroll = (): void => {
    if (this.scheduledFrame !== 0) {
      return;
    }
    this.scheduledFrame = requestAnimationFrame(() => {
      this.scheduledFrame = 0;
      this.sync();
    });
  };

  private sync(): void {
    const scrolled = window.scrollY > this.thresholdPx;
    this.header.classList.toggle(this.scrolledClass, scrolled);
  }
}
