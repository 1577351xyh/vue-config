import Vue from 'vue'
import Vuex from 'vuex'
import permission from './modules/permission'
import user from './modules/user'

Vue.use(Vuex);


const store = new Vuex.Store({
    //模块化引入两个子模块,管理用户信息,和菜单生成的两个模块
    modules: {permission, user},
    // 全局定义getters便于访问
    getters: {
        roles: state => state.user.roles,
        permission_routes: state => state.permission.routes,
    }
});
export default store
