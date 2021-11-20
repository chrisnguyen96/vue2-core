import Vue from 'vue';
import Vuex from 'vuex';

// Import modules
import authentication from './modules/auth';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    authentication,
  }
})
