import Vue from "vue";
import App from "./App.vue";
import Axios from "axios";
import yaml from "js-yaml";
import Viewer from "v-viewer";
import "@/assets/less/common.less";
import "viewerjs/dist/viewer.css";

Vue.use(Viewer);
Vue.config.productionTip = false;
Vue.prototype.$http = Axios;
Vue.prototype.$Y = yaml;

new Vue({
  render: h => h(App)
}).$mount("#app");
