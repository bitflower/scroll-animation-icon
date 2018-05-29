import { TestWindow } from '@stencil/core/testing';
import { ScrollDownIcon } from './scroll-down-icon';

describe('scroll-down-icon', () => {
  it('should build', () => {
    expect(new ScrollDownIcon()).toBeTruthy();
  });

  describe('rendering', () => {
    let element: HTMLScrollDownIconElement;
    let testWindow: TestWindow;
    beforeEach(async () => {
      testWindow = new TestWindow();
      element = await testWindow.load({
        components: [ScrollDownIcon],
        html: '<scroll-down-icon></scroll-down-icon>'
      });
    });

    it('should work without parameters', () => {
      expect(element.innerHTML.trim()).toEqual('<div class=\"icon-scroll-container\" data-scroll-down-icon=\"\"><div class=\"icon-scroll\" data-scroll-down-icon=\"\"></div></div>');
    });

    // it('should work with a word color parameter', async () => {
    //   element.color = 'red';
    //   await testWindow.flush();
    //   expect(element.innerHTML.trim()).toEqual('<div class=\"icon-scroll\" style=\"box-shadow: inset 0 0 0 1px red;\" data-scroll-down-icon=\"\"></div>');
    // });

    // it('should work with a hex color parameter', async () => {
    //   element.color = '#CCCCCC';
    //   await testWindow.flush();
    //   expect(element.innerHTML.trim()).toEqual('<div class=\"icon-scroll\" style=\"box-shadow: inset 0 0 0 1px #CCCCCC;\" data-scroll-down-icon=\"\"></div>');
    // });

  });
});
