import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
	count: 20,
	obj: {
		name: 'appleStore'
	}
}

//派生状态，根据 state
const getters = {
	analysisNum(state){
		return state.count%2 == 0 ? 'even' : 'odd';
	}
}

//注册事件, 整合所有的事件， mutation 同步
const mutations = {
	ADD_INCREMENT(state,n){
		state.count += n;
		state.obj = {...state.obj, age: 8};
		console.log('added')
	}
}

//提交 mutation， 可包含任意异步操作
const actions = {
	addIncrement(context){
		context.commit('ADD_INCREMENT',17);
	}
}


export default new Vuex.Store({
	state,
	getters,
	mutations,
	actions
})
