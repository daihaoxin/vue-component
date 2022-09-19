import { defineComponent, h } from 'vue';

export default defineComponent({
  name: 'JSXButton',
  // template:'<button>MyButton</button>'
  render() {
    const aa = () => {
      const map = new Map();
      map.set('a', 100);
    };
    return (
      <button class="test" onClick={aa}>
        JSX 666
      </button>
    );
  },
});
