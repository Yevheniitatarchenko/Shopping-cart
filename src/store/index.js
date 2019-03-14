import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

Vue.use(Vuex);

import menu from './modules/menu';
import products from './modules/products';
import cart from './modules/cart';

export const store = new Vuex.Store({
	modules: {
		menu,
		products,
		cart
	},
	strict: process.env.NODE_ENV !== 'production',
	plugins: [createPersistedState()],
});