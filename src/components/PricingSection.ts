import { Component } from '../core/Component';

/** Minimal pricing block so navbar `#pricing` has a real scroll target */
export class PricingSection extends Component {
  public constructor() {
    super('section pricing-anchor', 'section');
    this.initialize();
  }

  protected buildElement(root: HTMLElement): void {
    root.id = 'pricing';
    root.setAttribute('aria-labelledby', 'pricing-heading');

    const container = this.createElement('div', 'container');

    const label = this.createElement('span', 'section__label', 'Pricing');
    const title = this.createElement('h2', 'section__title', 'Straightforward plans');
    title.id = 'pricing-heading';

    const lead = this.createElement(
      'p',
      'section__lead',
      'Simple tiers for small teams and growing orgs. Full details are on the way.',
    );

    container.appendChild(label);
    container.appendChild(title);
    container.appendChild(lead);
    root.appendChild(container);
  }
}
