<template>
	<div class="cartShop">
		<p>
			<h3>Welcome to phoneShop</h3>
		</p>

		<div class="goodsCar">
			<goods></goods>
			<shoppingcar></shoppingcar>
		</div>
		
		<myorder></myorder>
		
	</div>
</template>

<script>
	import goods from './goods.vue';
	import shoppingcar from './shoppingcar.vue';
	import myorder from './myorder.vue';

	export default{
		name: 'phoneShop',
		components: {
			goods,
			shoppingcar,
			myorder
		}
	}

</script>

<style>
	.cartShop{
		 padding-left: 20px;
	}
	.goodsCar{
		width: 50%;
	    height: auto;
	    display: inline-block;
	    float: left;
	}
	.myorder{
		width: 49%;
	}
	.goodsCar,.myorder{
		float: left;
	}
</style>