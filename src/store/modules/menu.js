export default {
	namespaced: true,
	state: {
		items: [
			{
				url: '/registration',
				text: 'Registration'
			},
			{
				url: '/products',
				text: 'Products List'
			},
			/* {
				url: '/cart',
				text: 'Your Cart'
			} */
		]
	},
	getters: {
		items(state){
			return state.items;
		}
	}
};