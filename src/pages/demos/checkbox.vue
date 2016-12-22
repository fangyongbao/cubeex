<template>
    <div class="m-checkbox-demo view">
        <Header-com></Header-com>
        <div class="content">
            <pull-refresh ref="pullRefreshEl" :usePullDown="false" :usePullUp="false">
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
            </pull-refresh>
        </div>
    </div>
</template>
<script>
import {
    PullRefresh,
    Checkbox
} from '../../components';
import HeaderCom from './header';
export default {
    name: 'checkbox-demo',
    data() {
        return {
            value1: ['1']
        };
    },
    components: {
        Checkbox,
        HeaderCom,
        PullRefresh
    },
    methods: {
        change() {
            console.log(this.value1);
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
