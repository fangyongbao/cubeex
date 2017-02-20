<template>
	<div class="cubee-marquee">
		<ul class="roll-wrap f-cb" :style="{'transform' : 'translate3d('+translateX+'px,' + translateY + 'px, 0)','-webkit-transform' : 'translate3d('+translateX+'px,' + translateY + 'px, 0)'}" :class="{ 'isTransition' :  isTransition}">
			<li class="f-toe roll-item" :class="{ 'f-fl' : direction == 'horizontal' }" v-for="item in baseList">{{item}}</li>
		</ul>
	</div>
	
</template>

<script>
	export default {
		props: {
			rollList: {
				type: Array,
				required: true,
			},
			rollTime: {
				type: Number,
				default: 2000
			},
			speed: {
				type: Number,
				default: 30
			},
			direction: {
				type: String,
				default: "horizontal"
			},
			type: {
				type: String,
				default: "announcement"
			}
		},
		data() {
			return {
				baseList: [],
				itemWidth: 0,
				itemHeight: 0,
				translateX: 0,
				translateY: 0,
				showIndex: 1,
				isTransition: false,
				autoPlayTimer: null,
				rollWidth: 0
			}
		},
		methods: {
			autoPlay() {
                clearInterval(this.autoPlayTimer);
                let _this = this;
                if(_this.type == "announcement") {
                	this.autoPlayTimer = setInterval(function() {
                		_this.isTransition = true;
	                    _this.showIndex++;
	                    if(_this.direction == "horizontal") {
	                    	_this.translateX = -_this.showIndex * _this.itemWidth;
	                    } else {
	                    	_this.translateY = -_this.showIndex * _this.itemHeight;
	                    }
	                    
	                    setTimeout(function() {
	                        _this.isTransition = false;
	                        if (_this.showIndex == _this.baseList.length - 1) {
	                            _this.showIndex = 1;
	                            if(_this.direction == "horizontal") {
			                    	_this.translateX = -_this.showIndex * _this.itemWidth;
			                    } else {
			                    	_this.translateY = -_this.showIndex * _this.itemHeight;
			                    }
	                        }
	                    }, 500)
    				},this.rollTime)
    			} else {
    				this.autoPlayTimer = setInterval(function() {
    					_this.translateX--;
    					if(-_this.translateX >= _this.rollWidth) {
    						_this.translateX = _this.itemWidth;
    					}
    				},this.speed)
    			}
    		}
		},
		mounted: function () {
			this.baseList = this.rollList;
			if(this.type == "announcement") {
				this.baseList.unshift(this.baseList[this.baseList.length-1]); // 将最后一张图片复制一份放在数组的最前面
    			this.baseList.push(this.baseList[1]); // 将第一张图复制一份放在数组的最后面
			} else {
				this.baseList.push(this.baseList[0]); // 将第一张图复制一份放在数组的最后面
			}
    		
			this.$nextTick(function () {
				// 代码保证 this.$el 在 document 中
				this.roll = this.$el;
				let rollItems = this.roll.querySelectorAll(".roll-item");
	    		let rollWrap = this.roll.querySelector(".roll-wrap");
	    		this.itemWidth = this.roll.clientWidth;
	    		this.itemHeight = this.roll.clientHeight;
	    		
				if(this.type == "announcement") {
					// 公告
	    			if(this.direction == "horizontal") {
	    				this.translateX = -this.itemWidth;
	    				rollWrap.style.width = this.itemWidth*this.baseList.length + 'px';
	    				for(let i = 0, len = rollItems.length; i < len; i++) {
		    				rollItems[i].style.width = this.itemWidth + 'px';
		    			}
	    			} else {
	    				this.translateY = -this.itemHeight;

	    				rollWrap.style.width = "100%";
	    				rollWrap.style.height = this.itemHeight*this.baseList.length + 'px';

	    			}
				} else {
					// 跑马灯
					let rollWrapWidth = 0;
					for(let i = 0, len = rollItems.length; i < len; i++) {
	    				// rollItems[i].style.width = this.itemWidth + 'px';
	    				rollItems[i].style.minWidth = this.itemWidth + 'px';
	    				rollWrapWidth += rollItems[i].clientWidth;
	    			}
					rollWrap.style.width = rollWrapWidth + "px";
					this.rollWidth = rollWrapWidth - rollItems[0].clientWidth;
					// this.translateX = this.itemWidth;
				}
    			
    			
    			this.autoPlay();
			})
		}
	}
</script>

<style lang="sass">
	.cubee-marquee {
		width: 100%;
		overflow: hidden;
		height: 100%;
		font-size: 12px;
		line-height: 0.6rem;
		color: #596380;
		.roll-wrap {
			width: 9999999px;
			.roll-item {
				// min-width: 100%;
			}
		}
	}
	.isTransition {
	    transition: transform 0.5s;
	    -webkit-transition: transform 0.5s;
	}
</style>