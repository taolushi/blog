import { createStore } from 'vuex'

export interface GlobalDataProps {
    token: string,
    userInfo: {}
} 

const store = createStore<GlobalDataProps>({
    state: {
        token: '',
        userInfo: {}
    },
    mutations: {

    },
    actions: {
        
    }
})