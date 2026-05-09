import type { SiteConfig } from '../config/site.config';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { FeaturesSection } from '../components/FeaturesSection';
import { PricingSection } from '../components/PricingSection';
import { HighlightsSection } from '../components/HighlightsSection';
import { Footer } from '../components/Footer';
import { Mountable } from '../core/Mountable';

/**
 * Root application shell: owns layout regions and wires sections together.
 */
export class LuminyApp extends Mountable {
  private readonly _element: HTMLElement;

  public constructor(private readonly config: SiteConfig) {
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
    main.className = 'main';

    const hero = new Hero();
    const features = new FeaturesSection();

    const pricing = new PricingSection();

    const highlights = new HighlightsSection(
      [
        {
          step: '1',
          title: 'Frame the moment',
          description: 'Anchor each initiative with a short, living narrative your team can return to.',
        },
        {
          step: '2',
          title: 'Shape in the open',
          description: 'Keep exploration visible so the best ideas surface before they harden into assumptions.',
        },
        {
          step: '3',
          title: 'Finish with warmth',
          description: 'Close the loop with customers using language that matches the care in the build.',
        },
      ],
      {
        quote: '“We finally have a home for the work that used to live in ten different places.”',
        attribution: 'Jordan M., Head of Product Design',
      },
    );

    const footer = new Footer(this.config);

    hero.mount(main);
    features.mount(main);
    pricing.mount(main);
    highlights.mount(main);

    this._element.appendChild(skip);
    navbar.mount(this._element);
    this._element.appendChild(main);
    footer.mount(this._element);
  }
}
