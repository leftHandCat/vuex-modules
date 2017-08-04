import * as types from '../moduleTypes.js';

//购物车
const state = {

};

const getters = {
	cart_total_amount(state, getters, rootState){
		console.log(getters)
		let addList = [];
		addList = rootState.goods.added;
		return addList.reduce((init,item)=>{
			return (+init+item.qty*item.price).toFixed(2);
		},0);
	}
};0

const mutations = {
	//常量管理, 修改 state
	[types.QTY_CUT](state,{rootState,item}){

		var matchItem = rootState.goods.productList.filter((v,i) => {
			return v.name.indexOf(item.name) !== -1
		})

		if(item.qty !== 0){
			item.qty--;
			matchItem[0].qty++;
			item.cutdisabled = false;

			item.qty === 0 ?  item.cutdisabled = true : '';

		}else{
			//禁用状态
			item.cutdisabled = true;
		}

	},
	[types.QTY_ADD](state,{rootState,item}){

		var matchItem = rootState.goods.productList.filter((v,i) => {
			return v.name.indexOf(item.name) !== -1
		})

		if(matchItem[0].qty !== 0){
			item.qty++;
			matchItem[0].qty--;
			item.adddisabled = false;

			matchItem[0].qty === 0 ? item.adddisabled = true : '';

		}else{
			//禁用状态
			item.adddisabled = true;
		}
	},
	[types.DEL_CAR_ITEM](state,{rootState,item}){
		let added = rootState.goods.added;
		let productList = rootState.goods.productList;

		added.forEach((v,i) => {
			if(v.name == item.name){
				added.splice(i,1)
			}
		})

		let matchItem = productList.filter((v,i) => {
			return v.name.indexOf(item.name) !== -1;
		})

		matchItem[0].qty += item.qty;
		matchItem[0].disabled = false;

	}

};

const actions = {
	qty_cut(context,{item}){

		setTimeout(function(){
			let rootState = context.rootState;
			context.commit(types.QTY_CUT,{rootState,item})
		},100)


	},
	qty_add(context,{item}){  //context, 或者对象格式单个传入 {rootstate,commit, dispatch}
	
		context.dispatch('testAction')

		setTimeout(function(){
			let rootState = context.rootState;
			context.commit(types.QTY_ADD,{rootState,item})
		},100)

	},
	del_car_item({rootState,commit},{item}){


		commit(types.DEL_CAR_ITEM,{rootState,item})
	}
};


export default{
	state,
	getters,
	mutations,
	actions
}

