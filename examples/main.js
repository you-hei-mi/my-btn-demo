import { createApp } from 'vue'
import App from './App.vue'
// import MyBtnDemo from './../packages/index'
import MyBtnDemo from 'my-btn-demo'

// 创建Vue应用实例
const app = createApp(App);
 
app.use(MyBtnDemo);
 
// 挂载根组件
app.mount('#app');
