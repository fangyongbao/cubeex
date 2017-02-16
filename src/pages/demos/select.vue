<template>
    <div class="m-select-demo view">
        <Header-com :title="'select-drop'"></Header-com>
        <div class="f-ot content">
            <Cubee-select v-model="value" :options="options"></Cubee-select>
        </div>
        <cubee-tab :which-tab="2"></cubee-tab>
    </div>
</template>
<script>
import HeaderCom from './header';
import {
    CubeeSelect,CubeeTab
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
        HeaderCom,
        CubeeTab
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
    padding-bottom: 1rem;
    .content {
        height: 100%;

    }
}
</style>
