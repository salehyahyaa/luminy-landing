import type { SiteConfig } from '../config/site.config';
import { Navbar } from '../components/Navbar';
import { FaqSection } from '../components/FaqSection';
import { Footer } from '../components/Footer';
import { Mountable } from '../core/Mountable';

/**
 * Standalone FAQ page: nav, FAQ section, footer.
 */
export class FaqPageApp extends Mountable {
  private readonly _element: HTMLElement;

  public constructor(private readonly config: SiteConfig) {
    super();
    this._element = document.createElement('div');
    this._element.className = 'app';
    this.compose();
  }

  public get element(): HTMLElement {
    return this._element;
  }

  private compose(): void {
    const skip = document.createElement('a');
    skip.className = 'skip-link';
    skip.href = '#main';
    skip.textContent = 'Skip to content';

    const navbar = new Navbar(this.config);
    const main = document.createElement('main');
    main.id = 'main';
    main.className = 'main faq-page';

    const faq = new FaqSection();
    faq.mount(main);

    const footer = new Footer(this.config);

    this._element.appendChild(skip);
    navbar.mount(this._element);
    this._element.appendChild(main);
    footer.mount(this._element);
  }
}
