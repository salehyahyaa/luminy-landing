import { Component } from '../core/Component';

export interface HighlightItemDefinition {
  readonly step: string;
  readonly title: string;
  readonly description: string;
}

export interface HighlightsCopy {
  readonly quote: string;
  readonly attribution: string;
}

export class HighlightsSection extends Component {
  public constructor(
    private readonly items: readonly HighlightItemDefinition[],
    private readonly aside: HighlightsCopy,
  ) {
    super('section highlights', 'section');
    this.initialize();
  }

  protected buildElement(root: HTMLElement): void {
    root.id = 'use-cases';

    const container = this.createElement('div', 'container');

    const label = this.createElement('span', 'section__label', 'Highlights');
    const title = this.createElement('h2', 'section__title', 'From first sketch to final pixel');
    const lead = this.createElement(
      'p',
      'section__lead',
      'A simple rhythm your whole team can follow — brief, build, review, ship — with room to adapt when the work gets messy.',
    );

    const layout = this.createElement('div', 'highlights__layout');

    const list = document.createElement('ul');
    list.className = 'highlights__list';

    for (const item of this.items) {
      const li = document.createElement('li');
      li.className = 'highlights__item';

      const badge = this.createElement('div', 'highlights__badge', item.step);
      const body = this.createElement('div', '');
      const itemTitle = this.createElement('h3', 'highlights__item-title', item.title);
      const itemText = this.createElement('p', 'highlights__item-text', item.description);

      body.appendChild(itemTitle);
      body.appendChild(itemText);
      li.appendChild(badge);
      li.appendChild(body);
      list.appendChild(li);
    }

    const aside = this.createElement('aside', 'highlights__aside');
    const quote = this.createElement('blockquote', 'highlights__quote', this.aside.quote);
    const cite = this.createElement('p', 'highlights__cite', this.aside.attribution);

    aside.appendChild(quote);
    aside.appendChild(cite);

    layout.appendChild(list);
    layout.appendChild(aside);

    container.appendChild(label);
    container.appendChild(title);
    container.appendChild(lead);
    container.appendChild(layout);
    root.appendChild(container);
  }
}
