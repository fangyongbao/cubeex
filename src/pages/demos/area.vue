<template>
    <div class="m-area-demo view">
        <Header-com></Header-com>
        <cubee-area :show="areaStatus" :result="areaResult" ref="vueArea"></cubee-area>
        <div class="f-ot content">
            <div class="f-flex f-flexr item">
                <div class="f-flex f-flextc f-flexvc label">
                    选择
                </div>
                <div class="f-flex1 f-flex f-flexvc select">
                    <input type="" name="" @focus="openArea($event)" class="areaInput" placeholder="选择收货地址" :value="allArea" />
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import {
    mapGetters,
    mapActions
} from 'vuex'
import HeaderCom from './header';
import {
    CubeeArea
} from '../../components';
export default {
    name: 'area-demo',
    data() {
        return {
            allArea: '',
            areaResult: {
                province: '',
                city: '',
                area: ''
            }
        };
    },
    components: {
        HeaderCom,
        CubeeArea
    },
    computed: mapGetters({
        areaStatus: 'getAreaStatus'
    }),
    watch: {
        areaResult() {
            this.formateArea();
        }
    },
    methods: {
        ...mapActions([
            'setAreaStatus'
        ]),
        formateArea() {
            let areaResult = this.areaResult;
            console.log(areaResult);
            let allArea = [];
            for (let key in areaResult) {
                if (areaResult[key].name) {
                    allArea.push(areaResult[key].name);
                }
            }
            this.allArea = allArea.join('/');
        },
        openArea(e) {
            // 通过$refs获取vueArea组件
            // var vueArea = this.$refs.vueArea;
            // vueArea.show = true;
            // console.log(this);
            this.setAreaStatus(true);
            document.activeElement.blur();
        }
    },
    created() {
        this.formateArea();
    }
};
</script>
<style lang="sass" scoped>
.m-area-demo {
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
