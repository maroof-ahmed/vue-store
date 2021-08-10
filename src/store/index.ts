import Vue from 'vue';
import Vuex from 'vuex';
import { getAllProducts } from '@/api/getAllProducts';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cart: [] as any[],
    products: [],
    visible: false,
    confirmLoading: false,
  },
  mutations: {
    sortAssending(state) {
      console.log('bbbbbbbbbbb');
      state.products = [
        ...state.products.sort(function (a: any, b: any) {
          return a.price - b.price;
        }),
      ];
    },
    sortDesending(state) {
      console.log('aaaaaaaaaaa');
      state.products = [
        ...state.products.sort(function (a: any, b: any) {
          return b.price - a.price;
        }),
      ];
    },
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
      const updatedCart = state.cart.map((element) => {
        if (element.id !== payload.id) return element;

        if (payload.type === 'increase') {
          element.value++;
        }

        if (payload.type === 'decrease' && element.value) {
          element.value--;
        }

        return element;
      });

      state.cart = [...updatedCart];
    },
    removeProductToCart(state, id) {
      if (!id) {
        return;
      }
      state.confirmLoading = true;
      setTimeout(() => {
        state.cart = [...state.cart.filter((v) => v.id !== id)];
        state.confirmLoading = false;
        state.visible = false;
      }, 2000);
    },
    handleCancel(state) {
      state.visible = false;
    },
    handleShowModal(state) {
      state.visible = true;
    },
  },
  actions: {
    addProductToCartAction({ commit }, payload) {
      commit('addProductToCart', payload);
    },
    removeProductToCartAction({ commit }, id) {
      commit('removeProductToCart', id);
    },
    increaseDecreaseCartAction({ commit }, payload) {
      commit('increaseDecreaseCartCount', payload);
    },
    handleCancelAction({ commit }) {
      commit('handleCancel');
    },
    handleShowModalAction({ commit }) {
      commit('handleShowModal');
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
