import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Registration from './components/Registration.vue';
import ProductList from './components/ProductsList';
import Cart from './components/Cart';

import {store} from './store';

const routes = [
	{
		path: '',
		redirect: {name: 'registration'}
	},
	{
  	name: 'registration',
  	path: '/registration',
  	component: Registration
  },
	{
		path: '/products',
		component: ProductList
	},
	{
		path: '/cart',
		component: Cart
	}
];

export const router = new VueRouter({
	routes,
	mode: 'history'
});