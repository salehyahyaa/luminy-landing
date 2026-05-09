import { Mountable } from './Mountable';

/**
 * Reusable UI building block. Subclasses implement {@link buildElement}.
 */
export abstract class Component extends Mountable {
  private readonly _element: HTMLElement;

  protected constructor(
    rootClassName: string,
    tagName: keyof HTMLElementTagNameMap = 'div',
  ) {
    super();
    this._element = document.createElement(tagName);
    const rootClasses = rootClassName.trim().split(/\s+/).filter(Boolean);
    this._element.classList.add(...rootClasses);
  }

  public get element(): HTMLElement {
    return this._element;
  }

  /**
   * Call once at the end of the subclass constructor so parameter properties
   * (assigned after super() returns) are available to {@link buildElement}.
   */
  protected initialize(): void {
    this.buildElement(this._element);
  }

  protected abstract buildElement(root: HTMLElement): void;

  protected createElement<K extends keyof HTMLElementTagNameMap>(
    tag: K,
    className?: string,
    text?: string,
  ): HTMLElementTagNameMap[K] {
    const el = document.createElement(tag);
    if (className !== undefined && className !== '') {
      el.className = className;
    }
    if (text !== undefined) {
      el.textContent = text;
    }
    return el;
  }
}
