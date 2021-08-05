import Vue from 'vue';
import Vuex from 'vuex';
import { getAllProducts } from '@/api/getAllProducts';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cart: [] as any[],
    products: [],
  },
  mutations: {
    setProducts(state, payload) {
      state.products = payload;
    },
    addProductToCart(state, payload) {
      console.log(payload);
      let check = true;

      state.cart.forEach((element: any) => {
        if (element.id === payload.id) {
          element.value = payload.value;
          check = false;
        }
      });
      if (check) {
        state.cart.push(payload);
      }
    },
    increaseDecreaseCartCount(state, payload) {
      state.cart.forEach((element) => {
        if (element.id === payload.id && payload.type === 'increase') {
          console.log('increase', state.cart);
          element.value++;
        }
        if (
          element.id === payload.id &&
          payload.type === 'decrease' &&
          element.value > 0
        ) {
          console.log('decrease', state.cart);
          element.value--;
        }
      });
    },
    removeProductToCart(state, id) {
      if (!id) {
        return;
      }
      state.cart = [...state.cart.filter((v) => v.id !== id)];
    },
  },
  actions: {
    addProductToCartAction({ commit }, payload) {
      commit('addProductToCart', payload);
    },
    removeProductToCart({ commit }, id) {
      commit('removeProductToCart', id);
    },
    increaseDecreaseCartAction({ commit }, payload) {
      commit('increaseDecreaseCartCount', payload);
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
