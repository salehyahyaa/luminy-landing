import type { SiteConfig } from '../config/site.config';
import { LEGAL_SUPPORT_EMAIL } from '../legal/copy';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Mountable } from '../core/Mountable';
import { copySupportEmailAndToast } from '../ui/supportEmailCopy';

/**
 * Suggestions: same copy-to-clipboard + toast as footer “Contact us”
 * (runs once when the page loads; fallback control repeats copy on click).
 */
export class SuggestionsApp extends Mountable {
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
    main.className = 'main suggestions-page';

    const wrap = document.createElement('div');
    wrap.className = 'suggestions-layout container';

    const h1 = document.createElement('h1');
    h1.id = 'suggestions-title';
    h1.className = 'suggestions__title';
    h1.textContent = 'Suggestions';

    const intro = document.createElement('p');
    intro.className = 'suggestions__intro';
    intro.textContent =
      'Our support address is copied to your clipboard — paste it into your email app to share ideas or feedback. If your browser blocked automatic copy, use the button below.';

    const emailRow = document.createElement('p');
    emailRow.className = 'suggestions__email-row';
    const emailSpan = document.createElement('span');
    emailSpan.className = 'suggestions__email';
    emailSpan.textContent = LEGAL_SUPPORT_EMAIL;
    emailRow.appendChild(emailSpan);

    const actions = document.createElement('div');
    actions.className = 'suggestions__actions';
    const copyAgain = document.createElement('a');
    copyAgain.href = '#';
    copyAgain.className = 'suggestions__copy-cta';
    copyAgain.textContent = 'Copy support email';
    copyAgain.setAttribute('data-copy-support-email', '');
    copyAgain.setAttribute('role', 'button');
    copyAgain.setAttribute('aria-label', 'Copy support email to clipboard');
    actions.appendChild(copyAgain);

    wrap.appendChild(h1);
    wrap.appendChild(intro);
    wrap.appendChild(emailRow);
    wrap.appendChild(actions);

    main.appendChild(wrap);

    const footer = new Footer(this.config);

    this._element.appendChild(skip);
    navbar.mount(this._element);
    this._element.appendChild(main);
    footer.mount(this._element);

    queueMicrotask(() => {
      void copySupportEmailAndToast();
    });
  }
}
