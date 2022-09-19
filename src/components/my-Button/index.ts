import MyButton from './MyButton';
import { type App } from 'vue';
import JSXButton from '../jsx-button/JSXButton';

MyButton.install = function (app: App) {
  if (app.component(JSXButton.name)) {
    return;
  }
  app.component(MyButton.name, MyButton);
};

export default MyButton;
