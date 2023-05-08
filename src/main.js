import { createApp } from 'vue'
import App from './App.vue'
import 'vant/lib/index.css';
import '@/common/css/reset.less'
import 'amfe-flexible';
import router from '@/router/index';
import store from "@/store";
import {
    Toast,
    Button,
    Icon,
    Stepper,
    Tab,
    Tabs,
    TreeSelect,
    ActionBar,
    ActionBarIcon,
    ActionBarButton,
    Checkbox,
    CheckboxGroup,
    SubmitBar,
    ContactCard,
    Card,
    AddressList
} from "vant";

const app = createApp(App)

app
    .use(AddressList)
    .use(Button)
    .use(Card)
    .use(Checkbox)
    .use(CheckboxGroup)
    .use(ContactCard)
    .use(Icon)
    .use(Tab)
    .use(Tabs)
    .use(Toast)
    .use(TreeSelect)
    .use(Stepper)
    .use(SubmitBar)
    .use(ActionBar)
    .use(ActionBarIcon)
    .use(ActionBarButton)


app
    .use(router)
    .use(store)
    .mount('#app')
