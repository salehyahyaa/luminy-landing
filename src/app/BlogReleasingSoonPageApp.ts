import type { SiteConfig } from '../config/site.config';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Mountable } from '../core/Mountable';

/**
 * Single post: App Store & desktop launch plans (June 2026).
 */
export class BlogReleasingSoonPageApp extends Mountable {
  private readonly _element: HTMLElement;

  public constructor(private readonly config: SiteConfig) {
    super();
    this._element = document.createElement('div');
    this._element.className = 'app blog-app';
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
    main.className = 'main blog-post-page';

    const article = document.createElement('article');
    article.className = 'blog-article container';

    const back = document.createElement('a');
    back.className = 'blog-article__back';
    back.href = 'blog.html';
    back.textContent = '← Blog';

    const tag = document.createElement('p');
    tag.className = 'blog-article__tag';
    tag.textContent = 'Product';

    const h1 = document.createElement('h1');
    h1.className = 'blog-article__title';
    h1.textContent = 'Releasing soon';

    const body = document.createElement('div');
    body.className = 'blog-article__body';
    const p = document.createElement('p');
    p.className = 'blog-article__p';
    p.textContent =
      'We plan to launch Luminy on the App Store for iPhone first, with a focused, native experience for tracking accounts and insights on the go. A polished desktop version for Mac will follow, so you can review cash flow, subscriptions, and analytics on a larger canvas when it suits you. Our roadmap targets both the iOS App Store release and the Mac build for the desktop by June 2026. Until then, we are hardening security, refining onboarding, and making sure linking and analytics feel fast and trustworthy before we open downloads to everyone.';

    body.appendChild(p);

    article.appendChild(back);
    article.appendChild(tag);
    article.appendChild(h1);
    article.appendChild(body);

    main.appendChild(article);

    const footer = new Footer(this.config);

    this._element.appendChild(skip);
    navbar.mount(this._element);
    this._element.appendChild(main);
    footer.mount(this._element);
  }
}
