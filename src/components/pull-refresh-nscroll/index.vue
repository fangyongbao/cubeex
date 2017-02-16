<template>
    <div class="m-pull-refresh-n">
        <div class="scroller" :class="{hasTransition: isDroping}" :style="{ 'transform': 'translate3d(0, ' + translateY + 'px, 0)' }">
            <div class="f-flex f-flextc f-flexvc pullDown" v-if="usePullDown">
                <span class="icon" :class="downClass" :style="{ 'transform': 'rotate3d(0, 0, 1, '+ deg +'deg)' }"></span>
            </div>
            <div>
                <slot></slot>
            </div>
            <div class='f-flex f-flextc pullUp' v-if="usePullUp">
                <span class="icon loading"></span>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'pull-refresh-n',
    data() {
        return {
            startY: 0,
            wrapperTarget: null,
            direction: '',
            translateY: 0,
            isDroping: false,
            deg: 0,
            downElHeight: 50,
            downClass: ''
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
        init() {
            let _this = this;
            _this.wrapperTarget = _this.$el.parentNode;
            _this.bindTouchEvents();
        },

        bindTouchEvents() {
            let _this = this;
            // 使用下拉刷新
            if (_this.usePullDown) {
                _this.$el.addEventListener('touchstart', _this.handleTouchStart);
                _this.$el.addEventListener('touchmove', _this.handleTouchMove);
                _this.$el.addEventListener('touchend', _this.handleTouchEnd);
            }
            // 使用下拉加载更多
            _this.usePullUp && _this.wrapperTarget.addEventListener('scroll', _this.handleScroll);
        },

        handleTouchStart(event) {
            let _this = this;
            _this.startY = event.touches[0].clientY;
            // 正在加载
            if (_this.downClass.indexOf('loading') == -1) {
                _this.downClass = '';
                _this.isDroping = false;
            }
        },

        handleTouchMove(event) {
            let _this = this;
            if (_this.downClass.indexOf('loading') >= 0) {
                event.preventDefault();
                return;
            }
            let currentY = event.touches[0].clientY;
            let distance = currentY - _this.startY;
            _this.direction = distance > 0 ? 'down' : 'up';
            let currentScrollTop = _this.wrapperTarget.scrollTop;
            if (_this.direction === 'down' && currentScrollTop == 0) {
                event.preventDefault();
                event.stopPropagation();
                _this.translateY = distance / 2;
                if (_this.translateY < 0) {
                    _this.translateY = 0;
                }
                let deg = 360 / _this.downElHeight * _this.translateY;
                deg = deg > 360 ? 360 : deg;
                _this.deg = deg;
            }
            _this.downClass = _this.translateY >= _this.downElHeight ? 'drop' : '';
        },

        handleTouchEnd(event) {
            let _this = this;
            let currentScrollTop = _this.wrapperTarget.scrollTop;
            if (_this.direction === 'down' && currentScrollTop === 0 && _this.translateY > 0) {
                _this.isDroping = true;
                if (_this.downClass.indexOf('drop') != -1) {
                    _this.translateY = '50';
                    _this.downClass = 'drop loading';
                    _this.$emit('pullDownAction');
                } else {
                    _this.translateY = 0;
                    _this.downClass = '';
                }
            }
            _this.direction = '';
            _this.deg = 0;
        },

        handleScroll(event) {
            let _this = this;
            let scrollTop = event.target.scrollTop;
            let wrapperHeight = _this.wrapperTarget.clientHeight;
            let scrollerHeight = _this.$el.clientHeight;
            if (scrollerHeight - scrollTop - wrapperHeight < 100) {
                if (_this.usePullUp) {
                    _this.$emit('pullUpAction');
                }
            }
        },

        refresh() {
            let _this = this;
            _this.translateY = 0;
            _this.downClass = '';
        }
    },
    mounted() {
        let _this = this;
        _this.init();
        _this.$parent.wrapperHeight = 400;
    }
}
</script>
<style lang="sass" scoped>
.m-pull-refresh-n {
    overflow: hidden;
    .scroller {
        background: #fff;
        &.hasTransition {
            transition: all 0.2s;
            -webkit-transition: all 0.2s;
        }
    }
    .pullDown,
    .pullUp {
        height: 50px;
    }
    .pullDown {
        margin-top: -50px;
    }
    .pullDown .icon,
    .pullUp .icon {
        width: 30px;
        height: 30px;
        background: url(icon.png) no-repeat center;
        background-size: 100% auto;
    }
    .pullDown .icon.loading,
    .pullUp .icon.loading {
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
