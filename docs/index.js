import './assets/docs.less';
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App';
import routes from './router.config';
import demoBlock from './components/demo-block';
import SideNav from './components/side-nav';
import NextDesign from '../src/index';

Vue.use(VueRouter);
Vue.component('demo-block', demoBlock);
Vue.component('side-nav', SideNav);

// init components
for (let i in NextDesign) {
  let module = NextDesign[i];
  if (!module.ignoreInit) {
    Vue.component(module.name, module);
  }
}

const AppContainer = Vue.extend(App);
const router = new VueRouter();

router.map(routes);

router.redirect({
  '*': '/component/alert'
});

router.beforeEach(function(transition) {
  window.scrollTo(0, 0);
  transition.next();
});

router.start(AppContainer, '#app-container');
