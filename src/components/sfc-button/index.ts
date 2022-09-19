import SFCButton from './SFCButton.vue';
import type { App } from 'vue';
import JSXButton from '../jsx-button/JSXButton';

SFCButton.install = function (app: App) {
  if (app.component(JSXButton.name)) {
    return;
  }
  app.component(SFCButton.name, SFCButton);
};

export default SFCButton;
