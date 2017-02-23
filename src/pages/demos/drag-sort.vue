<template>
    <div class="m-drag-demo view">
        <Header-com :title="'drag-sort'"></Header-com>
        <div class="f-ot content">
            <Cubee-drag-sort :options="options"></Cubee-drag-sort>
        </div>
    </div>
</template>
<script>
import HeaderCom from './header';
import {
    CubeeDragSort
} from '../../components';
export default {
    name: 'drag-demo',
    data() {
        return {
            options: [{
                id: 1,
                name: "option1"
            }, {
                id: 2,
                name: "option2"
            }, {
                id: 3,
                name: "option3"
            }, {
                id: 4,
                name: "option4"
            }, {
                id: 5,
                name: "option5"
            }, {
                id: 6,
                name: "option6"
            }, {
                id: 7,
                name: "option7"
            }, {
                id: 8,
                name: "option8"
            }]
        };
    },
    components: {
        HeaderCom,
        CubeeDragSort
    },
    watch: {
        value(val) {
            // console.log('当前选中：' + val.value);
        }
    }
};
</script>
<style lang="sass" scoped>
.m-drag-demo {
    color: #999;
    font-size: 14px;
    padding-bottom: 1rem;
    .content {
        height: 100%;

    }
}
</style>
