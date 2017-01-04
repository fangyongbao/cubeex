<template>
    <div class="m-pull-refresh view">
        <div :id="wrapperId" class="wrapper">
            <div id="scroller" class="scroller">
                <div id="pullDown" ref="pullDownEl" v-if="usePullDown">
                    <span :class="pullDownIconClass"></span>
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
import {
    iScroll
} from 'iscroll';
export default {
    name: 'pull-refresh',
    data() {
        return {
            wrapperId: 'wrapper',
            iscroll: '',
            pullDownIconClass: 'pullDownIcon',
            pullUpIconClass: 'pullUpIcon',
            usePullUpIcon: false,
            usePullLabel: true
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
            let that = this;
            let pullDownOffset = 0;
            if (that.usePullDown) {
                var pullDownEl = that.$refs.pullDownEl;
                pullDownOffset = pullDownEl.offsetHeight;
                var pullDownIconEl = pullDownEl.querySelector('.pullDownIcon');
            }
            if (that.usePullUp) {
                var pullUpEl = that.$refs.pullUpEl;
            }
            that.iscroll = new iScroll(that.wrapperId, {
                hScrollbar: false,
                vScrollbar: false,
                topOffset: pullDownOffset,
                onRefresh() {
                    console.log('refresh');
                    if (that.usePullDown && that.pullDownIconClass.match('loading')) {
                        that.pullDownIconClass = 'pullDownIcon';
                    }
                    if (that.usePullUp && that.pullUpIconClass.match('loading')) {
                        that.pullUpIconClass = 'pullUpIcon';
                        that.usePullUpIcon = false;
                        that.usePullLabel = true;
                    }
                },
                onScrollMove() {
                    let y = this.y;
                    // 计算动态旋转角度
                    if (that.usePullDown && y >= -pullDownOffset) {
                        let dis = pullDownOffset + y;
                        let deg = 360 / pullDownOffset * dis;
                        deg = deg > 360 ? 360 : deg;
                        let css = `
                            -webkit-transform: rotate(${deg}deg);
                            transform: rotate(${deg}deg);
                        `;
                        pullDownIconEl.style.cssText = css;
                        if (y > 0) {
                            this.minScrollY = 0;
                        } else {
                            this.minScrollY = -pullDownOffset;
                        }
                    }

                },
                onScrollEnd() {
                    let y = this.y;
                    if (that.usePullDown && y >= 0) {
                        that.pullDownIconClass = 'pullDownIcon loading';
                        // 下拉刷新
                        that.$emit('pullDownAction');
                    } else if (that.usePullUp && y <= this.maxScrollY && y < -pullDownOffset) {
                        that.pullUpIconClass = 'pullUpIcon loading';
                        that.usePullUpIcon = true;
                        that.usePullLabel = false;
                        console.log('emit pullUpAction');
                        // 上拉加载更多
                        that.$emit('pullUpAction');
                    }
                }
            });
            that.iscroll.scrollTo(0, -pullDownOffset);
        },
        refresh() {
            var that = this;
            that.iscroll.refresh();
        }
    },
    mounted() {
        var that = this;
        that.wrapperId = 'wrapper' + new Date().getTime();
        that.$nextTick(() => {
            that._init();
        })
    }
}
</script>
<style lang="sass" scoped>
.m-pull-refresh {
    .wrapper {
        height: 100%;
        .scroller {
            min-height: 100%;
            position: relative;
            background: #fff;
        }
    }
    #pullDown,
    #pullUp {
        height: 50px;
        font: 14px/50px Arial;
        color: #999;
        vertical-align: middle;
        text-align: center;
    }
    #pullDown .pullDownIcon,
    #pullUp .pullUpIcon {
        display: inline-block;
        width: 30px;
        height: 30px;
        vertical-align: middle;
        background: url(icon.png) no-repeat center;
        background-size: 100% auto;
    }
    #pullDown .pullDownIcon.loading,
    #pullUp .pullUpIcon.loading {
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
