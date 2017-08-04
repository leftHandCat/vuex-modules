API:

 1. state: 存储状态和数据的**变量**
 2. gatter: **依赖** state 的数据做处理后的返回**变量**，不直接修改 state
 3. mutation: **事件**，唯一可以修改 state 的地方，同步
 4. action: 事件,类似 mutation, 不能直接修改 state 可异步， commit 提交 mutation 再修改 state, 也可单独使用。dispatch 提交 action
 5. modules: 分多个子模块，集中到一个大对象中, 例如：
```
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
```

###一、在 vue 中如何使用 state, gatter, mutation, action, modules

这里只介绍 mapState,mapGetters,mapMutations,mapAction: 可以 对象 或 数组(与组件中使用名称相同) 的格式

 1-1： state, gatter 在计算属性中返回
	 不同点： state 需要指定子模块名称
	 

```
computed: {
   	    ...mapState({
   	  		'productList': (state) => state.goods.productList 
   	    }),
   	    ...mapGetters([
			'totalQty'
	    ])
	 }
```
  1-2： mutation, action 在事件中返回
```
methods: {
		...mapActions([
				'qty_cut',
				'qty_add',
				'del_car_item'
			]),
		...mapMutations({
			buyToCart: 'buyToCart'
		}) 
	}
```
1-3： modules: 组件中只有在 state 中需要指定子模块。vuex 中在一个子模块中使用另一个子模块的状态, 需要通过参数 rootState, 从根级查找。
[参考 Api 文档： https://vuex.vuejs.org/zh-cn/api.html](%E5%8F%82%E8%80%83%20Api%20%E6%96%87%E6%A1%A3%EF%BC%9A%20https://vuex.vuejs.org/zh-cn/api.html)
 **但是, vuex 中只有 gatter 和 action 才有这个参数属性**
>注：action 的 context 包含很多属性 commit, dispatch, getters, state, rootState, gatter, rootGatter
	结论：可以在子模块中任意使用其他子模块的一切状态和方法。(比较强大)
	


   

