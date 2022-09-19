import { type App } from 'vue';
import JSXButton from './JSXButton';

JSXButton.install = (app: App) => {
  if (app.component(JSXButton.name)) {
    return;
  }
  app.component(JSXButton.name, JSXButton);
};

export default JSXButton;
