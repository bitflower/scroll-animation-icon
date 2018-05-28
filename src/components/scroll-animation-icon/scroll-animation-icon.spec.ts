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
      expect(element.textContent.trim()).toEqual('Hello, World! I\'m');
    });

    it('should work with a word color parameter', async () => {
      element.color = 'red';
      await testWindow.flush();
      expect(element.textContent.trim()).toEqual('Hello, World! I\'m Peter');
    });

    it('should work with a hex color parameter', async () => {
      element.color = '#CCCCCC';
      await testWindow.flush();
      expect(element.textContent.trim()).toEqual('Hello, World! I\'m Peter');
    });

    // it('should work with a last name', async () => {
    //   element.last = 'Parker';
    //   await testWindow.flush();
    //   expect(element.textContent.trim()).toEqual('Hello, World! I\'m  Parker');
    // });

    // it('should work with both a first and a last name', async () => {
    //   element.first = 'Peter'
    //   element.last = 'Parker';
    //   await testWindow.flush();
    //   expect(element.textContent.trim()).toEqual('Hello, World! I\'m Peter Parker');
    // });
  });
});
