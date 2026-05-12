/**
 * Opens the system mail client. Prefer a real <a> click over location.assign — some
 * UAs mishandle mailto navigation.
 */
export function openMailto(href: string): void {
  const a = document.createElement('a');
  a.href = href;
  a.rel = 'noopener noreferrer';
  a.style.cssText = 'position:fixed;left:-9999px;top:0;opacity:0;pointer-events:none;';
  document.body.appendChild(a);
  a.click();
  requestAnimationFrame(() => {
    document.body.removeChild(a);
  });
}
