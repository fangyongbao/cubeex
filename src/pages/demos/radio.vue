<template>
    <div class="m-radio-demo view">
        <Header-com></Header-com>
        <div class="f-ot content">
            <label class="f-flex f-flexr item" :class="{topLine: index==0}" v-for="(option, index) in options1">
                <div class="f-flex f-flextc f-flexvc choose">
                    <cubee-radio v-model="value1" :option="option" v-on:change="change1"></cubee-radio>
                </div>
                <div class="f-flex1 f-flex f-flexvc label">
                    cubee
                </div>
            </label>
            <div class="f-flex f-flextc f-flexvc" style="height: 40px; color: #999; font-size: 14px;">
                已选择：
                <span>{{value1}}</span>
            </div>
            <label class="f-flex f-flexr item" :class="{topLine: index==0}" v-for="(option, index) in options2">
                <div class="f-flex f-flextc f-flexvc choose">
                    <cubee-radio v-model="value2" :option="option" v-on:change="change2"></cubee-radio>
                </div>
                <div class="f-flex1 f-flex f-flexvc label">
                    cubee
                </div>
            </label>
            <div class="f-flex f-flextc f-flexvc" style="height: 40px; color: #999; font-size: 14px;">
                已选择：
                <span>{{value2}}</span>
            </div>
        </div>
    </div>
</template>
<script>
import HeaderCom from './header';
import {
    CubeeRadio
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
        CubeeRadio
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
            value: '1'
        }, {
            value: '2'
        }, {
            value: '3'
        }, {
            value: '4'
        }];
        this.options2 = [{
            value: '1'
        }, {
            value: '2'
        }, {
            value: '3'
        }, {
            value: '4'
        }];
    }
};
</script>
<style lang="sass" scoped>
.m-radio-demo {
    color: #999;
    font-size: 14px;
    .item {
        height: 60px;
        border-bottom: 1px solid rgba(0, 0, 0, 0.1);
        &.topLine {
            border-top: 1px solid rgba(0, 0, 0, 0.1);
        }
        .choose {
            width: 60px;
        }
    }
    .content {
        position: absolute;
        left: 0;
        width: 100%;
        top: 40px;
        bottom: 0;
    }
}
</style>
