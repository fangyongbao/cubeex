<template>
    <div class="m-select-demo view">
        <Header-com></Header-com>
        <div class="f-ot content">
            <div class="f-flex f-flexr item">
                <div class="f-flex f-flextc f-flexvc label">
                    选择
                </div>
                <div class="f-flex1 f-flex f-flexvc select">
                    <Cubee-select v-model="value" :options="options"></Cubee-select>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import HeaderCom from './header';
import {
    CubeeSelect
} from '../../components';
export default {
    name: 'select-demo',
    data() {
        return {
            value: {
                id: 2,
                value: "option2"
            },
            options: [{
                id: 1,
                value: "option1"
            }, {
                id: 2,
                value: "option2"
            }, {
                id: 3,
                value: "option3"
            }, {
                id: 4,
                value: "option4"
            }, {
                id: 5,
                value: "option5"
            }, {
                id: 6,
                value: "option6"
            }, {
                id: 7,
                value: "option7"
            }, {
                id: 8,
                value: "option8"
            }]
        };
    },
    components: {
        CubeeSelect,
        HeaderCom
    },
    watch: {
        value(val) {
            console.log('当前选中：' + val.value);
        }
    }
};
</script>
<style lang="sass" scoped>
.m-select-demo {
    color: #999;
    font-size: 14px;
    .item {
        height: 60px;
        margin-top: 10px;
        .label {
            width: 100px;
        }
        .select{
            -webkit-appearance: none;
            appearance: none;
            padding: -0 10px;
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
