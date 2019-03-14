
export default {
	namespaced: true,
	strict: true,
	state: {
		productsCart: [],
	},
	getters: {
		productsCart(state){
			return state.productsCart;
		},
		cnt(state){
			return state.productsCart.length;
		},
	},
	mutations: {
		toCart(state, product) {
			const record = state.productsCart.find(i => i.id === product.id)
	
			if (!record) {
				state.productsCart.push({
					qty: 1,
					...product
				})
			} else {
				record.qty++
			}
		},
		removeQty(state, product) {
			const record = state.productsCart.find(i => i.id === product.id)
	
			if (record.qty > 1) {
				record.qty--
			} 
		},
		removeProduct(state, product){
			const index = state.productsCart.findIndex(i => i.id === product.id)
				state.productsCart.splice(index, 1)
		},
	},
	actions: {
		toCart(store, product){
			store.commit('toCart', product);
		},
		removeQty(store, index){
			store.commit('removeQty', index);
		},
		removeProduct(store, index){
			store.commit('removeProduct', index);
		}
	}
}