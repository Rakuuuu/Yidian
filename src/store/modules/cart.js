const cart = {
    namespaced: true,
    state: {
        cartList: [] // 购物车列表
    },
    getters:{
        getCartList: (state) =>{
            console.log(state.cartList)
            return state.cartList
        }
    },
    mutations:{
        addToCart: (state, newList) =>{
            state.cartList = newList
        },
        changeCart: (state, newList) =>{
            state.cartList = newList
        },
        deleteItems: (state, result) => {
            console.log('delete-start----',state.cartList)
            state.cartList = state.cartList.filter((v) => {
                return !result.includes(v.id)
            })
            console.log('delete-end----',state.cartList)
        }
    },
    actions:{

    }
}
export default cart
