import { Component } from '../core/Component';

export interface FaqItem {
  readonly question: string;
  /** One or more short paragraphs for readability. */
  readonly answer: readonly string[];
}

const FAQ_ITEMS: readonly FaqItem[] = [
  {
    question: 'What is Luminy?',
    answer: [
      'Luminy brings your bank and investment accounts together in one place.',
      'You get quantitative-style analytics and AI-powered insights for spending, cash flow, subscriptions, and net worth. That means less time in spreadsheets and fewer apps to check.',
    ],
  },
  {
    question: 'Is Luminy a bank, broker, or financial advisor?',
    answer: [
      'No. Luminy is not a bank, broker-dealer, or registered investment adviser. We do not hold your money or execute trades.',
      'We help you view and understand information you choose to connect. Nothing in the app is personalized financial, legal, or tax advice.',
    ],
  },
  {
    question: 'How does account linking work?',
    answer: [
      'When you connect an institution, you sign in with your provider or an authorized data partner. That is subject to their terms and your consent.',
      'We only access the data needed to show balances, transactions, and insights in Luminy. You can disconnect accounts in the app when you want.',
    ],
  },
  {
    question: 'Is my financial data secure?',
    answer: [
      'We take security seriously. We use industry-standard safeguards, encryption in transit, and strict access limits for our team and partners who need to process data.',
      'No system is perfect. For full detail on how we collect, use, and keep information, read our Privacy Policy and Data Policy.',
    ],
  },
  {
    question: 'What devices can I use Luminy on?',
    answer: [
      'Luminy is built for iPhone and Mac. Download links are on our home page.',
      'Availability can vary by region or App Store timing as we roll out.',
    ],
  },
  {
    question: 'How do I get help or share feedback?',
    answer: [
      'Use Contact us or Suggestions in the footer to copy our support email and paste it into your mail app.',
      'We read every message. We try to reply when we can, but we may not respond to every inquiry right away.',
    ],
  },
] as const;

/**
 * id `#faq`; used on `faq.html`.
 */
export class FaqSection extends Component {
  public constructor() {
    super('section faq section--tight', 'section');
    this.initialize();
  }

  protected buildElement(root: HTMLElement): void {
    root.id = 'faq';
    root.setAttribute('aria-labelledby', 'faq-heading');

    const container = this.createElement('div', 'container');

    const label = this.createElement('span', 'section__label', 'FAQ');
    const title = this.createElement('h2', 'section__title', 'Questions, answered');
    title.id = 'faq-heading';

    const lead = this.createElement(
      'p',
      'section__lead',
      'Straight answers about what Luminy is, how linking works, and how to reach us.',
    );

    const list = document.createElement('div');
    list.className = 'faq__list';

    for (const item of FAQ_ITEMS) {
      const details = document.createElement('details');
      details.className = 'faq__item';

      const summary = document.createElement('summary');
      summary.className = 'faq__summary';
      summary.textContent = item.question;

      const panel = document.createElement('div');
      panel.className = 'faq__panel';

      const panelInner = document.createElement('div');
      panelInner.className = 'faq__panel-inner';
      for (const para of item.answer) {
        const p = document.createElement('p');
        p.className = 'faq__answer';
        p.textContent = para;
        panelInner.appendChild(p);
      }
      panel.appendChild(panelInner);

      details.appendChild(summary);
      details.appendChild(panel);
      list.appendChild(details);
    }

    container.appendChild(label);
    container.appendChild(title);
    container.appendChild(lead);
    container.appendChild(list);
    root.appendChild(container);
  }
}
