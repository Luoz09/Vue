import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
       headerTitle: 'is header'
  },
  mutations: {
     showShopInfo (state, value) {
           console.log('store : ' + value)
     }
  },
  actions: {

  }
})
