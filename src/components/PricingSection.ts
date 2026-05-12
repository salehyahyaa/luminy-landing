import { Component } from '../core/Component';

interface PricingFeature {
  readonly title: string;
  readonly detail?: string;
}

const FREE_FEATURES: readonly PricingFeature[] = [
  { title: 'iOS & Mac', detail: 'The same app experience on iPhone and Mac' },
  { title: 'Connect your accounts', detail: 'See balances and transactions in one dashboard' },
  { title: 'Core insights', detail: 'Spending trends, subscriptions, and cash-flow basics' },
  { title: 'Bank-level security', detail: 'Encryption and controls built for your financial data' },
];

const PRO_FEATURES: readonly PricingFeature[] = [
  {
    title: 'Advanced analytics',
    detail: 'Deeper categories, history, and quantitative-style views of your money',
  },
  { title: 'Exports & reporting', detail: 'Take your data with you when you need it' },
  { title: 'Priority support', detail: 'Faster responses from our team when you need help' },
  { title: 'Early access', detail: 'Try new features before they roll out to everyone' },
];

/**
 * Dark two-column pricing (Free + Pro). Used on `pricing.html`; section id `pricing` for deep links.
 */
export class PricingSection extends Component {
  public constructor() {
    super('section pricing-anchor', 'section');
    this.initialize();
  }

  protected buildElement(root: HTMLElement): void {
    root.id = 'pricing';
    root.setAttribute('aria-labelledby', 'pricing-heading');

    const wrap = this.createElement('div', 'pricing-dark');
    const intro = this.createElement('div', 'pricing-dark__intro');
    const h2 = this.createElement('h2', 'pricing-dark__title', 'Pick your plan');
    h2.id = 'pricing-heading';
    const strap = this.createElement(
      'p',
      'pricing-dark__strapline',
      'We use the same quantitative strategies hedge funds use to power your analytics.',
    );
    const lead = this.createElement(
      'p',
      'pricing-dark__lead',
      'Start free on iPhone and Mac, or unlock the full Luminy experience with Pro.',
    );
    intro.appendChild(h2);
    intro.appendChild(strap);
    intro.appendChild(lead);

    const grid = this.createElement('div', 'pricing-dark__grid');

    grid.appendChild(this.buildFreeCard());
    grid.appendChild(this.buildProCard());

    wrap.appendChild(intro);
    wrap.appendChild(grid);
    root.appendChild(wrap);
  }

  private buildFreeCard(): HTMLElement {
    const card = this.createElement('article', 'pricing-card');
    card.appendChild(this.createElement('h3', 'pricing-card__name', 'Luminy'));
    card.appendChild(this.createElement('p', 'pricing-card__tagline', 'Free, forever'));

    const priceRow = this.createElement('div', 'pricing-card__price-row');
    const price = this.createElement('span', 'pricing-card__price', '$0');
    const period = this.createElement('span', 'pricing-card__period', '/month');
    priceRow.appendChild(price);
    priceRow.appendChild(period);
    card.appendChild(priceRow);

    card.appendChild(this.buildFeatureList(FREE_FEATURES));

    const actions = this.createElement('div', 'pricing-card__actions');

    const iphone = this.createElement('a', 'pricing-card__platform', 'For iPhone');
    iphone.href = '#';
    iphone.setAttribute('aria-label', 'Download Luminy for iPhone');
    iphone.prepend(PricingSection.phoneIcon());

    const mac = this.createElement('a', 'pricing-card__platform', 'For macOS');
    mac.href = '#';
    mac.setAttribute('aria-label', 'Download Luminy for Mac');
    mac.prepend(PricingSection.laptopIcon());

    actions.appendChild(iphone);
    actions.appendChild(mac);
    card.appendChild(actions);

    return card;
  }

  private buildProCard(): HTMLElement {
    const card = this.createElement('article', 'pricing-card pricing-card--pro');

    const nameRow = this.createElement('div', 'pricing-card__name-row');
    nameRow.appendChild(this.createElement('h3', 'pricing-card__name', 'Luminy'));
    nameRow.appendChild(this.createElement('span', 'pricing-card__badge', 'PRO'));
    card.appendChild(nameRow);

    card.appendChild(this.createElement('p', 'pricing-card__tagline', 'Everything in Free, leveled up'));

    const priceRow = this.createElement('div', 'pricing-card__price-row');
    const price = this.createElement('span', 'pricing-card__price', '$14.99');
    const period = this.createElement('span', 'pricing-card__period', '/month');
    priceRow.appendChild(price);
    priceRow.appendChild(period);
    card.appendChild(priceRow);

    card.appendChild(this.createElement('p', 'pricing-card__bill-note', 'Cancel anytime. Taxes may apply.'));

    card.appendChild(this.buildFeatureList(PRO_FEATURES));

    const cta = this.createElement('a', 'pricing-card__cta', 'Start free trial');
    cta.href = '#';
    card.appendChild(cta);

    return card;
  }

  private buildFeatureList(items: readonly PricingFeature[]): HTMLElement {
    const ul = document.createElement('ul');
    ul.className = 'pricing-card__list';
    for (const item of items) {
      const li = document.createElement('li');
      li.className = 'pricing-card__li';
      const mark = this.createElement('span', 'pricing-card__check', '✓');
      const textWrap = this.createElement('span', 'pricing-card__li-text');
      textWrap.appendChild(this.createElement('span', 'pricing-card__li-title', item.title));
      if (item.detail) {
        textWrap.appendChild(this.createElement('span', 'pricing-card__li-detail', item.detail));
      }
      li.appendChild(mark);
      li.appendChild(textWrap);
      ul.appendChild(li);
    }
    return ul;
  }

  private static phoneIcon(): SVGElement {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('class', 'pricing-card__platform-icon');
    svg.setAttribute('viewBox', '0 0 24 24');
    svg.setAttribute('width', '18');
    svg.setAttribute('height', '18');
    svg.setAttribute('aria-hidden', 'true');
    const p = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    p.setAttribute(
      'd',
      'M16 2H8C6.9 2 6 2.9 6 4v16c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-1.5 2v1h-5V4h5zm-5 16V9h5v11h-5z',
    );
    p.setAttribute('fill', 'currentColor');
    svg.appendChild(p);
    return svg;
  }

  private static laptopIcon(): SVGElement {
    const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('class', 'pricing-card__platform-icon');
    svg.setAttribute('viewBox', '0 0 24 24');
    svg.setAttribute('width', '18');
    svg.setAttribute('height', '18');
    svg.setAttribute('aria-hidden', 'true');
    const p = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    p.setAttribute(
      'd',
      'M20 16V6c0-1.1-.9-2-2-2H6c-1.1 0-2 .9-2 2v10H2v2h20v-2h-2zm-6 0H10v-1h4v1zM6 6h12v9H6V6z',
    );
    p.setAttribute('fill', 'currentColor');
    svg.appendChild(p);
    return svg;
  }
}
