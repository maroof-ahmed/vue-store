import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    setNewValue(state, newValue) {
      state.count = newValue;
    },
  },
  actions: {
    incrementCountAction({ commit }) {
      commit('increment');
    },
    updateCountAction({ commit }) {
      commit('setNewValue', 3);
    },
  },
  modules: {},
});
