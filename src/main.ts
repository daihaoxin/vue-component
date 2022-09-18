import MyButton from './MyButton';
import JSXButton from './JSXButton';
import SFCButton from './my-button';
import { type App } from 'vue';
import './test.css';
import './style.less';
export { MyButton, JSXButton, SFCButton };
export default {
  install(app: App) {
    const a = '1111';
    app.component(MyButton.name, MyButton);
    app.component(JSXButton.name, JSXButton);
    app.component(SFCButton.name, SFCButton);
  },
};
