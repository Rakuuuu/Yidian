const order = {
    namespaced: true,
    state:{
        orderList: [],
        updatedOrderList: []
    },
    getters:{},
    mutations:{
        changeOrderList: (state, newList) => {
            state.orderList = newList
        },
        changeUpdatedOrderList: (state) => {
            state.updatedOrderList = state.updatedOrderList.concat(state.orderList);
        }
    },
    actions:{}
}

export default order
