<template>
    <div class="m-radio-demo view">
        <Header-com :title="'radio'"></Header-com>
        <div class="content f-ot">
            <div class="m-radioSelect">
                <div class="radio-title f-cb">
                    <div class="sign f-fl"></div>
                    <div class="text f-fl">单选框列表一</div>
                </div>
                <ul class="m-radioList">
                    <li class="item">
                        <label class="f-flex f-flexr optionItem" :class="{topLine: index==0}" v-for="(option, index) in options1">
                            <div class="f-flex f-flextc f-flexvc chooseLeft">
                                <cubee-radio v-model="value1" :option="option" v-on:change="change1"></cubee-radio>
                            </div>
                            <div class="f-flex1 f-flex f-flexvc">
                                {{option.name}}
                            </div>
                        </label>
                    </li>
                </ul>
                
                <div class="f-cb selected">
                    <span class="f-fl">选中的项</span>
                    <span class="f-fr">{{options1[value1-1].name}}</span>
                </div>
            </div>
            
            <div class="m-radioSelect">
                <div class="radio-title f-cb">
                    <div class="sign f-fl"></div>
                    <div class="text f-fl">单选框列表二</div>
                </div>

                <ul class="m-radioList">
                    <li class="item">
                        <label class="f-flex f-flexr optionItem" :class="{topLine: index==0}" v-for="(option, index) in options2">
                            <div class="f-flex1 f-flex f-flexvc">
                                {{option.name}}
                            </div>
                            <div class="f-flex f-flextc f-flexvc chooseRight">
                                <cubee-radio v-model="value2" :option="option" v-on:change="change2"></cubee-radio>
                            </div>
                        </label>
                    </li>
                </ul>
                
                <div class="f-cb selected">
                    <span class="f-fl">选中的项</span>
                    <span class="f-fr">{{options2[value2-1].name}}</span>
                </div>
            </div>
            
        </div>
        <cubee-tab :which-tab="2"></cubee-tab>
    </div>
</template>
<script>
import HeaderCom from './header';
import {
    CubeeRadio,CubeeTab
} from '../../components';
export default {
    name: 'radio-demo',
    data() {
        return {
            value1: '1',
            value2: '2'
        };
    },
    components: {
        HeaderCom,
        CubeeRadio,
        CubeeTab
    },
    methods: {
        change1(val) {
            console.log('value1:' + val);
            console.log(this.value1);
        },
        change2(val) {
            console.log('value2:' + val);
            console.log(this.value2);
        }
    },
    created() {
        this.options1 = [{
            value: '1',
            name: '选项A'
        }, {
            value: '2',
            name: '选项B'
        }, {
            value: '3',
            name: '选项C'
        }, {
            value: '4',
            name: '被禁用',
            isDisabled: true
        }];
        this.options2 = [{
            value: '1',
            name: '选项A'
        }, {
            value: '2',
            name: '选项B'
        }, {
            value: '3',
            name: '选项C'
        }, {
            value: '4',
            name: '被禁用',
            isDisabled: true
        }];
    }
};
</script>
<style lang="sass" scoped>
.m-radio-demo {
    font-size: 14px;
    padding-bottom: 1rem;
    .content {
        padding-top: 0.2rem;
        height: 100%;
        .m-radioSelect {
            margin-bottom: 0.2rem;
            .m-radioList {
                border-top: 1px solid #E6E6E6;
                border-bottom: 1px solid #E6E6E6;
                .item {
                    background-color: #FFF;
                    padding: 0 0.2rem;
                    .optionItem {
                        border-bottom: 1px solid #E6E6E6;
                        height: 0.9rem;
                    }
                    .optionItem:nth-last-of-type(1) {
                        border: none;
                    }
                    &.topLine {
                        border-top: 1px solid #E6E6E6;
                    }
                    .chooseLeft {
                        width: 0.36rem;
                        margin-right: 0.24rem;
                    }
                    .chooseRight {
                        width: 0.36rem;
                    }
                }
            }
        }
        .m-radioSelect:nth-last-of-type(1) {
            margin: 0;
        }
        .radio-title {
            background-color: #FFF;
            padding: 0.21rem 0.2rem;
            .sign {
                background: #005BAC;
                border-radius: 1px;
                width: 0.04rem;
                height: 15px;
                margin-right: 0.14rem;
            }
            .text {
                font-size: 15px;
                color: #2D3859;
            }
        }
        .selected {
            padding: 0 0.2rem;
            line-height: 0.9rem;
            font-size: 14px;
            color: #9099B4;
            background-color: #FFF;
            border-bottom: 1px solid #E6E6E6;
            span:nth-of-type(1) {
                color: #2D3859;
            }
        }
    }   
}
</style>
