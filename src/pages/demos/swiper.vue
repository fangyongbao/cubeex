<template>
    <div class="m-swiper-demo view f-ot">
        <Header-com :title="'swiper'"></Header-com>
        <div class="swiperItem">
            <div class="swiper-title f-cb">
                <div class="sign f-fl"></div>
                <div class="text f-fl">带文案轮播</div>
            </div>
            <cubee-swiper ref="swiper1" :list="baseList" :is-indicator="false" :is-auto-play="true" :is-copywriting="true"></cubee-swiper>
        </div>
        <div class="swiperItem">
            <div class="swiper-title f-cb">
                <div class="sign f-fl"></div>
                <div class="text f-fl">无文案轮播</div>
            </div>
            <cubee-swiper ref="swiper2" :list="baseList2" :is-indicator="true" :is-auto-play="false"></cubee-swiper>
        </div>
        
        <cubee-tab :which-tab="2"></cubee-tab>
    </div>
</template>
<script>
import HeaderCom from './header';
import {
    CubeeSwiper,CubeeTab
} from '../../components';

export default {
    name: 'swiper-demo',
    data() {
        return {
            baseList: [{
                img: 'https://static.vux.li/demo/1.jpg',
                alt: '场景一文案一'
            }, {
                img: 'https://static.vux.li/demo/2.jpg',
                alt: '场景一文案二'
            }],
            baseList2: [{
                img: 'https://static.vux.li/demo/1.jpg',
            }, {
                img: 'https://static.vux.li/demo/2.jpg',
            }]
        }
    },
    components: {
        HeaderCom,
        CubeeSwiper,
        CubeeTab
    },
    methods: {
    },
    mounted() {
        let swiper1 = this.$refs.swiper1;
        swiper1.$nextTick(function() {
            this.init();
        })
        let swiper2 = this.$refs.swiper2;
        swiper2.$nextTick(function() {
            this.init();
        })
    }
};
</script>
<style lang="sass" scoped>
    .m-swiper-demo{
        padding-bottom: 1rem;
        .swiperItem {
            padding-top: 0.2rem;
        }
        .swiper-title {
            background-color: #FFF;
            padding: 0.21rem 0.2rem;
            .sign {
                background: #005BAC;
                border-radius: 1px;
                width: 0.04rem;
                height: 15px;
                margin-right: 0.14rem;
            }
            .text {
                font-size: 15px;
                color: #2D3859;
            }
        }
    }
</style>
