<template>
	<transition name="fade">
		<div class="loadingWrap" v-show="loadInfo.isShow">
			<div class="loading">
				<div class="icon"></div>
				<p v-show="loadInfo.msg != ''">{{loadInfo.msg}}</p>
			</div>
		</div>
	</transition>
</template>

<script>
	import { mapActions, mapState } from 'vuex'
	export default {
		computed: mapState({
	        // 想通过 `this` 访问本地状态，就得用一个普通的方法
	        loadInfo: state => state.alert.loadInfo,
	    }),
		methods: {
			...mapActions([
		      	'setLoadStatus' // 映射 this.increment() 为 this.$store.dispatch('increment')
		    ])
		},
		mounted: function () {
			this.$nextTick(function () {
				// 代码保证 this.$el 在 document 中
				console.log(this.loadInfo);
			})
		}
	}
</script>

<style lang="sass" scoped>
	.loadingWrap {
		position: absolute;
		width: 100%;
		height: 100%;
		z-index: 100;
	}
	.loading {
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%,-50%);
		-webkit-transform: translate(-50%,-50%);
		background: rgba(0,0,0,0.8);
		border-radius: 0.1rem;
		padding: 0.5rem;
		font-size: 13px;
		color: white;
		text-align: center;
		.icon {
			width: 0.6rem;
			height: 0.6rem;
			margin: 0 auto;
			background: url(icon.gif) center no-repeat;
			background-size: cover;
		}
		p {
			margin-top: 0.3rem;
		}
	}
</style>