import { Component, Element, Prop } from '@stencil/core';

@Component({
  tag: 'scroll-animation-icon',
  styleUrl: 'scroll-animation-icon.css',
  shadow: true
})
export class ScrollAnimationIcon {

  @Element()
  private element: HTMLElement;

  @Prop()
  color: string;

  protected componentWillLoad(): void {
    if (this.color) {
      this.element.style.setProperty("--main-color", this.color);
    }
  }

  render() {
    return (
      <div class='icon-scroll-container'>
        <div class='icon-scroll'></div>
      </div>
    );
  }
}
