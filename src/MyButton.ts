import { defineComponent, h } from "vue";

export default defineComponent({
  name: "MyButton",
  // template:'<button>MyButton</button>'
  render() {
    const aa = () => {
      return Promise.reject(new Error("100"));
    };
    return h(
      "button",
      {
        click: aa,
      },
      "MyButton",
    );
  },
});
