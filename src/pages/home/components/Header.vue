<template>
	<div class="homeHeader">
		<div class="headerLeft" @click="headPopUp">{{ headinfo.left}}</div>
    <div class="headerCont"><input type="" name="" :placeholder="hahainfo" ></div>
		<div class="headerRight">{{ headinfo.right }}</div>
	</div>
</template>

<script>
export default {
	name: 'HomeHeader',
	data () {
		return {
		  ruguo:''
		}
	},
	props:{
		headinfo:{
			type:Object,
		},
    hahainfo:{
		  type:String
    }
	},
	wathc:{
	},
	methods:{
		headPopUp(){
      console.log(this.$store.getters.getTestInfo)
		}
	},
	computed:{
    // ...mapGetters([
    //   'getCC'
    // ])
//		headGetpopUpStatus(){
//			return this.$store.state.popUpstatus
//		}
	},
  created() {
	  // this.$store.dispatch('getCC')
  }
}
</script>
<!-- sass -->
<style scoped lang='scss'>
.homeHeader{
	display: flex;
	padding: 0 (10 * $unit);
	@include LineH(43);
	background: #ff544b;
	color: #fff;

	.headerLeft{
		font-size: 13 * $unit;
	}
	.headerRight{
		@extend .headerLeft;
	}
	.headerCont{
		flex: 1;
		margin: 0;
		padding: 0 10px;
		display: flex;
		align-items: center;

		input{
			border-radius: 2px;
			height: 30 * $unit;
			width: 100%;
			padding:0 4 * $unit;
			background: #fff;
			font-size: 12 * $unit;
		}
	}
}
</style>
