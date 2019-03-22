<template>
	<div>
		<div class="container">
			<div class="row">
				<div class="col-lg-12">
		
					<div 
						v-if="empty" 
						class="alert alert-warning"
					> 
						Your cart is empty.
					</div>
		
					<table v-else class="table">	
						<thead>
							<tr>
								<th>Product</th>
								<th>Price</th>
								<th>Quantity</th>
								<th></th>
							</tr>
						</thead>

						<tbody>
							<tr v-for="(product, index) in productsInCart">
								<td data-th="Product">
									<div class="row">
										<div class="col-sm-2 hidden-xs">
											<img :src="product.image" alt="..." class="img-responsive"/>
										</div>
										<div class="col-sm-9">
											<h4 class="nomargin">{{ product.title }}</h4>
											<p>{{ product.description }}</p>
										</div>
									</div>
								</td>
								<td data-th="Price">{{ product.price }}</td>
								<td data-th="Quantity">
									<div class="quantity">
										<button 
											@click="removeQty(product)" 
											type="button" 
											class="btn btn-warning"
										>
											-1
										</button>
										<span class="border">
											{{ product.qty }}
										</span>
										<button 
											@click="toCart(product)" 
											type="button" 
											class="btn btn-success"
										>
											+1
										</button>
									</div>
								</td>
								<td class="actions" data-th="">
									<button class="btn btn-danger btn-sm" @click="removeProduct(product)"><i class="far fa-trash-alt"></i></button>								
								</td>
							</tr>
							<h4>Total: $ {{ total }}</h4>
						</tbody>
					</table>

				</div>
			</div>
		</div>	
	</div>
</template>

<script>
	import { mapGetters, mapActions } from 'vuex';
	
	export default {
		computed: {
			...mapGetters('cart', {
				productsInCart: 'productsCart'
			}),
			total() {
				var total = 0;
				this.productsInCart.forEach(item => {
					total += (item.price * item.qty);
				});
				return total;
			},
			empty(){
				return this.productsInCart.length === 0;
			},
		},
		methods: {
			...mapActions('cart', {
				toCart: 'toCart',
				removeQty: 'removeQty',
				removeProduct: 'removeProduct'
			}),
			updateQty (e) {
				this.$store.commit('cart/updateQty', e.target.value)
			}
		}	
	}
</script>

<style scoped>
.quantity {
	display: flex;
}

.btn {
	padding: 4px 9px;
}

.border {
	font-size: 20px;
	width: 20px;
	text-align: center;
	padding-top: 2px;
}

</style>
