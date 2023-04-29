import { createApp } from 'vue'
import App from './App.vue'
import 'vant/lib/index.css';
import '@/common/css/reset.less'
import 'amfe-flexible';
import router from '@/router/index';
import {Button, Icon, Tab, Tabs} from "vant";

const app = createApp(App)
app.use(Button).use(Icon).use(Tab).use(Tabs)

app.use(router).mount('#app')
