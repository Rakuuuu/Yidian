const header = {
    namespaced: true,
    state: {
        isEdit: false
    },
    mutations: {
        startEdit: (state) => {
            state.isEdit = true
        },
        endEdit: (state) => {
            state.isEdit = false
        }
    }
}

export default header
