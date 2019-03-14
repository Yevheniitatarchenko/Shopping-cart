<template>
	<div>
				<div 
					v-for="(product, index) in products" 
					class="col-sm-4 col-lg-4 col-md-4"
				>
					<div class="thumbnail">
						<img :src="product.image" alt="" class="grow thumbnail-image">
						<div class="caption margin-left-sm">
      				<h4 class="pull-right">${{ product.price }}</h4>
      				<a>{{ product.title }}</a>
      				<p class="truncate">{{ product.description | shortDescription}}</p>
    				</div>
					
						<div class="ratings margin-left-sm">
							<div class="pull-right">
								<button 
									@click="addProduct(product)"
									class="btn btn-success" 
								>
									Add to cart
								</button>
							</div>
							<div class="clearfix"></div>
						</div>
					</div>
				</div>
		
	</div>
</template>

<script>
	import {mapGetters} from 'vuex';
	import {mapActions} from 'vuex';
	
	export default {
		computed: {
			...mapGetters('products', {
				products: 'products'
			}),
		},
		methods: {
			...mapActions('cart', {
				addProduct: 'toCart'
			})
		},
		filters: {
    shortDescription(value) {
      if (value && value.length > 100) {
        return value.substring(0, 100) + '...';
      } else {
        return value;
      }
    }
  }
	}
</script>

<style scoped lange="sass">

.thumbnail {
  height: 100%;
}

.favourite-icon {
  font-size: 25px;
}

.ratings {
  padding-right: 10px;
  padding-left: 10px;
  color: #d17581;
}

.grow {
  transition: all .2s ease-in-out;
}

.thumbnail:hover .grow {
  transform: scale(1.1);
}

.item.list-group-item {
  border: none;
  float: none;
  width: 100%;
  background-color: #fff;
  margin-bottom: 10px;
}

.thumbnail-image {
  padding: 15px;
}

.list-group-item .thumbnail-image {
  margin-right: 10px;
  max-height: 150px;
}

.item.list-group-item .thumbnail {
  margin-bottom: 0px;

}

.item.list-group-item img {
  float: left;
}

.item.list-group-item:after {
  clear: both;
}
</style>