import appStoreBadgeUrl from '../../images/Download_on_App.svg';
import macAppBadgeUrl from '../../images/Download_on_Mac_App.svg';
import { Component } from '../core/Component';

export class Hero extends Component {
  public constructor() {
    super('hero', 'section');
    this.initialize();
  }

  protected buildElement(root: HTMLElement): void {
    root.id = 'top';
    root.setAttribute('aria-labelledby', 'hero-heading');

    const container = this.createElement('div', 'container hero__container');
    const grid = this.createElement('div', 'hero__grid');

    const copy = this.createElement('div', 'hero__copy');

    const title = document.createElement('h1');
    title.id = 'hero-heading';
    title.className = 'hero__headline';
    title.appendChild(this.createElement('span', 'hero__headline-brand', 'Meet Luminy'));
    title.appendChild(document.createElement('br'));
    title.appendChild(document.createTextNode('Track your finances'));
    title.appendChild(document.createElement('br'));
    title.appendChild(document.createTextNode('with AI-powered insights'));

    const desc = this.createElement(
      'p',
      'hero__desc',
      'The AI-powered app that puts every bank account in one place. Connect yours for quantitative insights and analytics on your personal finances.',
    );

    const actions = this.createElement('div', 'hero__actions');
    const appStore = this.createElement('a', 'hero__app-store');
    appStore.href = '#';
    appStore.setAttribute('aria-label', 'Download on the App Store');
    const appImg = document.createElement('img');
    appImg.src = appStoreBadgeUrl;
    appImg.alt = '';
    appImg.className = 'hero__app-store-img';
    appImg.width = 120;
    appImg.height = 40;
    appStore.appendChild(appImg);

    const macApp = this.createElement('a', 'hero__app-store');
    macApp.href = '#';
    macApp.setAttribute('aria-label', 'Download on the Mac App Store');
    const macImg = document.createElement('img');
    macImg.src = macAppBadgeUrl;
    macImg.alt = '';
    macImg.className = 'hero__app-store-img';
    macImg.width = 157;
    macImg.height = 40;
    macApp.appendChild(macImg);

    actions.appendChild(appStore);
    actions.appendChild(macApp);

    copy.appendChild(title);
    copy.appendChild(desc);
    copy.appendChild(actions);

    const mockHost = this.createElement('div', 'hero__mock-host');
    mockHost.id = 'hero-mock';
    mockHost.setAttribute('aria-hidden', 'true');
    mockHost.innerHTML = Hero.MOCK_HTML;

    grid.appendChild(copy);
    grid.appendChild(mockHost);
    container.appendChild(grid);
    root.appendChild(container);
  }

  /** Static dashboard skeleton — no user input; safe innerHTML. */
  private static readonly MOCK_HTML = `
    <div class="hero__mock">
      <div class="hero__mock-topbar">
        <span class="hero__mock-dot"></span><span class="hero__mock-dot"></span><span class="hero__mock-dot"></span>
      </div>
      <div class="hero__mock-layout">
        <aside class="hero__mock-sidebar">
          <div class="hero__mock-logo"></div>
          <div class="hero__mock-nav">
            <div class="hero__mock-nav-item hero__mock-nav-item--active"></div>
            <div class="hero__mock-nav-item"></div>
            <div class="hero__mock-nav-item"></div>
            <div class="hero__mock-nav-item"></div>
            <div class="hero__mock-nav-item"></div>
          </div>
        </aside>
        <div class="hero__mock-main">
          <header class="hero__mock-header">
            <div class="hero__mock-heading">
              <p class="hero__mock-greet">Overview</p>
              <p class="hero__mock-sub">Net worth & cash flow</p>
            </div>
            <div class="hero__mock-search"></div>
          </header>
          <div class="hero__mock-cards">
            <div class="hero__mock-card">
              <p class="hero__mock-card-label">Total balance</p>
              <p class="hero__mock-card-value">$184,320</p>
              <div class="hero__mock-spark"></div>
            </div>
            <div class="hero__mock-card">
              <p class="hero__mock-card-label">Spending (30d)</p>
              <p class="hero__mock-card-value">$8,942</p>
              <div class="hero__mock-sk hero__mock-sk--row"></div>
            </div>
            <div class="hero__mock-card">
              <p class="hero__mock-card-label">Subscriptions</p>
              <p class="hero__mock-card-value hero__mock-card-value--sm">$287 / mo</p>
              <div class="hero__mock-sk hero__mock-sk--short"></div>
            </div>
          </div>
          <div class="hero__mock-split">
            <div class="hero__mock-chart-block">
              <div class="hero__mock-block-head">
                <span>Cash flow</span>
                <span class="hero__mock-pill">Last 6 months</span>
              </div>
              <div class="hero__mock-chart">
                <div class="hero__mock-bar" style="--h:42%"></div>
                <div class="hero__mock-bar" style="--h:55%"></div>
                <div class="hero__mock-bar" style="--h:38%"></div>
                <div class="hero__mock-bar" style="--h:72%"></div>
                <div class="hero__mock-bar" style="--h:48%"></div>
                <div class="hero__mock-bar hero__mock-bar--accent" style="--h:88%"></div>
              </div>
            </div>
            <div class="hero__mock-insights">
              <div class="hero__mock-block-head">
                <span>Insights</span>
              </div>
              <div class="hero__mock-insight">
                <div class="hero__mock-sk hero__mock-sk--icon"></div>
                <div>
                  <p class="hero__mock-insight-title">Unusual activity</p>
                  <p class="hero__mock-insight-text">Restaurant spend +18% vs your usual</p>
                </div>
              </div>
              <div class="hero__mock-insight">
                <div class="hero__mock-sk hero__mock-sk--icon"></div>
                <div>
                  <p class="hero__mock-insight-title">Renewal soon</p>
                  <p class="hero__mock-insight-text">Cloud storage renews in 5 days</p>
                </div>
              </div>
            </div>
          </div>
          <div class="hero__mock-bottom">
            <div class="hero__mock-list">
              <div class="hero__mock-block-head"><span>Recent transactions</span></div>
              <div class="hero__mock-tx"><div class="hero__mock-tx-icon"></div><div><p class="hero__mock-tx-name">Whole Foods</p><p class="hero__mock-tx-meta">Groceries · Today</p></div><span class="hero__mock-tx-amt">−$84.20</span></div>
              <div class="hero__mock-tx"><div class="hero__mock-tx-icon"></div><div><p class="hero__mock-tx-name">Payroll deposit</p><p class="hero__mock-tx-meta">Income · Yesterday</p></div><span class="hero__mock-tx-amt hero__mock-tx-amt--pos">+$6,250.00</span></div>
              <div class="hero__mock-tx"><div class="hero__mock-tx-icon"></div><div><p class="hero__mock-tx-name">Metro Transit</p><p class="hero__mock-tx-meta">Transit · Mon</p></div><span class="hero__mock-tx-amt">−$2.75</span></div>
            </div>
            <div class="hero__mock-subs">
              <div class="hero__mock-block-head"><span>Active subscriptions</span></div>
              <div class="hero__mock-sub-row"><span class="hero__mock-sub-name">Productivity suite</span><span class="hero__mock-sub-price">$12/mo</span></div>
              <div class="hero__mock-sub-row"><span class="hero__mock-sub-name">Music</span><span class="hero__mock-sub-price">$10.99/mo</span></div>
              <div class="hero__mock-sub-row"><span class="hero__mock-sub-name">Fitness</span><span class="hero__mock-sub-price">$9/mo</span></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `.trim();
}
