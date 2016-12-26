<template>
    <div>
        <div class="animated duration0-4 fadeIn m-cover m-cover-select" v-show="selectStatus" @click="closeSelect" @touchmove="preventDefault" @mousewheel="preventDefault"></div>
        <div class="animated duration0-2 linear slideInUp m-model m-model-select-scroll" v-show="selectStatus" @mousewheel="preventDefault">
            <div class="bar">
                <div class="cancel" @click="closeSelect">取消</div>
                选择
                <div class="confirm" @click="submit">确定</div>
            </div>
            <div class="f-flex f-flext selectCon">
                <div class="f-flex1 f-tac f-oh">
                    <ul :class="{'dragging': dragging}" @touchstart="handleTouchStart($event)" @mousedown="handleTouchStart($event)" :style="{'transform' : 'translate3d(0,' + translateY + 'px, 0)'}">
                        <li ref="$li"></li>
                        <li></li>
                        <li></li>
                        <li class="f-toe" v-for="(item, index) in options" :class="{
                                    'current': item.id === currentValue.id,
                                    'node1':  Math.abs(index - currentIndex) == 1,
                                    'node2':  Math.abs(index - currentIndex) == 2,
                                    'node3':  Math.abs(index - currentIndex) >= 3
                                }">{{item.value}}</li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            </div>
            <hr class="line-top">
            <hr class="line-bottom">
        </div>
    </div>
</template>
<script>
export default {
    data: function() {
        return {
            dragging: false,
            distanceY: 0,
            translateY: 0,
            currentIndex: 0,
            currentValue: this.value
        }
    },
    props: {
        selectStatus: {
            type: Boolean,
            required: true
        },
        options: {
            type: Array,
            required: true
        },
        value: Object
    },
    methods: {
        init() {
            this.defaultScroll();
        },
        defaultScroll() {
            let that = this;
            // 获取默认选中的下标
            let currentIndex = this.options.findIndex((value, index, arr) => {
                return value.id == that.currentValue.id;
            });
            let clientHeight = 35;
            that.translateY = -clientHeight * currentIndex;
            this.currentIndex = currentIndex;

        },
        closeSelect() {
            this.$parent.selectStatus = false;
        },
        submit() {
            this.closeSelect();
            this.$emit('change', this.currentValue);
        },
        getSelectedData() {
            let index = this.currentIndex;
            this.currentValue = this.options[index];
        },
        setPage() {
            let clientHeight = this.$refs.$li.clientHeight;
            let total = this.options.length;
            let goPage = Math.round((this.translateY / clientHeight).toFixed(1));
            if (goPage > 0) {
                goPage = 0;
            }
            goPage = total - 1 >= Math.abs(goPage) ? goPage : -(total - 1);
            let index = Math.abs(goPage);
            this.currentValue = this.options[index];
            this.currentIndex = index;
            this.translateY = goPage * clientHeight;
        },
        getPageY(e) {
            return e.changedTouches ? e.changedTouches[0]['pageY'] : e['pageY'];
        },
        handleTouchStart(e) {
            this.distanceY = 0;
            this.startY = this.getPageY(e);
            this.startTranslateY = this.translateY;
            this.dragging = true;
            document.addEventListener('touchmove', this.handleTouchMove, false);
            document.addEventListener('touchend', this.handleTouchEnd, false);
            document.addEventListener('mousemove', this.handleTouchMove, false);
            document.addEventListener('mouseup', this.handleTouchEnd, false);
        },
        handleTouchMove(e) {
            this.distanceY = this.getPageY(e) - this.startY;
            this.translateY = this.startTranslateY + this.distanceY;
            if (Math.abs(this.distanceY) > 0) {
                e.preventDefault();
            }
        },
        handleTouchEnd(e) {
            this.dragging = false;
            this.setPage();
            document.removeEventListener('touchmove', this.handleTouchMove);
            document.removeEventListener('touchend', this.handleTouchEnd);
            document.removeEventListener('mousemove', this.handleTouchMove);
            document.removeEventListener('mouseup', this.handleTouchEnd);
        },
        preventDefault(e) {
            e.preventDefault()
        }
    },
    watch: {
        selectStatus(val) {
            if (val) {
                this.defaultScroll();
            }
        }
    },
    mounted() {
        this.init();
    }
}
</script>
<style lang="sass" scoped>
.m-cover-select {
    background: rgba(0, 0, 0, .7);
    z-index: 200;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
}

.m-model-select-scroll {
    position: fixed;
    z-index: 300;
    background: #fff;
    bottom: 0;
    left: 0;
    right: 0;
    .bar {
        background: #385FB5;
        height: 44px;
        line-height: 44px;
        overflow: hidden;
        text-align: center;
        color: #fff;
        font-size: 16px;
        .cancel {
            float: left;
            padding: 0 20px;
            color: #fff;
            font-size: 14px;
        }
        .confirm {
            float: right;
            padding: 0 20px;
            color: #fff;
            font-size: 14px;
        }
    }
    .selectCon {
        width: 100%;
        margin: 0 auto;
        background: #fff;
        overflow: hidden;
        height: 245px;
        overflow: hidden;
    }
    ul {
        -webkit-transition: all .4s ease;
        transition: all .4s ease;
        &.dragging {
            -webkit-transition: none;
            transition: none;
        }
        li {
            line-height: 35px;
            height: 35px;
            font-size: 14px;
            &.current {
                font-size: 16px;
                font-weight: bold;
            }
            &.node1 {
                font-size: 15px;
                opacity: .7;
            }
            &.node2 {
                font-size: 14px;
                opacity: .5;
            }
            &.node3 {
                font-size: 12px;
                opacity: .3;
            }
        }
    }
    .line-top {
        width: 100%;
        border: none;
        border-top: 1px solid #eee;
        position: absolute;
        bottom: 105px;
        margin: 0;
        height: 0;
    }
    .line-bottom {
        width: 100%;
        border: none;
        border-top: 1px solid #eee;
        position: absolute;
        bottom: 140px;
        margin: 0;
        height: 0;
    }
}
</style>
