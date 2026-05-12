/**
 * Toggles `nav--scrolled` so the navbar shows a hairline + blur only after the user
 * has scrolled far enough that the Features block (“What does Luminy include?”) enters
 * the viewport — past the full hero. Pages without `#features` fall back to a small scroll offset.
 */
export class NavbarScrollAppearanceController {
  private readonly header: HTMLElement;

  private readonly scrolledClass = 'nav--scrolled';

  private readonly sentinelSelector: string;

  private scheduledFrame = 0;

  public constructor(
    headerSelector = 'header.nav',
    /** Includes section — see `FeaturesSection` (`id="features"`). */
    sentinelSelector = '#features',
  ) {
    const el = document.querySelector(headerSelector);
    if (!el) {
      throw new Error(`Navbar not found: ${headerSelector}`);
    }
    this.header = el as HTMLElement;
    this.sentinelSelector = sentinelSelector;
  }

  public start(): void {
    this.sync();
    requestAnimationFrame(() => this.sync());
    window.addEventListener('scroll', this.onScroll, { passive: true });
    window.addEventListener('resize', this.onScroll, { passive: true });
    window.addEventListener('pageshow', this.onPageshow);
  }

  public stop(): void {
    window.removeEventListener('scroll', this.onScroll);
    window.removeEventListener('resize', this.onScroll);
    window.removeEventListener('pageshow', this.onPageshow);
    if (this.scheduledFrame !== 0) {
      cancelAnimationFrame(this.scheduledFrame);
      this.scheduledFrame = 0;
    }
  }

  private readonly onPageshow = (): void => {
    this.sync();
  };

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
    const sentinel = document.querySelector<HTMLElement>(this.sentinelSelector);
    if (!sentinel) {
      this.header.classList.toggle(this.scrolledClass, window.scrollY > 8);
      return;
    }

    const rect = sentinel.getBoundingClientRect();
    const vh = window.innerHeight;
    /**
     * No bottom treatment until the top of #features rises into view (e.g. headline
     * peeking above the bottom of the window), matching the hero → includes transition.
     */
    const featuresEnteringViewport = rect.top < vh * 0.92;

    this.header.classList.toggle(this.scrolledClass, featuresEnteringViewport);
  }
}
