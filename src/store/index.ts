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
    setIncrementCount(state) {
      state.count++;
    },
    setDecrementCount(state) {
      if (state.count == 0) return;
      state.count--;
    },
    setProducts(state, payload) {
      state.products = payload;
    },
  },
  actions: {
    incrementCountAction({ commit }) {
      commit('setIncrementCount');
    },
    decrementCountAction({ commit }) {
      commit('setDecrementCount');
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
