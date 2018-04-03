// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Vuex from 'vuex'
import router from './router'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    users: [],
    user: null,
    error: null,
    message: null,
    loading: false
  },
  mutations: {
    LOADING (state, loading) {
      state.loading = loading
    },
    MESSAGE (state, message) {
      state.message = message
    },
    USERS_SET (state, users) {
      state.users = users;
    },
    USERS_SELECT (state, user) {
      state.user = user;
    },
    USER_UPDATE (state, props) {
      state.user = Object.assign(state.user, props)
    }
  },
  actions: {
    USERS_LOAD (context) {
      let users = [
        {"Id": 1, "Name": "Henric"},
        {"Id": 2, "Name": "Niklas"},
      ]

      context.commit("USERS_SET", users)
    },
    USERS_SELECT (context, id) {
      if (context.state.users.length == 0) {
        context.dispatch("USERS_LOAD");
      }
      
      let user = null;
      for (let u of context.state.users) {
        // Check using ==, one is string the other one int
        if (u.Id == id) {
          user = u;
        }
      }

      context.commit("USERS_SELECT", user)
    },
    USER_SAVE (context) {
      context.commit("LOADING", true)

      setTimeout(() => {
        context.commit("MESSAGE", "Saved!")
        context.commit("LOADING", false)
      }, 2000)
    }
  }
})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store: store,
  components: { App },
  template: '<App/>'
})
