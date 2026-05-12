import { LEGAL_SUPPORT_EMAIL } from '../legal/copy';
import { showTransientToast } from './transientToast';

export async function copySupportEmailAndToast(): Promise<void> {
  try {
    await navigator.clipboard.writeText(LEGAL_SUPPORT_EMAIL);
    showTransientToast('Email copied');
  } catch {
    showTransientToast('Could not copy email');
  }
}

/**
 * Event delegation: footer "Contact us" uses `a[data-copy-support-email]`.
 */
export class SupportEmailCopyController {
  private readonly onClick = (event: MouseEvent): void => {
    const target = event.target;
    if (!(target instanceof Element)) return;
    const anchor = target.closest<HTMLAnchorElement>('a[data-copy-support-email]');
    if (!anchor) return;
    event.preventDefault();
    void copySupportEmailAndToast();
  };

  public start(): void {
    document.body.addEventListener('click', this.onClick);
  }

  public stop(): void {
    document.body.removeEventListener('click', this.onClick);
  }
}
