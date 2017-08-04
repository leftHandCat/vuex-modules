<template>
	<div class="phone">

		<h2>总库存量: {{totalQty}}</h2>

		<table>
			<thead>
				<tr>
					<th>商品</th>
					<th>单价</th>
					<th>库存</th>
					<th>是否订购</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(item,index) in productList">
					<td>{{item.name}}</td>
					<td>{{item.price}}</td>
					<td>{{item.qty}}</td>
					<td>
						<button @click="buyToCart(item)" v-if="item.disabled===false">Buy</button>
						<button v-else-if="item.disabled===true" disabled="disabled">Buy</button>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
	import Vue from 'vue';
	import {mapState,mapGetters,mapMutations,mapActions} from 'vuex';

	var outModule = null;

	export default{
		name: 'phone',
		beforeCreate(){
			//outModule = this.$store._modules.root._rawModule.modules;
		},
		computed: {
			...mapState({
				productList: state => state.goods.productList,
			}),
			...mapGetters([
				'totalQty'
			])
		},
		methods: {
			...mapMutations({
				buyToCart: 'buyToCart'
			}) 
		},
		created(){
			
		}
	}

</script>

<style>
	.phone,.shop{
		width: 100%;
		height:300px;
	}
	th,td{
		border-left: 1px solid black;
	    height: 40px;
	    width: 100px;
	    text-align: center;
	}
	tr{
		border-top: 1px solid black;
		    height: 40px;
	}
</style>