// Action Creator => adalah function yang me return sebuah object namanya action

export const Login = (username) => {
    return{
        type : 'LOGIN',
        payload : username,
    }
}

export const isLogin = () => {
    return{
        type : 'isLogin'
    }
}