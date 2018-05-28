import { Component, Prop } from '@stencil/core';

@Component({
  tag: 'scroll-animation-icon',
  styleUrl: 'scroll-animation-icon.css',
  shadow: true
})
export class ScrollAnimationIcon {

  @Prop() color: string;

  private getStyle(): any {
    return {
      'box-shadow': `inset 0 0 0 1px ${this.color}`
    };
  }

  render() {
    return (
      <div class='icon-scroll' style={this.getStyle()}></div>
    );
  }
}
