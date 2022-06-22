import Vue from 'vue'
import Vuex from 'vuex'
import jwt_decode from 'jwt-decode';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        token: localStorage.getItem("adal.idtoken"),
        roles: getRoles(localStorage.getItem("adal.idtoken")),
        username: getUsername(localStorage.getItem("adal.idtoken"))
    },
    getters: {
        logUsername: (state) => state.username,
        roles: (state) => state.roles,
    },
    mutations: {
        auth_success: (state, token) => {
            state.token = token;
        },
        setUsername: (state, data) => (state.username = data),
        setRoles: (state, data) => (state.roles = data),
    },
    actions: {
        login() {

        }
    },
    modules: {}
})

function getRoles(token) {
    try {
        if(jwt_decode(token).roles !== undefined){
            return jwt_decode(token).roles;

        }else{
            return ["User"]
        }
    } catch {
        return [];
    }
}

function getUsername(token) {
    try {
        return jwt_decode(token).name + " " + jwt_decode(token).family_name;
    } catch {
        return "";
    }
}
