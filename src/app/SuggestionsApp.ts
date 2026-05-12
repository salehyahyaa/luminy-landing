import type { SiteConfig } from '../config/site.config';
import { LEGAL_SUPPORT_EMAIL } from '../legal/copy';
import { Navbar } from '../components/Navbar';
import { Footer } from '../components/Footer';
import { Mountable } from '../core/Mountable';
import { openMailto } from '../ui/openMailto';
import {
  checkSuggestionSendAllowed,
  recordSuggestionSend,
} from '../ui/suggestionsRateLimit';
import { showTransientToast } from '../ui/transientToast';

const DEFAULT_SUBJECT = 'Suggestion from user';

/** Support inbox for suggestion drafts (must match mailto `to`). */
const SUGGESTIONS_TO_EMAIL = LEGAL_SUPPORT_EMAIL;

/**
 * Suggestion form: opens the visitor's email client with a prefilled message to support.
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
    intro.textContent = `Share ideas or feedback. Send email opens your mail app with a draft to ${SUGGESTIONS_TO_EMAIL} — finish by pressing Send there.`;

    const form = document.createElement('form');
    form.className = 'suggestions-form';
    form.setAttribute('aria-labelledby', 'suggestions-title');

    const nameId = 'suggestion-name';
    const emailId = 'suggestion-email';
    const subjectId = 'suggestion-subject';
    const messageId = 'suggestion-message';

    form.appendChild(
      this.labeledField('Name', nameId, 'text', { required: true, autocomplete: 'name' }),
    );
    form.appendChild(
      this.labeledField('Email', emailId, 'email', { required: true, autocomplete: 'email' }),
    );
    form.appendChild(
      this.labeledField('Subject', subjectId, 'text', { required: true, value: DEFAULT_SUBJECT }),
    );
    form.appendChild(this.labeledTextarea('Message', messageId, { required: true }));

    const actions = document.createElement('div');
    actions.className = 'suggestions-form__actions';
    const submit = document.createElement('button');
    submit.type = 'submit';
    submit.className = 'suggestions-form__submit';
    submit.textContent = 'Send email';
    actions.appendChild(submit);
    form.appendChild(actions);

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }
      const name = (form.querySelector(`#${nameId}`) as HTMLInputElement).value.trim();
      const email = (form.querySelector(`#${emailId}`) as HTMLInputElement).value.trim();
      const subject = (form.querySelector(`#${subjectId}`) as HTMLInputElement).value.trim();
      const message = (form.querySelector(`#${messageId}`) as HTMLTextAreaElement).value.trim();

      const rate = checkSuggestionSendAllowed(email);
      if (!rate.ok) {
        showTransientToast(rate.message, 5200);
        return;
      }

      const body = `Name: ${name}\nEmail: ${email}\n\n${message}`;
      const mailto = `mailto:${SUGGESTIONS_TO_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

      showTransientToast(
        `Opening your email app — To: ${SUGGESTIONS_TO_EMAIL}. Press Send there to deliver your message.`,
        5200,
      );
      recordSuggestionSend(email);
      openMailto(mailto);
    });

    wrap.appendChild(h1);
    wrap.appendChild(intro);
    wrap.appendChild(form);

    main.appendChild(wrap);

    const footer = new Footer(this.config);

    this._element.appendChild(skip);
    navbar.mount(this._element);
    this._element.appendChild(main);
    footer.mount(this._element);
  }

  private labeledField(
    labelText: string,
    id: string,
    type: string,
    opts: { required?: boolean; autocomplete?: HTMLInputElement['autocomplete']; value?: string },
  ): HTMLElement {
    const row = document.createElement('div');
    row.className = 'suggestions-form__field';
    const label = document.createElement('label');
    label.className = 'suggestions-form__label';
    label.htmlFor = id;
    label.textContent = labelText;
    const input = document.createElement('input');
    input.id = id;
    input.type = type;
    input.className = 'suggestions-form__input';
    if (opts.required) input.required = true;
    if (opts.autocomplete) input.autocomplete = opts.autocomplete;
    if (opts.value !== undefined) input.value = opts.value;
    row.appendChild(label);
    row.appendChild(input);
    return row;
  }

  private labeledTextarea(labelText: string, id: string, opts: { required?: boolean }): HTMLElement {
    const row = document.createElement('div');
    row.className = 'suggestions-form__field';
    const label = document.createElement('label');
    label.className = 'suggestions-form__label';
    label.htmlFor = id;
    label.textContent = labelText;
    const ta = document.createElement('textarea');
    ta.id = id;
    ta.className = 'suggestions-form__textarea';
    ta.rows = 6;
    if (opts.required) ta.required = true;
    row.appendChild(label);
    row.appendChild(ta);
    return row;
  }
}
