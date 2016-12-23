<template>
    <div class="m-checkbox-demo view">
        <Header-com></Header-com>
        <div class="f-ot content">
            <label class="f-flex f-flexr item" v-for="option in options1">
                <div class="f-flex f-flextc f-flexvc choose">
                    <Checkbox v-model="value1" :option="option" v-on:change="change"></Checkbox>
                </div>
                <div class="f-flex1 f-flex f-flexvc label">
                    cubee
                </div>
            </label>
            <div class="f-flex f-flextc f-flexvc" style="height: 40px; color: #999; font-size: 14px;">
                已选择：
                <span v-for="item in value1">{{item}}</span>
            </div>
            <label class="f-flex f-flexr item" v-for="option in options2">
                <div class="f-flex f-flextc f-flexvc choose">
                    <Checkbox v-model="value2" :option="option" v-on:change="change"></Checkbox>
                </div>
                <div class="f-flex1 f-flex f-flexvc label">
                    cubee
                </div>
            </label>
            <div class="f-flex f-flextc f-flexvc" style="height: 40px; color: #999; font-size: 14px;">
                已选择：
                <span v-for="item in value2">{{item}}</span>
            </div>
        </div>
    </div>
</template>
<script>
import {
    Checkbox
} from '../../components';
import HeaderCom from './header';
export default {
    name: 'checkbox-demo',
    data() {
        return {
            value1: ['1'],
            value2: ['2']
        };
    },
    components: {
        Checkbox,
        HeaderCom,
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
            value: '2',
        }, {
            value: '3'
        }, {
            value: '4'
        }];
        this.options2 = [{
            value: '1'
        }, {
            value: '2',
        }, {
            value: '3'
        }, {
            value: '4'
        }];
    }
};
</script>
<style lang="sass" scoped>
.m-checkbox-demo {
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
