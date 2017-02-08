<template>
    <div class="m-pull-refresh">
        <div :id="scrollId" class="wrapper">
            <div class="xs-container">
                <div class="xs-content">
                    <slot></slot>

                    <!-- <div class="xs-plugin-pulldown-container xs-plugin-pulldown-down" v-if="isPullDown">
                        <span :class="{ rotate : isLoading }"></span>
                    </div> -->
                </div>
            </div>
        </div>
    </div>
</template>
<script>
/**
 * pullDown & pullUp
 * @module components/pull-refresh
 * @desc 下拉刷新和上拉加载组件
 * @param bol isPullDown - 是否使用下拉刷新 default: false
 * @param bol isPullUp - 是否使用上拉加载 default: false
 * @param obj pulldownConfig - 下拉刷新自定义配置
 * @param obj pullupConfig - 上拉加载自定义配置
 * @example
 * <cubee-pull-refresh ref="pullRefreshEl" :isPullDown="true" :isPullUp="true" @on-pulldown="pullDownAction"  @on-pullup="pullUpAction">
        <div class="f-flex f-flexr item" v-for="item in matchList">
            <div class="f-flex1 itemc">{{item.homeName}}</div>
            <div class="f-flex1 itemc">{{item.awayName}}</div>
        </div>
    </cubee-pull-refresh>
 */
import XScroll from 'vux-xscroll/build/cmd/xscroll.js'
import PullDown from 'vux-xscroll/build/cmd/plugins/pulldown'
import Pullup from 'vux-xscroll/build/cmd/plugins/pullup'

// 下拉刷新默认配置
const pulldownDefaultConfig = () => ({
    content: '<span></span>',
    height: 70,
    autoRefresh: false,
    downContent: '<span></span>',
    upContent: '<span></span>',
    loadingContent: '<span class="rotate"></span>',
    clsPrefix: 'xs-plugin-pulldown-'
})

// 上拉加载默认配置
const pullupDefaultConfig = () => ({
    content: '加载更多',
    pullUpHeight: -10,
    height: 50,
    autoRefresh: false,
    downContent: '加载更多',
    upContent: '加载更多',
    loadingContent: '<span class="rotate"></span>',
    clsPrefix: 'xs-plugin-pullup-'
})

export default {
    name: 'pull-refresh',
    data() {
        return {
            scrollId: 'scroll',
        }
    },
    props: {
        isPullDown: {
            type: Boolean,
            default: false
        },
        isPullUp: {
            type: Boolean,
            default: false
        },
        pulldownConfig: {
            type: Object,
            default () {
                return {}
            }
        },
        pullupConfig: {
            type: Object,
            default () {
                return {}
            }
        },
    },
    methods: {
        // 初始化iscroll
        _init() {
            this.xscroll = new XScroll({
                renderTo: "#" + this.scrollId,
                lockX: true,
                scrollbarX: false,
                bounce: true,
                useOriginScroll: false,
                useTransition: true,
                preventDefault: true,
                boundryCheck: true,
                gpuAcceleration: true,
                stopPropagation: true
            });

            if(this.isPullDown) {
                let config = Object.assign(pulldownDefaultConfig(), this.pulldownConfig);
                this.pulldown = new PullDown(config) ;
                this.xscroll.plug(this.pulldown);
                this.pulldown.on('loading', (e) => {
                    this.$emit('on-pulldown');
                })
            }

            if(this.isPullUp) {
                let config = Object.assign(pullupDefaultConfig(), this.pullupConfig);
                this.pullup = new Pullup(config) ;
                this.xscroll.plug(this.pullup);
                this.pullup.on('loading', (e) => {
                    this.$emit('on-pullup')
                })
            }

            this.xscroll.render();
        },
        refresh() {
            // 下拉刷新
            console.log("refresh");
            this.pulldown.reset(() => {
                this.reset()
            })
        },
        loadRestart() {
            // 重置上拉加载
            this.pullup.restart();
        },
        loadMore() {
            // 上拉加载
            console.log("loadMore");
            this.pullup.complete();
            this.reset();
        },
        loadMoreOver() {
            console.log("loadMoreOver");
            // this.xscroll.unplug(this.pullup);
            this.pullup.stop();
            this.reset();
        },
        onRefresh() {
            // 刷新
            if(this.isPullDown) {
                this.refresh();
            }
            if(this.isPullUp) {
                this.loadMore();
            }
            if(!this.isPullDown && !this.isPullUp) {
                this.reset();
            }
        },
        reset() {
            // 重置滚动条
            console.log("reset");
            setTimeout(() => {
                this.xscroll && this.xscroll.render();
            })
        }
    },
    mounted() {
        this.scrollId = 'scroll' + new Date().getTime();
        this.$nextTick(() => {
            let wrapper = document.getElementById(this.scrollId);
            let scroller = wrapper.querySelector(".xs-container");
            let content = scroller.querySelector(".xs-content");
            // console.log(wrapper.offsetHeight);
            scroller.style.minHeight = (wrapper.clientHeight + 1) + "px"; 
            content.style.minHeight = (wrapper.clientHeight + 1) + "px";
            // 这里的操作是为了当内容的高度小于wrapper的高度是也显示滚动条
            this._init();
        })
    },
}
</script>
<style lang="sass">
.m-pull-refresh {
    position: relative;
    // width:100%;
    // height: 100%;
    font-size: 12px;
    .wrapper{
        position: absolute;
        width:100%;
        height: 100%;
        overflow: scroll;
        -webkit-overflow-scrolling:touch;
        .xs-content {
            height: 100%;
        }
    }
}
.xs-plugin-pulldown-container {
    position: absolute; 
    width: 100%; 
    height: 70px; 
    vertical-align: middle;
    top: -70px; 
    text-align: center; 
    span {
        display: block;
        margin: 17px auto 0;
        width: 36px;
        height: 36px;
        background: url(icon.png) center no-repeat;
        background-size: 100% 100%;
        transition: all 0.2s;
    }
}
.xs-plugin-pullup-container {
    // position: absolute; 
    width: 100%; 
    height: 50px; 
    // vertical-align: middle;
    // bottom: 0px; 
    text-align: center; 
    padding: 10px 0;
    line-height: 30px;
    span {
        display: block;
        margin: 0 auto;
        width: 30px;
        height: 30px;
        background: url(icon.png) center no-repeat;
        background-size: 100% 100%;
        transition: all 0.2s;
    }
}
.rotate {
    // width: 30px; 
    // height: 30px; 
    // display: inline-block; 
    // vertical-align: middle; 
    // background: url(icon.png) no-repeat center; 
    // background-size: 100% auto; 
    animation: loading 0.5s infinite linear;
}
@-webkit-keyframes loading {
    from {
        transform: rotate(0deg) translateZ(0);
        -webkit-transform: rotate(0deg) translateZ(0);
    }
    to {
        transform: rotate(360deg) translateZ(0);
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
