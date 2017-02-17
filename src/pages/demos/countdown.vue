<template>
    <div class="m-sortable-demo view">
        <Header-com :title="'countdown'"></Header-com>
        <div class="content f-ot">
            <div class="banner f-cb f-pr">
                <img class="f-fl" src="../../assets/images/banner1.jpg" alt="">
                <div class="countdown">
                    距离进入：{{countdownTime.day}}天 {{countdownTime.hour}}小时 {{countdownTime.minute}}分 {{countdownTime.second}}秒
                </div>
            </div>
            <div class="marqueeItem f-flex">
                <div class="icon"></div>
                <cubee-marquee :roll-list="rollList" :speed="10" :type="'marquee'" class="f-flex1 marqueeList"></cubee-marquee>
            </div>
        </div>
        <cubee-tab :which-tab="2"></cubee-tab>
    </div>
</template>
<script>
import HeaderCom from './header';
import {
    CubeeMarquee,CubeeTab
} from '../../components';
import { countdown } from '../../assets/js/countdown.js'

export default {
    name: 'sortable-demo',
    data() {
        return {
            rollList: ["这是第一条滚动信息这是第一条滚动信息这是第一条滚动信息这是第一条滚动信息这是第一条滚动信息",
            "这是第二条滚动信息这是第一条滚动信滚动信息",
            "这是第三条滚动信息这是第一条滚动信息这是第一条滚动信息这是第一条滚动信息这是第一条滚动信息",
            "这是第四条滚动信息这是第一"],
            countdownTime: {},
            countdownTimer: null
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
        // this.countdown = new Countdown();
        this.countdownTime = countdown(2018,2,16,18,0,0);
        clearInterval(this.countdownTimer)
        this.countdownTimer = setInterval(() => {
            this.countdownTime = countdown(2018,2,16,18,0,0);
        },1000)
    }
};
</script>
<style lang="sass">
    .m-sortable-demo{
        padding-bottom: 1rem;
        font-size: 12px;
        .content {
            height: 100%;
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
                .roll-item {
                    margin-right: 20px;
                }
            }
            .banner {
                img {
                    width: 100%;
                }
                .countdown {
                    position: absolute;
                    bottom: 30px;
                    left: 50%;
                    transform: translateX(-50%);
                    -webkit-transform: translateX(-50%);
                    color: white;
                    background: rgba(0,0,0,0.6);
                    line-height: 20px;
                    border-radius: 10px;
                    text-align: center;
                    min-width: 210px;
                }
            }
        }
    }
</style>
