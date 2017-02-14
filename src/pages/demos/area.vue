<template>
    <div class="m-area-demo view f-ot">
        <Header-com :title="'Area-scroll'"></Header-com>
        <cubee-area :show="areaStatus" :result="areaResult" ref="vueArea"></cubee-area>
        <div class="f-ot content">
            <div class="f-flex f-flexr areaSelect">
                <div class="f-flex1 f-flex f-flexvc select f-pr" @click="openArea()">
                    {{allArea}}
                    <i class="icon-down"></i>
                </div>
            </div>

            <div class="f-flex f-flexr areaSelectItem">
                <div class="f-flex1 f-flex f-flexvc select f-pr" @click="openArea()">
                    {{allArea}}
                    <i class="icon-down"></i>
                </div>
            </div>
        </div>
        <cubee-tab :which-tab="2"></cubee-tab>
    </div>
</template>
<script>
import {
    mapGetters,
    mapActions
} from 'vuex'
import HeaderCom from './header';
import {
    CubeeArea,CubeeTab
} from '../../components';
export default {
    name: 'area-demo',
    data() {
        return {
            allArea: '选择地址',
            areaResult: {
                province: '',
                city: '',
                area: ''
            }
        };
    },
    components: {
        HeaderCom,
        CubeeArea,
        CubeeTab
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
        openArea() {
            // 通过$refs获取vueArea组件
            // var vueArea = this.$refs.vueArea;
            // vueArea.show = true;
            // console.log(this);
            this.setAreaStatus(true);
        }
    },
    created() {
        // this.formateArea();
    }
};
</script>
<style lang="sass" scoped>
.m-area-demo {
    color: #596380;
    font-size: 14px; 
    padding-bottom: 1rem;
    .content {
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
