import { TestWindow } from '@stencil/core/testing';
import { ScrollAnimationIcon } from './scroll-animation-icon';

describe('scroll-animation-icon', () => {
  it('should build', () => {
    expect(new ScrollAnimationIcon()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLScrollAnimationIconElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [ScrollAnimationIcon],
        html: '<scroll-animation-icon></scroll-animation-icon>'
      });
    });

    it('should work without parameters', () => {
      expect(element.innerHTML.trim()).toEqual('<div class=\"icon-scroll\" data-scroll-animation-icon=\"\"></div>');
    });

    // it('should work with a word color parameter', async () => {
    //   element.color = 'red';
    //   await testWindow.flush();
    //   expect(element.innerHTML.trim()).toEqual('<div class=\"icon-scroll\" style=\"box-shadow: inset 0 0 0 1px red;\" data-scroll-animation-icon=\"\"></div>');
    // });

    // it('should work with a hex color parameter', async () => {
    //   element.color = '#CCCCCC';
    //   await testWindow.flush();
    //   expect(element.innerHTML.trim()).toEqual('<div class=\"icon-scroll\" style=\"box-shadow: inset 0 0 0 1px #CCCCCC;\" data-scroll-animation-icon=\"\"></div>');
    // });

  });
});
