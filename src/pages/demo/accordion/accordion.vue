<!-- 模板展示 -->
<template>
	<div>
		<div class="accordion">
	      <slot />
	    </div>
	</div>
</template>

<!-- 逻辑处理 -->
<script>
// 组件 import BScroll from 'better-scroll'
// api import { orderList } from 'api/event'
export default {
	name:'',
	data () {
		return{
			Accordion: {
		        count: 0,
		        active: false
		    }
		}
	},

	provide() {
    return { Accordion: this.Accordion }
  	},
	// 组件
	components:{

	},

	// 组件传值
	props:[],

	// 事件方法
	methods: {

	},

	// 计算属性
	computed: {

	},

	// 侦听属性
	watch:{

	},

	
	mounted(){

	},

	// 接口数据
	created(){

	},
}
</script>


<!-- 样式处理 -->
<style scoped lang='scss'>
	
</style>