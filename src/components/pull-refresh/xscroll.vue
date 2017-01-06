<template>
    <div class="m-pull-refresh view">
        <div :id="scrollId" class="wrapper">
            <div class="xs-container" id="container">
                <div class="xs-content" id="xs-content">
                    <slot></slot>
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
 * @param bol usePullDown - 是否使用下拉刷新 default: false
 * @param bol usePullUp - 是否使用上拉加载 default: false
 * @param obj pulldownConfig - 下拉刷新自定义配置
 * @param obj pullupConfig - 上拉加载自定义配置
 * @example
 * <cubee-pull-refresh ref="pullRefreshEl" :usePullDown="true" :usePullUp="true" @on-pulldown="pullDownAction"  @on-pullup="pullUpAction">
        <div class="f-flex f-flexr item" v-for="item in matchList">
            <div class="f-flex1 itemc">{{item.homeName}}</div>
            <div class="f-flex1 itemc">{{item.awayName}}</div>
        </div>
    </cubee-pull-refresh>
 */

import XScroll from 'vux-xscroll/build/cmd/xscroll.js'
import PullDown from 'vux-xscroll/build/cmd/plugins/pulldown'
import Pullup from 'vux-xscroll/build/cmd/plugins/pullup'

const pulldownDefaultConfig = () => ({
    content: 'Pull Down To Refresh',
    height: 60,
    autoRefresh: false,
    downContent: 'Pull Down To Refresh',
    upContent: 'Release To Refresh',
    loadingContent: 'Loading...',
    clsPrefix: 'xs-plugin-pulldown-'
})

const pullupDefaultConfig = () => ({
    content: 'Pull Up To Refresh',
    pullUpHeight: 60,
    height: 40,
    autoRefresh: false,
    downContent: 'Release To Refresh',
    upContent: 'Pull Up To Refresh',
    loadingContent: 'Loading...',
    clsPrefix: 'xs-plugin-pullup-'
})





// // 下拉刷新默认配置
// const pulldownDefaultConfig = () => ({
//     content: '<span style="margin-right: 10px;">↓</span><span>下拉刷新</span>',
//     height: 70,
//     autoRefresh: false,
//     downContent: '<span style="margin-right: 10px;">↓</span><span>下拉刷新</span>',
//     upContent: '<span style="margin-right: 10px;">↑</span><span>松开即可刷新</span>',
//     loadingContent: '<span style="width: 30px; height: 30px; display: inline-block; vertical-align: middle; background: url(http://ohy4bt9w4.bkt.clouddn.com/image/icon/icon_refresh.png) no-repeat center; background-size: 100% auto; animation: loading 0.5s infinite linear;"></span>',
//     clsPrefix: 'xs-plugin-pulldown-'
// })

// // 上拉加载默认配置
// const pullupDefaultConfig = () => ({
//     content: '<span></span>',
//     pullUpHeight: 50,
//     height: 50,
//     autoRefresh: false,
//     downContent: '<span></span>',
//     upContent: '<span></span>',
//     loadingContent: '<span style="width: 30px; height: 30px; display: block; margin: 10px auto; background: url(http://ohy4bt9w4.bkt.clouddn.com/image/icon/icon_refresh.png) no-repeat center; background-size: 100% auto; animation: loading 0.5s infinite linear;"></span>',
//     clsPrefix: 'xs-plugin-pullup-'
// })

export default {
    name: 'pull-refresh',
    data() {
        return {
            scrollId: 'scroll',
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

            if(this.usePullDown) {
                let config = Object.assign(pulldownDefaultConfig(), this.pulldownConfig);
                this.pulldown = new PullDown(config) ;
                this.xscroll.plug(this.pulldown);
                this.pulldown.on('loading', (e) => {
                    this.$emit('on-pulldown')
                })
            }

            if(this.usePullUp) {
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
            this.pulldown.reset(() => {
                this.reset()
            })
        },
        loadMore() {
            // 上拉加载
            this.pullup.complete();
            this.reset();
        },
        reset() {
            // 重置滚动条
            setTimeout(() => {
                this.xscroll && this.xscroll.render()
            })
        }
    },
    mounted() {
        this.scrollId = 'scroll' + new Date().getTime();
        this.$nextTick(() => {
            let wrapper = document.getElementById(this.scrollId);
            // let scroller = document.getElementById("container");
            // let content = document.getElementById("xs-content");
            // scroller.style.minHeight = (wrapper.clientHeight + 1) + "px"; 
            // content.style.minHeight = (wrapper.clientHeight + 1) + "px";
            // 这里的操作是为了当内容的高度小于wrapper的高度是也显示滚动条
            // this._init();
        })
    }
}
</script>
<style lang="sass" scoped>
.m-pull-refresh {
    font-size: 14px;
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
