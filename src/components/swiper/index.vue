<template>
	<div class="m-swiper f-pr">
		<ul class="swiper-wrap f-cb" @touchstart="touchstart($event)" @touchmove="touchmove($event)" @touchend="touchend($event)" :style="{'transform' : 'translate3d('+translateX+'px,' + translateY + 'px, 0)','-webkit-transform' : 'translate3d('+translateX+'px,' + translateY + 'px, 0)'}" :class="{ 'isTransition' :  isTransition}">
			<li class="swiper-item f-fl" v-for="item in baseList">
				<img :src="item.img" alt="">
			</li>
		</ul>
		<ul class="indicator-wrap f-pa" v-show="isIndicator" v-if="baseList.length-2 > 0">
			<li class="indicator-item f-fl" v-for="(item,index) in baseList.length-2" :class="{ 'indicator-item-active' : index == indicatorIndex }"></li>
		</ul>
	</div>
</template>

<script>
/**
 * swiper
 * @module components/swiper
 * @desc 无间断轮播图组件
 * @param Array list - list对象包含img
 * @param bol isIndicator - 是否要指示器
 * @param bol isAutoPlay - 是否需要自动轮播
 * @example
 * <cubee-swiper ref="swiper1" :list="baseList" :is-indicator="false" :is-auto-play="true"></cubee-swiper>
 */
	import $ from 'jquery';
	
	export default {
		props: {
			list: {
				type: Array,
				default () {
					return []
				}
		    },
		    isIndicator: {
		    	type: Boolean,
				default () {
					return true
				}
		    },
		    isAutoPlay: {
		    	type: Boolean,
				default () {
					return false
				}
		    }
		},
		data() {
			return {
				swiper: null,
				touch: {
					x: 0,
					y: 0
				},
				baseList: [],
				itemWidth: 0,
				translateX: 0,
				translateY: 0,
				direction: 'horizontal',
				showIndex: 1,
				indicatorIndex: 0,
				isTransition: false,
				autoPlayTimer: null,
			}
		},
		methods: {
			init() {
				let _this = this;
				let swiperWrap = _this.swiper.querySelector(".swiper-wrap");
				$(_this.swiper).ready(function(){
					$(swiperWrap).width(_this.itemWidth*_this.baseList.length);
				})
				if(this.isAutoPlay) {
					this.autoPlay();
				}
			},
			touchstart(e) {
				this.touch.x = e.touches[0].clientX;
				this.touch.y = e.touches[0].clientY;
				if(this.isAutoPlay) {
					clearInterval(this.autoPlayTimer);
				}
			},
			touchmove(e) {
				this.isTransition = false;
				if(this.direction == "horizontal") {
					let moveX = e.touches[0].clientX - this.touch.x;
					this.translateX += moveX;
					this.touch.x = e.touches[0].clientX;
				}
				// this.touch.y = e.touches[0].clientY;
			},
			touchend(e) {
				this.isTransition = true;
				if(this.translateX > (-this.showIndex * this.itemWidth + this.itemWidth/2)) {
					// 右滑动超过半张图
					this.showIndex--;
					this.translateX = -this.showIndex * this.itemWidth;
				} else if(this.translateX < (-this.showIndex * this.itemWidth - this.itemWidth/2)) {
					// 左滑动超过半张图
					this.showIndex++;
					this.translateX = -this.showIndex * this.itemWidth;
				} else {
					this.translateX = -this.showIndex * this.itemWidth;
				}

				this.indicator();

				setTimeout(() => {
					this.isTransition = false;
					if(this.showIndex == 0) {
						this.showIndex = this.baseList.length - 2;
						this.translateX = -this.showIndex * this.itemWidth;
					} else if(this.showIndex == this.baseList.length - 1) {
						this.showIndex = 1;
						this.translateX = -this.showIndex * this.itemWidth;
					}
				},500)

				if(this.isAutoPlay) {
					setTimeout(() => {
						this.autoPlay();
					},1000)
				}
			},
			autoPlay() {
				clearInterval(this.autoPlayTimer);
				let _this = this;
				
				this.autoPlayTimer = setInterval(function() {
					_this.isTransition = true;
					_this.showIndex++;
					_this.translateX = -_this.showIndex * _this.itemWidth;

					_this.indicator();

					setTimeout(function(){
						_this.isTransition = false;
						if(_this.showIndex == _this.baseList.length - 1) {
							_this.showIndex = 1;
							_this.translateX = -_this.showIndex * _this.itemWidth;
						}
					},500)
					
				},2000)
			},
			indicator() {
				// 图片下标标识
				if(this.showIndex == 0) {
					this.indicatorIndex = this.baseList.length - 3;
				} else if (this.showIndex == this.baseList.length - 1) {
					this.indicatorIndex = 0;
				} else {
					this.indicatorIndex = this.showIndex - 1;
				}
			}
    	},
    	mounted() {
    		this.baseList = this.list;
    		this.baseList.unshift(this.baseList[this.baseList.length-1]); // 将最后一张图片复制一份放在数组的最前面
    		this.baseList.push(this.baseList[1]); // 将第一张图复制一份放在数组的最后面
    		
    		this.$nextTick(function() {
    			this.swiper = this.$el;
    			let swiperItem = this.swiper.querySelectorAll(".swiper-item");
    			this.itemWidth = $(this.swiper).width();
    			this.translateX = -this.itemWidth;
				$(swiperItem).width(this.itemWidth);
    		})
    	}
	}
</script>

<style lang="sass" scoped>
	.m-swiper {
		width: 100%;
		overflow: hidden;
		.swiper-wrap {
			width: 9999999px;
			.swiper-item {
				img {
					width: 100%;
					float: left;
				}
			}
		}
		.indicator-wrap {
			bottom: 10px;
			left: 50%;
			transform: translateX(-50%);
			-webkit-transform: translateX(-50%);
			.indicator-item {
				width: 6px;
				height: 6px;
				border-radius: 3px;
				background-color: #FFF;
				margin: 0 4px;
			}
			.indicator-item-active {
				background-color: blue;
			}
		}
	}
	.isTransition {
		transition: transform 0.5s;
		--webkit-transition: transform 0.5s;
	}
</style>