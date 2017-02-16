<template>
<<<<<<< .mine    <div class="ui-dialog show animated bounceInDown"  v-show="isDiaShow" :id="dialogId"  @click="closeDiaPanel($event)">
        <div class="ui-dialog-cnt" @click="_stopScroll($event)" @touchmove="_stopScroll($event)" @touchend="_stopScroll($event)">
            <div class="ui-dialog-hd">
                <a class="icon icon-close" v-if="close" @click="closeDia($event)"></a>
                <div class="title" v-if="showTitle" ref="title">
                    <slot name="title">
                        {{title}}
                    </slot>
=======    <div class="ui-dialog show"  v-show="dialogConfig.isDiaShow">
        <transition name="fadeZoomIn">
            <div class="ui-dialog-cnt f-poc" v-show="dialogConfig.isDiaShow">
                <div class="ui-dialog-hd">
                    <div class="icon icon-close" v-if="dialogConfig.hasClose" @click="closeDia"></div>
                    <div class="title f-toe" v-if="dialogConfig.title != ''">
                        {{dialogConfig.title}}
                    </div>
>>>>>>> .theirs                </div>
                <div class="ui-dialog-bd">
                    {{dialogConfig.content}}
                </div>
                <div class="ui-dialog-ft ui-btn-group">
                    <button v-for="(item,$index) in dialogConfig.button" type="button" @click.stop="clickBtn($index)">{{item}}</button>
                </div>
            </div>
        </transition>
    </div>
</template>
<script>
/**
 * dialog
 * @module components/dialog
 * @desc 弹窗
 * @param bol close - 是否有关闭按钮 default: true
 * @param string title - 标题 
 * @param string content - 内容 
 * @example
 * <cubee-dialog  :close="true" :title="title" :content="content">
    </cubee-dialog>
 */
import { mapActions } from 'vuex';
export default {
    name: 'dialog',
    data() {
        return {
        }
    },
    props: {
        dialogConfig: {
            type: Object,
            required: true,
            default() {
                return {
                    hasClose: false,
                    title: '',
                    content: '',
                    button: ['取消','确定'],
                    isDiaShow: false
                }
            }
        }
    },
    computed: {
    },
    methods: {
        clickBtn(index) {
            if(index == 0) {
                this.$emit('left-btn');
            }else if (index == 1) {
                this.$emit('right-btn');
            }
        },
<<<<<<< .mine        closeDia(e){
            let self=this;
            self._stopScroll(e);
            self.hide();
        },
        hide(){
            this.$parent.isDiaShow=false;
            this.$emit('closeDiaAfter');
        },
        _stopScroll(e) {
            e.stopPropagation();
=======        closeDia() {
            this.$emit('close-dia');
>>>>>>> .theirs        }
    }
}
</script>
<style lang="sass" scoped>

.ui-dialog {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    -webkit-box-orient: horizontal;
    -webkit-box-pack: center;
    -webkit-box-align: center;
    background-color: rgba(0, 0, 0, 0.66);
    display: none;
    z-index: 1001;

    &.show {
        display: -moz-box;
        display: -webkit-box;
    }

    .ui-dialog-cnt {
        border-radius: 0.08rem;
        background-color: #fff;
        width: 6rem;
        margin:0 auto;
        z-index: 100;
    }

    .ui-dialog-hd {
        position: relative;
        font-size: 0;
        line-height: 0;
        text-align: center;
        padding-top: 0.4rem;
        .title {
            font-size: 17px;
            color: #2D3859;
            width: 100%;
            padding: 0 0.5rem 0.2rem;
            line-height: 17px;
        }

        .icon {
            display: inline-block;
            line-height: 18px;
            position: relative;
            vertical-align: middle;
            -webkit-font-smoothing: antialiased;
            -webkit-text-stroke-width: .2px;
        }

        .icon-close {
            position: absolute;
            right: 0.1rem;
            top: 0.1rem;
            width: 0.5rem;
            height: 0.5rem;
            background: url(./icon-close.png) center no-repeat;
            background-size: 0.3rem 0.3rem;
        }
    }

    .ui-dialog-bd {
        padding: 0.1rem 0.5rem 0.4rem;
        font-size: 13px;
        text-align: center;
        line-height: 0.37rem;
        color: #596380;
    }

    .ui-dialog-ft {
        border-bottom-left-radius: 0.08rem;
        border-bottom-right-radius: 0.08rem;
        
        &.ui-btn-group {
            display: -moz-box;
            display: -webkit-box;
            width: 100%;
            -webkit-box-align: center;
        }

        button {
            background: transparent;
            position: relative;
            display: block;
            -moz-box-flex: 1;
            -webkit-box-flex: 1;
            color: #358AD6;
            font-size: 17px;
            height: 0.79rem; 
            line-height: 0.79rem; 
            text-align: center;
            width: 100%;
            padding: 0;
            &:before {
                content: " ";
                height: 1px;
                position: absolute;
                transform-origin: 0 0;
                border-top: 1px solid #D8D8D8;
                left: 0;
                top: 0;
                transform: scaleY(0.5);
                width: 100%;
            }
            &:after {
                content: " ";
                height: 1px;
                position: absolute;
                transform-origin: 0 0;
                border-right: 1px solid #D8D8D8;
                height: 100%;
                right: 0;
                top: 0;
                transform-origin: 0 100%;
                transform: scaleX(0.5);
                width: 1px;
            }

            &:active {
                background: #eee;
            }

            &:first-child {
                border-bottom-left-radius:6px;
                background-image: none;
            }

            &:last-child {
                border-bottom-right-radius: 6px;
                border-right: 0;
                &:after {
                    display: none;
                }
            }
        }
    }
}
</style>
