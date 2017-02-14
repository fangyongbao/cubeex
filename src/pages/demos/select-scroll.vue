<template>
    <div class="m-select-scroll-demo view">
        <Header-com :title="'Select-scroll'"></Header-com>
        <Cubee-select-scroll v-model="value" :options="options" :selectStatus="selectStatus" v-on:change="change"></Cubee-select-scroll>
        <div class="f-ot content">
            <div class="f-flex f-flexr areaSelect">
                <div class="f-flex1 f-flex f-flexvc select f-pr" @click="openSelect">
                    {{value.value}}
                    <i class="icon-down"></i>
                </div>
            </div>

            <div class="f-flex f-flexr areaSelectItem">
                <div class="f-flex1 f-flex f-flexvc select f-pr" @click="openSelect">
                    {{value.value}}
                    <i class="icon-down"></i>
                </div>
            </div>
        </div>
        <cubee-tab :which-tab="2"></cubee-tab>
    </div>
</template>
<script>
import HeaderCom from './header';
import {
    CubeeSelectScroll,CubeeTab
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
        CubeeSelectScroll,
        CubeeTab
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
    color: #596380;
    font-size: 14px; 
    padding-bottom: 1rem;
    .content {
        height: 100%;
        .areaSelect {
            background-color: #FFF;
            padding: 0.4rem 0.24rem;
            margin-bottom: 0.2rem;
            .select {
                border: 1px solid #BDC1D2;
                border-radius: 0.04rem;
                height: 0.8rem;
                line-height: 0.8rem;
                padding: 0 0.24rem;
                .icon-down {
                    width: 0.8rem;
                    height: 0.8rem;
                    background: url(../../assets/images/icon/icon_down.png) center no-repeat;
                    background-size: 0.28rem 0.13rem;
                    position: absolute;
                    top: 0;
                    right: 0;
                }
            }
        }
        .areaSelectItem {
            background-color: #FFF;
            border-top: 1px solid #E6E6E6;
            border-bottom: 1px solid #E6E6E6;
            .select {
                padding: 0 0.24rem;
                line-height: 0.9rem;
                height: 0.9rem;
                .icon-down {
                    position: absolute;
                    top: 0;
                    right: 0.24rem;
                    width: 0.12rem;
                    height: 0.9rem;
                    background: url(../../assets/images/icon/icon-right.png) center no-repeat;
                    background-size: contain;
                }
            }
        }
    }
}
</style>
