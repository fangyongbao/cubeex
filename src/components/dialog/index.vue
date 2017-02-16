<template>
    <div class="ui-dialog show animated bounceInDown"  v-show="isDiaShow" :id="dialogId"  @click="closeDiaPanel($event)">
        <div class="ui-dialog-cnt" @click="_stopScroll($event)" @touchmove="_stopScroll($event)" @touchend="_stopScroll($event)">
            <div class="ui-dialog-hd">
                <a class="icon icon-close" v-if="close" @click="closeDia($event)"></a>
                <div class="title" v-if="showTitle" ref="title">
                    <slot name="title">
                        {{title}}
                    </slot>
                </div>
            </div>
            <div class="ui-dialog-bd">
                {{content}}
            </div>
            <div class="ui-dialog-ft ui-btn-group">
                <button v-for="(item,index) in button" type="button"  class="select" :id="'dialogButton'+index" @click="closeDia($event)">{{item}}</button>
            </div>
        </div>
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
            class_name: '',
            select: 0,
            speed: 0,
            allowScroll: false
        }
    },
    props: {
        close: {
            type: Boolean,
            default: true
        },
        title: {
            type: String
        },
        content: {
            type: String
        },
        button: {
            type: Array
        },
        isDiaShow:{
            type: Boolean,
            default: false
        },
        dialogId:{
            type: String
        }
    },
    computed: {
        showTitle () {
          return this.title || (this.$slots && this.$slots.title && this.$slots.title.length > 0);
        }
    },
    methods: {
        ...mapActions([
            'setDiaStatus'
        ]),
        closeDiaPanel(e){
            let self=this;
            self._stopScroll(e);
            self.hide();
        },
        closeDia(e){
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
        }
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
    background-color: rgba(0, 0, 0, 0.5);
    display: none;
    z-index: 1001;

    &.show {
        display: -moz-box;
        display: -webkit-box;
    }

    .ui-dialog-cnt {
        border-radius: 6px;
        background-clip: padding-box;
        outline: 0;
        pointer-events: auto;
        background-color: rgba(253,253,253,.95);
        position: relative;
        max-width: 700px;
        width: 80%;
        margin:0 auto;
        z-index: 1002;
    }

    .ui-dialog-hd {
        position: relative;
        font-size: 0;
        line-height: 0;
        text-align: center;



        .title {
            color: #333; 
            font-size: 16px;
            height: 45px;
            line-height: 45px;
            padding: 0 40px;
            overflow: hidden;
            word-wrap: normal;
            white-space: nowrap;
            text-overflow: ellipsis;
            -o-text-overflow: ellipsis;
            &:after {
                content: " ";
                height: 1px;
                position: absolute;
                transform-origin: 0 0;
                border-bottom: 1px solid #dddddd;
                bottom: 0;
                left: 0;
                transform-origin: 0 100%;
                transform: scaleY(0.5);
                width: 100%;
            }
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
            right: 0;
            top: 0;
            height: 40px;
            line-height: 40px;
            text-align: center;
            width: 40px;
            color: #28a0f2;
            cursor:pointer;
            &:after{
                content:'';
                display: inline-block;
                background: url(./close.png) center no-repeat;
                background-size:cover;
                width:20px;
                height:20px;
                vertical-align: middle;
            }
        }
    }

    .ui-dialog-bd {
        min-height: 71px;
        border-top-left-radius: 6px;
        border-top-right-radius: 6px;
        padding: 30px 20px 20px 20px;
        font-size: 16px;
        display: -moz-box;
        display: -webkit-box;
        -webkit-box-pack: center;
        -webkit-box-align: center;
        -webkit-box-orient: vertical;

        h4 {
            margin-bottom: 4px;
            font-size: 16px;
            width: 100%;
            text-align: center;
        }

        .ui-dialog-content {
            max-height: 308px;
            overflow: auto;
        }
    }

    .ui-dialog-ft {
        border-bottom-left-radius: 6px;
        border-bottom-right-radius:6px;

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
            color: #28A0F2;
            font-size: 16px;
            height: 42px; 
            line-height: 42px; 
            text-align: center;
            width: 100%;

            &:before {
                content: " ";
                height: 1px;
                position: absolute;
                transform-origin: 0 0;
                border-top: 1px solid #dddddd;
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
                border-right: 1px solid #dddddd;
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
