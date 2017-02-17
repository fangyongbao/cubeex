<template>
    <div class="m-marquee view">
        <Header-com :title="'marquee'"></Header-com>
        <div class="marqueeItem f-flex">
            <div class="icon"></div>
            <cubee-marquee :roll-list="rollList" :roll-time="4000" class="f-flex1"></cubee-marquee>
        </div>
        <div class="marqueeItem f-flex">
            <div class="icon"></div>
            <cubee-marquee :roll-list="rollList2" :roll-time="2000" :direction="'vertical'" class="f-flex1"></cubee-marquee>
        </div>

        <div class="marqueeItem f-flex">
            <div class="icon"></div>
            <cubee-marquee :roll-list="rollList3" :speed="10" :type="'marquee'" class="f-flex1 marqueeList"></cubee-marquee>
        </div>
        <cubee-tab :which-tab="2"></cubee-tab>
    </div>
</template>
<script>
import HeaderCom from './header';
import {
    CubeeMarquee,CubeeTab
} from '../../components';
export default {
    name: 'marquee-demo',
    data() {
        return {
            rollList: ["这是第一条滚动信息",
            "这是第二条滚动信息这是第二条滚动信息这是第二条滚动信息",
            "这是第三条滚动信息这是第一条滚动信息这是第一条滚动信息这是第一条滚动信息这是第一条滚动信息",
            "这是第四条滚动信息这是第一"],
            rollList2: ["这是第一条滚动信息这是第一条滚动信息这是第一条滚动信息这是第一条滚动信息这是第一条滚动信息",
            "这是第二条滚动信息这是第一条滚动信滚动信息",
            "这是第三条滚动信息这是第一条滚动信息这是第一条滚动信息这是第一条滚动信息这是第一条滚动信息",
            "这是第四条滚动信息这是第一"],
            rollList3: ["这是第一条滚动信息",
            "这是第二条滚动信息",
            "这是第三条滚动信息",
            "这是第四条滚动信息"]
        }
    },
    components: {
        HeaderCom,
        CubeeMarquee,
        CubeeTab
    },
    methods: {

    },
    mounted() {

    }
}
</script>
<style lang="sass">
    .m-marquee {
        padding-bottom: 1rem;
        .marqueeItem {
            padding: 0 0.2rem;
            height: 0.6rem;
            background-color: #FFF;
            .icon {
                width: 0.32rem;
                height: 100%;
                background: url(../../assets/images/icon/icon-announcement-light.png) center no-repeat;
                background-size: contain;
                margin-right: 0.12rem;
            }
        }
        .marqueeList {
            
        }
    }
</style>
