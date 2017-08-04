import shoppingcar from './cart/shoppingcar.js';
import goods from './cart/goods.js';

import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state = {
	noteWorld:''
};

const getters = {
	appState(state){
		return state.noteWorld = '0.0 0.0 0.0';
	}
};

const mutations = {};
const actions = {};


export default new Vuex.Store({
	state,
	getters,
	mutations,
	actions,
	modules:{
		goods,
		shoppingcar
	}
})