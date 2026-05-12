import { Component } from '../core/Component';
import type { SiteConfig } from '../config/site.config';

export class Footer extends Component {
  public constructor(private readonly config: SiteConfig) {
    super('footer', 'footer');
    this.initialize();
  }

  protected buildElement(root: HTMLElement): void {
    root.id = 'footer';

    const container = this.createElement('div', 'container');

    const grid = this.createElement('div', 'footer__grid');

    const logoCell = this.createElement('div', 'footer__mark');
    const home = this.createElement('a', 'footer__logo-link');
    home.href = this.config.homeHref;
    home.setAttribute('aria-label', `${this.config.brandName} — home`);

    const logo = document.createElement('img');
    logo.src = this.config.logoSrc;
    logo.alt = '';
    logo.className = 'footer__logo';
    logo.width = 148;
    logo.height = 148;
    home.appendChild(logo);
    logoCell.appendChild(home);

    grid.appendChild(logoCell);

    for (const column of this.config.footerColumns) {
      const col = this.createElement('div', 'footer__column');
      col.appendChild(this.createElement('p', 'footer__heading', column.heading));
      const list = document.createElement('ul');
      list.className = 'footer__list';
      for (const link of column.links) {
        const li = document.createElement('li');
        const a = this.createElement('a', 'footer__link', link.label);
        if (link.copySupportEmail) {
          a.href = '#';
          a.setAttribute('data-copy-support-email', '');
          a.setAttribute('role', 'button');
          a.setAttribute('aria-label', 'Copy support email to clipboard');
        } else {
          a.href = link.href;
        }
        li.appendChild(a);
        list.appendChild(li);
      }
      col.appendChild(list);
      grid.appendChild(col);
    }

    const bottom = this.createElement('div', 'footer__bottom');
    const copyright = this.createElement('p', 'footer__copyright', this.config.copyright);
    bottom.appendChild(copyright);

    const socialLinks = [
      { network: 'LinkedIn', href: '#', abbr: 'in' },
      { network: 'Instagram', href: '#', abbr: 'IG' },
      { network: 'TikTok', href: '#', abbr: 'TT' },
    ] as const;

    const socialList = document.createElement('ul');
    socialList.className = 'footer__social';

    for (const item of socialLinks) {
      const li = document.createElement('li');
      const link = this.createElement('a', 'footer__social-link');
      link.href = item.href;
      link.setAttribute('aria-label', item.network);
      link.title = item.network;

      const slot = this.createElement('span', 'footer__social-slot');
      slot.setAttribute('data-network', item.network.toLowerCase());
      slot.textContent = item.abbr;

      link.appendChild(slot);
      li.appendChild(link);
      socialList.appendChild(li);
    }

    bottom.appendChild(socialList);

    container.appendChild(grid);
    container.appendChild(bottom);
    root.appendChild(container);
  }
}
