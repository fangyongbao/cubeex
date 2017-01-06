<template>
    <div class="m-pull-refresh view">
        <div :id="wrapperId" class="wrapper">
            <div id="scroller" @touchend="touchEnd">
                <div class="cubee-pull-down" :class="{ 'cubee-pull-down-active' : is_pull_down_load , 'cubee-pull-down-leave' : !is_pull_down_load }" ref="pullDownEl" v-if="usePullDown">
                    <span class="pullDownIcon" :style="{ transform : 'rotateZ('+ scrollY +'deg)' }" :class="{ 'loading' :  is_pull_down_load}"></span>
                </div>
                <div id="container">
                    <slot></slot>
                </div>
                <div id='pullUp' ref="pullUpEl" v-if="usePullUp">
                    <span :class="pullUpIconClass" v-if="usePullUpIcon"></span>
                    <span class="pullUpLabel" v-if="usePullLabel">上拉加载更多</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import iScroll from 'iscroll/build/iscroll-probe';
export default {
    name: 'pull-refresh',
    data() {
        return {
            wrapperId: 'wrapper',
            iscroll: '',
            is_pull_down: false,
            is_pull_down_load: false,
            scrollY: 0,
            isLoadMore: false,
        }
    },
    props: {
        usePullDown: {
            type: Boolean,
            default: false
        },
        usePullUp: {
            type: Boolean,
            default: false
        }

    },
    methods: {
        // 初始化iscroll
        _init() {
            this.iscroll = new iScroll( "#"+this.wrapperId, {
                probeType: 2,
                scrollbars: true,
                mouseWheel: true,
                shrinkScrollbars:'scale',
                // fadeScrollbars: true,
            });
            this.iscroll.on('scroll', this._onTouchMove );
            this.iscroll.on('scrollEnd', this._onTouchEnd );
        },
        _onTouchMove () {
            // console.log(this.iscroll.y,this.iscroll.maxScrollY,this.pullDownHeight);
            // if (this.iscroll.y > 0) {
            //     this.iscroll.minScrollY = 0;
            //     this.isLoading = true;
            // } else if (this.iscroll.y <= -this.pullDownHeight) {
            //     this.isLoadMore = true;
            //     this.isLoading = false;
            //     this.iscroll.minScrollY = -this.pullDownHeight;
            // } else {
            //     this.isLoadMore = false;
            //     this.isLoading = false;
            //     this.iscroll.minScrollY = -this.pullDownHeight;
            // }
            this.scrollY = this.iscroll.y * 5;
            if(this.iscroll.y  >= this.pullDownHeight) {
                console.log(222);
                // this.iscroll.y = 0;
                this.is_pull_down = true;
            }
        },
        _onTouchEnd () {
            // this.iscroll.y = 50;
            console.log(111);
            if(this.is_pull_down_load) {
                setTimeout( () => {
                    this.is_pull_down = false;
                    this.is_pull_down_load = false;
                },2000)
            }
        },
        touchEnd () {
            if(this.is_pull_down) {
                this.is_pull_down_load = true;
            }
        },
        refresh() {
            this.is_pull_down = false;
            this.iscroll.refresh();
        }
    },
    mounted() {
        this.wrapperId = 'wrapper' + new Date().getTime();
        this.$nextTick(() => {
            let wrapper = document.getElementById(this.wrapperId);
            let scroller = document.getElementById("scroller");
            if (this.usePullDown) {
                this.pullDownHeight = document.querySelector(".cubee-pull-down").offsetHeight || 70;
            }
            scroller.style.minHeight = (wrapper.clientHeight + 1) + "px";
            this._init();
        })
    },
    watch: {

    }
}
</script>
<style lang="sass" scoped>
.m-pull-refresh {
    .wrapper {
        width: 100%;
        height: 100%;
        overflow: hidden;
        
        position: absolute;
        z-index: 1;
        left: 0;
        top: 0;
        .scroller {
            min-height: 100%;
            position: absolute;
            z-index: 1;
            -webkit-tap-highlight-color: rgba(0,0,0,0);
            width: 100%;
            -webkit-transform: translateZ(0);
            -moz-transform: translateZ(0);
            -ms-transform: translateZ(0);
            -o-transform: translateZ(0);
            transform: translateZ(0);
            -webkit-touch-callout: none;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
            -webkit-text-size-adjust: none;
            -moz-text-size-adjust: none;
            -ms-text-size-adjust: none;
            -o-text-size-adjust: none;
            text-size-adjust: none;
        }
    }
    // #pullDown {
    //     height: 50px;
    //     font: 14px/50px Arial;
    //     color: #999;
    //     vertical-align: middle;
    //     text-align: center;
    // }
    // #pullDown .pullDownIcon,
    // #pullUp .pullUpIcon {
    //     display: inline-block;
    //     width: 30px;
    //     height: 30px;
    //     vertical-align: middle;
    //     background: url(icon.png) no-repeat center;
    //     background-size: 100% auto;
    // }
    // #pullDown .pullDownIcon.loading,
    // #pullUp .pullUpIcon.loading {
    //     -webkit-animation: loading 0.5s infinite linear;
    //     animation: loading 0.5s infinite linear;
    // }
    .cubee-pull-down {
        height: 70px;
        margin-top: -70px;
        width: 100%;
        color: #999;
        text-align: center;
        .pullDownIcon {
            display: inline-block;
            width: 30px;
            height: 30px;
            vertical-align: middle;
            background: url(icon.png) no-repeat center;
            background-size: 100% auto;
            transition: all 0.2s;
        }
    }
    .cubee-pull-down-active {
        margin: 0;
        transition: margin 0.5s;
    }
    .cubee-pull-down-leave {
        margin-top: -70px;
        transition: margin 0.5s;
    }
    .loading {
        -webkit-animation: loading 0.5s infinite linear;
        animation: loading 0.5s infinite linear;
    }
}

@-webkit-keyframes loading {
    from {
        -webkit-transform: rotate(0deg) translateZ(0);
    }
    to {
        -webkit-transform: rotate(360deg) translateZ(0);
    }
}

@keyframes loading {
    from {
        transform: rotate(0deg) translateZ(0);
    }
    to {
        transform: rotate(360deg) translateZ(0);
    }
}
</style>
