/**
 * Base type for objects that can create and attach DOM.
 * Subclasses own a single root element and expose lifecycle hooks.
 */
export abstract class Mountable {
  public abstract readonly element: HTMLElement;

  public mount(parent: HTMLElement): void {
    parent.appendChild(this.element);
  }
}
