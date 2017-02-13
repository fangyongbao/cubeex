<template>
    <div class="m-swiper-demo view">
        <Header-com></Header-com>
        <cubee-swiper ref="swiper1" :list="baseList" :is-indicator="false" :is-auto-play="true" style="margin-bottom: 20px"></cubee-swiper>
        <cubee-swiper ref="swiper2" :list="baseList2" :is-indicator="true" :is-auto-play="false"></cubee-swiper>
    </div>
</template>
<script>
import HeaderCom from './header';
import {
    CubeeSwiper
} from '../../components';

export default {
    name: 'swiper-demo',
    data() {
        return {
            baseList: [{
                img: 'https://static.vux.li/demo/1.jpg',
            }, {
                img: 'https://static.vux.li/demo/2.jpg',
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
        CubeeSwiper
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
        overflow: scroll;
        -webkit-overflow-scrolling: touch;
    }
</style>
