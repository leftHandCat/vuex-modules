// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import Vuex from 'vuex';
import store from './store/index.js';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  template: '<App/>',
  components: { App }
})

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
