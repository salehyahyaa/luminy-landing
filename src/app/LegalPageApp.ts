import type { SiteConfig } from '../config/site.config';
import { LEGAL_PAGE_CONTENT, type LegalPageId } from '../legal/copy';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Mountable } from '../core/Mountable';

export type { LegalPageId };

/**
 * Minimal shell for legal pages: skip link, navbar, article, footer.
 */
export class LegalPageApp extends Mountable {
  private readonly _element: HTMLElement;

  public constructor(
    private readonly config: SiteConfig,
    private readonly page: LegalPageId,
  ) {
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
    main.className = 'main legal-page';

    const article = document.createElement('article');
    article.className = 'legal-prose container';
    const { titleId, html } = LEGAL_PAGE_CONTENT[this.page];
    article.setAttribute('aria-labelledby', titleId);
    article.innerHTML = html;

    main.appendChild(article);

    const footer = new Footer(this.config);

    this._element.appendChild(skip);
    navbar.mount(this._element);
    this._element.appendChild(main);
    footer.mount(this._element);
  }
}
