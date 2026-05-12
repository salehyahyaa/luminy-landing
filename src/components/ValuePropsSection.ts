import { Component } from '../core/Component';

/**
 * Bridge between “What does Luminy include?” and Why choose Luminy on the home page.
 */
export class ValuePropsSection extends Component {
  public constructor() {
    super('section value-props', 'section');
    this.initialize();
  }

  protected buildElement(root: HTMLElement): void {
    root.id = 'why-luminy';

    const container = this.createElement('div', 'container');

    const layout = this.createElement('div', 'value-props__layout');
    const copy = this.createElement('div', 'value-props__copy');

    const statement = document.createElement('p');
    statement.className = 'value-props__statement';

    const parts: readonly string[] = [
      'We use the same ',
      'quantitative strategies',
      ' ',
      'hedge funds',
      ' use to power ',
      'your analytics',
      '.',
    ];

    for (let i = 0; i < parts.length; i++) {
      const text = parts[i]!;
      const isHighlight = i === 1 || i === 3 || i === 5;
      if (isHighlight) {
        const hl = document.createElement('span');
        hl.className = 'value-props__hl';
        hl.textContent = text;
        statement.appendChild(hl);
      } else {
        statement.appendChild(document.createTextNode(text));
      }
    }

    copy.appendChild(statement);

    layout.appendChild(copy);
    container.appendChild(layout);
    root.appendChild(container);
  }
}
