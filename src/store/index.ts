import Vue from 'vue';
import Vuex from 'vuex';
import { getAllProducts } from '@/api/getAllProducts';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
    products: [],
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    setNewValue(state, newValue) {
      state.count = newValue;
    },
    setProducts(state, payload) {
      state.products = payload;
    },
  },
  actions: {
    incrementCountAction({ commit }) {
      commit('increment');
    },
    updateCountAction({ commit }) {
      commit('setNewValue', 3);
    },

    async fetchAllProducts({ commit }) {
      let data;
      try {
        data = await getAllProducts();
        commit('setProducts', data);
      } catch (err) {
        console.log(err);
      }
      return data;
    },
  },
  modules: {},
});
