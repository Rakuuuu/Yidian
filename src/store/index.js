import {createStore} from "vuex";
import cart from "@/store/modules/cart";
import order from "@/store/modules/order";
import header from "@/store/modules/header";
import user from "@/store/modules/user";

export default createStore({
    modules:{
        user,
        cart,
        order,
        header
    }
})
