import JSXButton from '../src/JSXButton';
import { mount } from '@vue/test-utils';

describe('Test JSXButton', () => {
  test('content', () => {
    const Comp = {
      template: `<div><JSXButton></JSXButton></div>`,
    };
    const wrapper = mount(Comp, {
      global: {
        components: {
          JSXButton,
        },
      },
    });
    expect(wrapper.findComponent({ name: JSXButton.name }).text()).toContain('JSX');
  });
});
