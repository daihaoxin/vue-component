import type { App, Component } from 'vue';
import './base.less';
import SFCButton from './components/sfc-button';
import MyButton from './components/my-Button';
import JSXButton from './components/jsx-button';

const componentMap: Record<string, Component> = { MyButton, JSXButton, SFCButton };
const install = (app: App) => {
  Object.values(componentMap).forEach((component) => {
    app.component(component.name as string, component);
  });
};
export default {
  install,
  ...componentMap,
};
