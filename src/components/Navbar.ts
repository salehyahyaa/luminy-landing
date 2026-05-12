import { Component } from '../core/Component';
import type { SiteConfig } from '../config/site.config';

export class Navbar extends Component {
  public constructor(private readonly config: SiteConfig) {
    super('nav', 'header');
    this.initialize();
  }

  protected buildElement(root: HTMLElement): void {
    root.setAttribute('role', 'banner');

    const inner = this.createElement('div', 'nav__inner');

    const brand = this.createElement('a', 'nav__brand');
    brand.href = this.config.homeHref;
    brand.setAttribute('aria-label', `${this.config.brandName} home`);

    const logo = document.createElement('img');
    logo.src = this.config.logoSrc;
    logo.alt = this.config.logoAlt;
    logo.className = 'nav__logo';
    logo.width = 96;
    logo.height = 96;
    brand.appendChild(logo);
    brand.appendChild(this.createElement('span', 'nav__wordmark', this.config.brandName));

    const nav = document.createElement('nav');
    nav.setAttribute('aria-label', 'Primary');

    const list = document.createElement('ul');
    list.className = 'nav__links';

    for (const item of this.config.navItems) {
      const li = document.createElement('li');
      const a = this.createElement('a', 'nav__link', item.label);
      a.href = item.href;
      li.appendChild(a);
      list.appendChild(li);
    }

    nav.appendChild(list);

    const actions = this.createElement('div', 'nav__actions');

    const login = this.createElement('a', 'nav__link nav__link--auth', this.config.navAuth.login.label);
    login.href = this.config.navAuth.login.href;
    login.id = this.config.navAuth.login.id;

    const signup = this.createElement('a', 'nav__cta', this.config.navAuth.signup.label);
    signup.href = this.config.navAuth.signup.href;
    signup.id = this.config.navAuth.signup.id;

    actions.appendChild(login);
    actions.appendChild(signup);

    inner.appendChild(brand);
    inner.appendChild(nav);
    inner.appendChild(actions);
    root.appendChild(inner);
  }
}
