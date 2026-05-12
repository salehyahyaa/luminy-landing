import { ScrollAmbientController } from './ScrollAmbientController';
import { NavbarScrollAppearanceController } from './NavbarScrollAppearanceController';
import { SupportEmailCopyController } from './supportEmailCopy';

let supportCopy: SupportEmailCopyController | null = null;

/**
 * Ambient scroll background, navbar scroll styling, and Contact-us email copy.
 * Safe to call once per full page load.
 */
export function startMarketingChrome(): void {
  new ScrollAmbientController().start();
  new NavbarScrollAppearanceController().start();
  supportCopy?.stop();
  supportCopy = new SupportEmailCopyController();
  supportCopy.start();
}
