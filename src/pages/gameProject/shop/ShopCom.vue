<template>
    <div class="m-shop">
        <vue-area :show="areaStatus" :result="areaResult" ref="vueArea"></vue-area>
        <div id="wrapper">
            <div id="scroller">
                <input type="" name="" @focus="openArea()" class="areaInput" placeholder="选择" v-model="areaResult.province.name" />
            </div>
        </div>
    </div>
</template>
<script>
import {
    mapGetters,
    mapActions
} from 'vuex'
import vueArea from '../../common/Area/VueArea'
import Iscroll from 'iscroll'
import $ from 'jquery'

export default {
    name: 'ShopComVue',

    data() {
        return {
            viewName: 'shopCom',
            areaResult: {
                province: ''
            }
        }
    },

    computed: mapGetters({
        areaStatus: 'getAreaStatus'
    }),

    methods: {
        ...mapActions([
            'setAreaStatus'
        ]),
        openArea: function() {
            // 通过$refs获取vueArea组件
            // var vueArea = this.$refs.vueArea;
            // vueArea.show = true;
            // console.log(this);

            this.setAreaStatus(true);
        }
    },

    components: {
        vueArea
    },

    mounted: function() {
        console.log(this.$route);
    },
}
</script>
<style lang="sass" scoped>
.m-shop {
    height: 100%;
    overflow: hidden;
    background-color: #fff;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    background: gray;
    #wrapper {
        height: 100%;
    }
    .titleP {
        height: 0.76rem;
        font-size: 0.28rem;
        line-height: 0.76rem;
        background: #fafafa;
        color: #596380;
        padding: 0 10px;
        margin-top: 10px;
    }
    .areaInput {
        height: 40px;
        width: 90%;
        margin: 10px auto;
        border: 1px solid #e0e0e0;
        display: block;
        font-size: 14px;
        padding: 0 10px;
    }
}
</style>
