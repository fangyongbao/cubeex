<template>
    <div class="m-select-scroll-demo view">
        <Header-com></Header-com>
        <Cubee-select-scroll v-model="value" :options="options" :selectStatus="selectStatus" v-on:change="change"></Cubee-select-scroll>
        <div class="f-ot content">
            <div class="f-flex f-flexr item">
                <div class="f-flex f-flextc f-flexvc label">
                    选择
                </div>
                <div class="f-flex1 f-flex f-flexvc select">
                    <input type="" name="" @click="openSelect($event)" class="areaInput" placeholder="点击选择" :value="value.value" readonly="" />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import HeaderCom from './header';
import {
    CubeeSelectScroll
} from '../../components';
export default {
    name: 'select-scroll-demo',
    data() {
        return {
            selectStatus: false,
            value: {
                id: 6,
                value: 'option6'
            },
            options: [{
                id: 0,
                value: 'option0'
            }, {
                id: 1,
                value: 'option1'
            }, {
                id: 2,
                value: 'option2'
            }, {
                id: 3,
                value: 'option3'
            }, {
                id: 4,
                value: 'option4'
            }, {
                id: 5,
                value: 'option5'
            }, {
                id: 6,
                value: 'option6'
            }, {
                id: 7,
                value: 'option7'
            }, {
                id: 8,
                value: 'option8'
            }, {
                id: 9,
                value: 'option9'
            }]
        };
    },
    components: {
        HeaderCom,
        CubeeSelectScroll
    },
    watch: {},
    methods: {
        openSelect() {
            this.selectStatus = true;
        },
        change(val) {
            this.value = val;
            console.dir('当前选中id:' + val.id + ' value:' + val.value);
        }
    },
    created() {}
};
</script>
<style lang="sass" scoped>
.m-select-scroll-demo {
    color: #999;
    font-size: 14px;
    .item {
        height: 60px;
        margin-top: 10px;
        .label {
            width: 60px;
        }
        .select {
            padding: 0 10px;
            input {
                width: 100%;
                height: 40px;
                line-height: 40px;
                border: 1px solid rgba(0, 0, 0, 0.1);
                border-radius: 2px;
                color: #666;
                position: relative;
                box-sizing: border-box;
                padding: 0 10px;
                -webkit-appearance: none;
                appearance: none;
            }
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
