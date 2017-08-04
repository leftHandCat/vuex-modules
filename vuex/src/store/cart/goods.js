import * as types from '../moduleTypes.js';

const state = {
	productList:[
		{"name":"apple", "qty": 5, "price": 152.2,"disabled":false},
		{"name":"vivo", "qty": 3, "price": 789,"disabled":false},
		{"name":"smartisan", "qty": 2,"price": 897,"disabled":false}
	],
	added:[]
};

const getters = {
	totalQty(state){

		let totalStore = state.productList.reduce((total,item) => {
			return total+=item.qty;
		},0)

		return totalStore;
	}
};

const mutations = {
	buyToCart(state,item){

		let itemCopy = DeepCopy(item);

		itemCopy['cutdisabled'] = false;
		itemCopy['adddisabled'] = false;

		let addList = state.added;

		item.qty--;

		item.disabled = item.qty === 0 ? true : false;
		
		if(addList.length !== 0){

			var sortArr = addList.filter((v,i) => {
				return v.name.indexOf(item.name) !== -1;
			})

			if(sortArr.length !== 0){
				sortArr[0]['qty']++;
			}else{
				itemCopy.qty = 1;
			 	addList.push(itemCopy);
			}

		}else{
			itemCopy.qty = 1;
			addList.push(itemCopy);
		}
		return addList;
	}
};


const actions = {
	//test samename of actions
	qty_add(context,{item}){  //context, 或者对象格式单个传入 {rootstate,commit, dispatch}
		//alert(111111);
		//结果： 都会执行
	},
	testAction(){
		console.log('dispatch success')
	}
};


function DeepCopy(obj){
	let type = typeof(obj);
	let newObj;

	if(type == 'object'){
		if(type instanceof Array){
			newObj = []; 
		}else{
			newObj = {}; 
		}
	}else{
		return newObj;
	}

	//obj 类型.
	for(var key in obj){
		
		if(typeof(obj[key]) !== 'object'){
			newObj[key] = obj[key];
		}else if(obj[key] instanceof Array){
			newObj[key] = [];  //置空
			for(var i in obj[key]){
				if(typeof(obj[key][i]) !== 'object'){
					newObj[key][i] = obj[key][i];
				}else{
					newObj[key][i] = DeepCopy(obj[key][i])	
				}
			}
		}else{
			newObj[key] = DeepCopy(obj[key])	
		}
	}

	return newObj;
}



export default{
	state,
	getters,
	mutations,
	actions
}

