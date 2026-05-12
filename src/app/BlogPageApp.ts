import type { SiteConfig } from '../config/site.config';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Mountable } from '../core/Mountable';

/**
 * Blog index — hero + card grid (Opal-style layout, Luminy dark theme).
 */
export class BlogPageApp extends Mountable {
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
    main.className = 'main blog-page';

    const hero = document.createElement('header');
    hero.className = 'blog-hero container';
    const h1 = document.createElement('h1');
    h1.className = 'blog-hero__title';
    h1.textContent = 'Updates from Luminy';
    const sub = document.createElement('p');
    sub.className = 'blog-hero__sub';
    sub.textContent =
      'Product news, launches, and how we are building a calmer way to see your money — with the same quantitative rigor you deserve in one place.';
    hero.appendChild(h1);
    hero.appendChild(sub);

    const gridWrap = document.createElement('div');
    gridWrap.className = 'blog-grid-wrap container';
    const grid = document.createElement('div');
    grid.className = 'blog-grid';
    grid.setAttribute('aria-label', 'Articles');

    const card = document.createElement('a');
    card.className = 'blog-card';
    card.href = 'blog-releasing-soon.html';
    const media = document.createElement('div');
    media.className = 'blog-card__media blog-card__media--launch';
    media.setAttribute('aria-hidden', 'true');
    const body = document.createElement('div');
    body.className = 'blog-card__body';
    const ct = document.createElement('h2');
    ct.className = 'blog-card__title';
    ct.textContent = 'Releasing soon';
    const tag = document.createElement('p');
    tag.className = 'blog-card__tag';
    tag.textContent = 'Product';
    body.appendChild(ct);
    body.appendChild(tag);
    card.appendChild(media);
    card.appendChild(body);
    grid.appendChild(card);

    gridWrap.appendChild(grid);

    main.appendChild(hero);
    main.appendChild(gridWrap);

    const footer = new Footer(this.config);

    this._element.appendChild(skip);
    navbar.mount(this._element);
    this._element.appendChild(main);
    footer.mount(this._element);
  }
}
