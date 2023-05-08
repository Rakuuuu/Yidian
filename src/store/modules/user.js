const user = {
    namespaced: true,
    state:{
        userAddress: [
            {
                id: 1001,
                name: '大钊',
                tel: '13123456731',
                province: '广东省',
                city: '广州市',
                county: '天河区',
                addressDetail: 'asd',
                isDefault: true,
                areaCode: '110101',
            },
            {
                id: 1001,
                name: '阿钊',
                tel: '13123456731',
                province: '广东省',
                city: '广州市',
                county: '天河区',
                addressDetail: 'asd',
                isDefault: false,
                areaCode: '110101',
            },
        ],
    },
    mutations:{
        setAddress: (state, newAdd) => {
            state.userAddress = newAdd
        }
    }
}

export default user
