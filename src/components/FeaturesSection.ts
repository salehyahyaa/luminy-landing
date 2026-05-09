import EmblaCarousel from 'embla-carousel';
import { Component } from '../core/Component';

interface IncludeSlide {
  readonly cardTitle: string;
  readonly cardBody: string;
}

const INCLUDES: readonly IncludeSlide[] = [
  {
    cardTitle: 'All accounts in one place',
    cardBody:
      'Connect banks and institutions so balances, transactions, and history stay unified in one dashboard.',
  },
  {
    cardTitle: 'Subscription tracking',
    cardBody:
      'Monitor recurring payments, upcoming renewals, and spending patterns automatically.',
  },
  {
    cardTitle: 'Spending analytics',
    cardBody:
      'Visualize monthly spending, category breakdowns, and cash flow trends at a glance.',
  },
  {
    cardTitle: 'AI-powered financial insights',
    cardBody:
      'Get intelligent summaries, unusual activity detection, and personalized analytics.',
  },
];

export class FeaturesSection extends Component {
  public constructor() {
    super('section features includes', 'section');
    this.initialize();
  }

  public override mount(parent: HTMLElement): void {
    super.mount(parent);
    this.setupEmbla();
  }

  private setupEmbla(): void {
    const viewport = this.element.querySelector<HTMLElement>('[data-includes-embla-viewport]');
    const dots = this.element.querySelector<HTMLElement>('[data-includes-dots]');
    const cards = [...this.element.querySelectorAll<HTMLButtonElement>('[data-includes-card]')];
    if (!viewport || !dots) return;

    const embla = EmblaCarousel(viewport, {
      loop: true,
      duration: 22,
    });

    const scrollToIndex = (i: number) => {
      embla.scrollTo(i);
    };

    const renderDots = () => {
      dots.replaceChildren();
      const n = embla.scrollSnapList().length;
      const active = embla.selectedScrollSnap();
      for (let i = 0; i < n; i++) {
        const dot = document.createElement('button');
        dot.type = 'button';
        dot.className = 'includes__dot' + (i === active ? ' includes__dot--active' : '');
        dot.setAttribute('aria-label', `Slide ${i + 1}`);
        dot.addEventListener('click', () => scrollToIndex(i));
        dots.appendChild(dot);
      }
    };

    const setActiveCard = (index: number) => {
      cards.forEach((btn, i) => {
        const on = i === index;
        btn.classList.toggle('includes-card--active', on);
        btn.setAttribute('aria-pressed', on ? 'true' : 'false');
      });
      renderDots();
    };

    cards.forEach((btn, i) => {
      btn.addEventListener('click', () => scrollToIndex(i));
    });

    embla.on('select', () => setActiveCard(embla.selectedScrollSnap()));
    embla.on('reInit', renderDots);

    setActiveCard(embla.selectedScrollSnap());
  }

  protected buildElement(root: HTMLElement): void {
    root.id = 'features';

    const wrap = this.createElement('div', 'container includes');

    const title = this.createElement('h2', 'includes__headline', 'What does Luminy include?');

    const layout = this.createElement('div', 'includes__layout');

    const phoneCol = this.createElement('div', 'includes__phone-col');
    phoneCol.appendChild(this.buildPhoneMock());

    const cardsCol = this.createElement('div', 'includes__cards-col');
    INCLUDES.forEach((item, index) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'includes-card' + (index === 0 ? ' includes-card--active' : '');
      btn.dataset.includesCard = '';
      btn.setAttribute('data-index', String(index));
      btn.setAttribute('aria-pressed', index === 0 ? 'true' : 'false');

      const ct = this.createElement('span', 'includes-card__title', item.cardTitle);
      const cb = this.createElement('p', 'includes-card__body', item.cardBody);
      btn.appendChild(ct);
      btn.appendChild(cb);
      cardsCol.appendChild(btn);
    });

    layout.appendChild(phoneCol);
    layout.appendChild(cardsCol);

