<template>
	<div class="shop">
		<h2>购物车详单</h2>
		
		<table>
			<thead>
				<tr>
					<th>序号</th>
					<th>商品</th>
					<th>单价</th>
					<th>数量</th>
					<th>移除</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(item,index) in added">
					<td>{{index+1}}</td>
					<td>{{item.name}}</td>
					<td>{{item.price}}</td>
					<td>
						
						<button type="button" class="cut" @click="qty_cut({item})" v-if="item.cutdisabled === false">-</button>
						<button type="button" class="cut disabled" v-else-if="item.cutdisabled === true" disabled="disabled">-</button>
							{{item.qty}}
						<button type="button" class="add" @click="qty_add({item})" v-if="item.adddisabled === false">+</button>
						<button type="button" class="add disabled" v-else-if="item.adddisabled === true" disabled="disabled">+</button>
					</td>
					<td class="cancel" @click="del_car_item({item})">Del</td>
				</tr>
			</tbody>
		</table>

		<h2>合计： ￥{{cart_total_amount}} <button type="button" class="zfbPay">结算</button></h2>

	</div>
</template>

<script>
	import {mapState, mapGetters, mapMutations, mapActions} from 'vuex';

	export default{
		name: 'shoppingcar',
		computed:{
			...mapState({
				'added': state => state.goods.added
			}),
			...mapGetters([
				'cart_total_amount'
			])
		},
		created(){
			console.log(this.added)
		},
		methods:{
			...mapActions([
				'qty_cut',
				'qty_add',
				'del_car_item'
			])
		}
	}
</script>

<style>
	*{
		text-align: left;
	}
	h3{
		text-align: center;
	}
	.cut{
		margin-right:10px;
	}
	.add{
		margin-left:10px;
	}
	.disabled{
		cursor: not-allowed;
	}
	.cancel{
		color: blue;
		cursor: pointer;
	}
	.zfbPay{
		margin-right: 300px;
    	float: right;
	}
</style>