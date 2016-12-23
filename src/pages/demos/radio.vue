<template>
    <div class="m-radio-demo view">
        <Header-com></Header-com>
        <div class="f-ot content">
            <label class="f-flex f-flexr item" v-for="option in options1">
                <div class="f-flex f-flextc f-flexvc choose">
                    <Radio v-model="value1" :option="option" v-on:change="change"></Radio>
                </div>
                <div class="f-flex1 f-flex f-flexvc label">
                    cubee
                </div>
            </label>
            <div class="f-flex f-flextc f-flexvc" style="height: 40px; color: #999; font-size: 14px;">
                已选择：
                <span>{{value1}}</span>
            </div>
            <label class="f-flex f-flexr item" v-for="option in options1">
                <div class="f-flex f-flextc f-flexvc choose">
                    <Radio v-model="value2" :option="option" v-on:change="change"></Radio>
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
import {
    Radio
} from '../../components';
import HeaderCom from './header';
export default {
    name: 'radio-demo',
    data() {
        return {
            value1: '1',
            value2: '2'
        };
    },
    components: {
        Radio,
        HeaderCom
    },
    methods: {
        change() {
            console.log('valu1:' + this.value1);
            console.log('value2:' + this.value2);
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
    color: #fff;
    font-size: 14px;
    .item {
        height: 60px;
        margin-top: 10px;
        background: gray;
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