    wrap.appendChild(title);
    wrap.appendChild(layout);
    root.appendChild(wrap);
  }

  private buildPhoneMock(): HTMLElement {
    const wrap = this.createElement('div', 'includes__phone-wrap');

    const device = this.createElement('div', 'includes__device');

    const screen = this.createElement('div', 'includes__screen');

    const viewport = this.createElement('div', 'includes__embla-viewport');
    viewport.dataset.includesEmblaViewport = '';

    const container = this.createElement('div', 'includes__embla-container');

    container.appendChild(this.slideDashboard());
    container.appendChild(this.slideSubscriptions());
    container.appendChild(this.slideSpending());
    container.appendChild(this.slideAi());

    viewport.appendChild(container);
    screen.appendChild(viewport);

    const notch = this.createElement('div', 'includes__notch');
    device.appendChild(notch);
    device.appendChild(screen);

    const dots = this.createElement('div', 'includes__dots');
    dots.dataset.includesDots = '';

    wrap.appendChild(device);
    wrap.appendChild(dots);
    return wrap;
  }

  private slideDashboard(): HTMLElement {
    const slide = this.createElement('div', 'includes__slide');
    slide.innerHTML = `
      <div class="inc-screen inc-screen--dash">
        <p class="inc-h">Overview</p>
        <div class="inc-bal">$184,320</div>
        <p class="inc-sub">Total balance</p>
        <div class="inc-row">
          <div class="inc-pill"><span class="inc-pill__l">Checking</span><span class="inc-pill__v">$42.1k</span></div>
          <div class="inc-pill"><span class="inc-pill__l">Savings</span><span class="inc-pill__v">$98.2k</span></div>
        </div>
        <div class="inc-list">
          <div class="inc-tx"><span class="inc-tx__n">Recent</span><span class="inc-tx__a">−$84</span></div>
          <div class="inc-tx inc-tx--pos"><span class="inc-tx__n">Income</span><span class="inc-tx__a">+$6,250</span></div>
        </div>
      </div>
    `;
    return slide;
  }

  private slideSubscriptions(): HTMLElement {
    const slide = this.createElement('div', 'includes__slide');
    slide.innerHTML = `
      <div class="inc-screen inc-screen--subs">
        <p class="inc-h">Subscriptions</p>
        <p class="inc-lead">$287 / month</p>
        <div class="inc-subrow"><span class="inc-subrow__n">Cloud storage</span><span class="inc-subrow__p">$12</span></div>
        <div class="inc-subrow"><span class="inc-subrow__n">Music</span><span class="inc-subrow__p">$10.99</span></div>
        <div class="inc-subrow"><span class="inc-subrow__n">Fitness</span><span class="inc-subrow__p">$9</span></div>
        <div class="inc-banner">Renewal in 5 days</div>
      </div>
    `;
    return slide;
  }

  private slideSpending(): HTMLElement {
    const slide = this.createElement('div', 'includes__slide');
    slide.innerHTML = `
      <div class="inc-screen inc-screen--chart">
        <p class="inc-h">Spending</p>
        <p class="inc-lead">This month</p>
        <div class="inc-bars">
          <div class="inc-bar" style="--h:38%"></div>
          <div class="inc-bar" style="--h:62%"></div>
          <div class="inc-bar" style="--h:45%"></div>
          <div class="inc-bar inc-bar--hi" style="--h:78%"></div>
          <div class="inc-bar" style="--h:52%"></div>
        </div>
        <div class="inc-legend"><span>Groceries</span><span>Dining</span><span>Transit</span></div>
      </div>
    `;
    return slide;
  }

  private slideAi(): HTMLElement {
    const slide = this.createElement('div', 'includes__slide');
    slide.innerHTML = `
      <div class="inc-screen inc-screen--ai">
        <p class="inc-h">Luminy</p>
        <div class="inc-chat">
          <div class="inc-bubble inc-bubble--bot">Your restaurant spend is 18% above usual this month.</div>
          <div class="inc-bubble inc-bubble--user">What should I trim?</div>
          <div class="inc-bubble inc-bubble--bot">Start with dining out — you have 4 charges over $60.</div>
        </div>
        <div class="inc-compose"><span class="inc-compose__ph">Ask anything…</span></div>
      </div>
    `;
    return slide;
  }
}
