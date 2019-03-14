
export default {
	namespaced: true,
	state: {
		products: [
      {
        id: 1,
        title: 'macbook Retina 13.3 ME662 (2013)',
        description: '3.0GHz Dual-core Haswell Intel Core i5 Turbo Boost up to 3.2 GHz, 3MB L3 cache 8GB (two 4GB SO-DIMMs) of 1600MHz DDR3 SDRAM', 
        price: 2399, 
        image: 'https://www.dropbox.com/s/swg9bdr0ejcbtrl/img9.jpg?raw=1'
      },  
      {
        id: 2,
        title: 'Macbook Pro 13.3 Retina MF841LL/A',
        description: 'Macbook Pro 13.3 Retina MF841LL/A Model 2015 Option Ram Care 12/2016',
        price: 1199,
        image: 'https://www.dropbox.com/s/6tqcep7rk29l59e/img2.jpeg?raw=1'
      },  
      {
        id: 3,
        title: 'Macbook Pro 15.4 Retina MC975LL/A Model 2012',
        description: '3.0GHz Dual-core Haswell Intel Core i5 Turbo Boost up to 3.2 GHz, 3MB L3 cache 8GB (two 4GB SO-DIMMs) of 1600MHz DDR3 SDRAM',
        price: 1800,
        image: 'https://www.dropbox.com/s/78fot6w894stu3n/img3.jpg?raw=1'
      },  
      {
        id: 4,
        title: 'Retina MacBook Pro 13 inch MF841',
        description: '2.9 Ghz Dual-Core Intel Core i5 Broadwell Tubro boost up to 3.3 GHz with L3 3MB cache',
        price: 1099, 
        image: 'https://www.dropbox.com/s/kbuanen8970nin0/img4.jpg?raw=1'
      },
      {
        id: 5,
        title: 'macbook Retina 13.3 ME662 (2013)',
        description: '3.0GHz Dual-core Haswell Intel Core i5 Turbo Boost up to 3.2 GHz, 3MB L3 cache 8GB (two 4GB SO-DIMMs) of 1600MHz DDR3 SDRAM', 
        price: 2399, 
        image: 'https://www.dropbox.com/s/swg9bdr0ejcbtrl/img9.jpg?raw=1',
      },
      {
        id: 6,
        title: 'Macbook Pro 15.4 Retina MC975LL/A Model 2012',
        description: '3.0GHz Dual-core Haswell Intel Core i5 Turbo Boost up to 3.2 GHz, 3MB L3 cache 8GB (two 4GB SO-DIMMs) of 1600MHz DDR3 SDRAM',
        price: 1800,
        image: 'https://www.dropbox.com/s/78fot6w894stu3n/img3.jpg?raw=1'
      }, 
    ],
	},
	getters: {
		products(state) {
			return state.products;
		},
	}
};


