import { Component } from '../core/Component';

/**
 * Placeholder “Why choose Luminy” band — content TBD.
 */
export class HighlightsSection extends Component {
  public constructor() {
    super('section highlights why-choose-luminy', 'section');
    this.initialize();
  }

  protected buildElement(root: HTMLElement): void {
    root.id = 'why-choose-luminy';

    const container = this.createElement('div', 'container');

    const title = document.createElement('h2');
    title.className = 'section__title';
    title.id = 'why-choose-luminy-heading';
    title.textContent = 'Why choose Luminy';

    root.setAttribute('aria-labelledby', 'why-choose-luminy-heading');

    container.appendChild(title);
    root.appendChild(container);
  }
}
