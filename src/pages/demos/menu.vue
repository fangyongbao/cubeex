<template>
    <div class="view m-menu">
        <header-com :is-go-back="false" :title="'Demo'"></header-com>
        <ul class="f-ot content">
            <router-link :to="{ path:'/pull-refresh-iscroll', activeClass:'current'}" tag="li">
                <div class="demos-item f-flex">
                    <div class="icon menu-pull-refresh"></div>
                    <div class="f-flex1 components">
                        <span>pull-refresh-iscroll</span>(上拉/下拉加载 基于iscroll4)
                    </div>
                </div>
            </router-link>
            <router-link :to="{ path:'/pull-refresh-xscroll', activeClass:'current'}" tag="li">
                <div class="demos-item f-flex">
                    <div class="icon menu-pull-refresh"></div>
                    <div class="f-flex1 components">
                        <span>pull-refresh-xcroll</span>(上拉/下拉加载 基于xscroll)
                    </div>
                </div>
            </router-link>
            <router-link :to="{ path:'/pull-refresh-nscroll', activeClass:'current'}" tag="li">
                <div class="demos-item f-flex">
                    <div class="icon menu-pull-refresh"></div>
                    <div class="f-flex1 components">
                        <span>pull-refresh-nscroll</span>(上拉/下拉加载 基于原生滚动)
                    </div>
                </div>
            </router-link>
            <router-link :to="{ path:'/swiper', activeClass:'current'}" tag="li">
                <div class="demos-item f-flex">
                    <div class="icon menu-swiper"></div>
                    <div class="f-flex1 components">
                        <span>swiper</span>(无缝切换)
                    </div>
                </div>
            </router-link>
            <router-link :to="{ path:'/previewer', activeClass:'current'}" tag="li">
                <div class="demos-item f-flex">
                    <div class="icon menu-preview"></div>
                    <div class="f-flex1 components">
                        <span>previewer</span>(图片预览)
                    </div>
                </div>
            </router-link>
            <router-link :to="{ path:'/qrcode', activeClass:'current'}" tag="li">
                <div class="demos-item f-flex">
                    <div class="icon menu-qrcode"></div>
                    <div class="f-flex1 components">
                        <span>qrcode</span>(生成二维码)
                    </div>
                </div>
            </router-link>
            <router-link :to="{ path:'/address-book', activeClass:'current'}" tag="li">
                <div class="demos-item f-flex">
                    <div class="icon menu-addressBook"></div>
                    <div class="f-flex1 components">
                        <span>address-book</span>(通讯录)
                    </div>
                </div>
            </router-link>
            <router-link :to="{ path:'/radio', activeClass:'current'}" tag="li">
                <div class="demos-item f-flex">
                    <div class="icon menu-radio"></div>
                    <div class="f-flex1 components">
                        <span>radio</span>(单选框)
                    </div>
                </div>
            </router-link>
            <router-link :to="{ path:'/checkbox', activeClass:'current'}" tag="li">
                <div class="demos-item f-flex">
                    <div class="icon menu-checkbox"></div>
                    <div class="f-flex1 components">
                        <span>checkbox</span>(复选框)
                    </div>
                </div>
            </router-link>
            <router-link :to="{ path:'/select', activeClass:'current'}" tag="li">
                <div class="demos-item f-flex">
                    <div class="icon menu-select-drop"></div>
                    <div class="f-flex1 components">
                        <span>select-drop</span>(下拉框-下拉)
                    </div>
                </div>
            </router-link>
            <router-link :to="{ path:'/select-scroll', activeClass:'current'}" tag="li">
                <div class="demos-item f-flex">
                    <div class="icon menu-select-scroll"></div>
                    <div class="f-flex1 components">
                        <span>select-scroll</span>(下拉框-滚动)
                    </div>
                </div>
            </router-link>
            <router-link :to="{ path:'/area', activeClass:'current'}" tag="li">
                <div class="demos-item f-flex">
                    <div class="icon menu-select-area"></div>
                    <div class="f-flex1 components">
                        <span>area-scroll</span>(地区联动-滚动)
                    </div>
                </div>
            </router-link>
            <router-link :to="{ path:'/datetime', activeClass:'current'}" tag="li">
                <div class="demos-item f-flex">
                    <div class="icon menu-select-datatime"></div>
                    <div class="f-flex1 components">
                        <span>datetime</span>(时间联动-滚动)
                    </div>
                </div>
            </router-link>
            <router-link :to="{ path:'/dialog', activeClass:'current'}" tag="li">
                <div class="demos-item f-flex">
                    <div class="icon menu-dialog"></div>
                    <div class="f-flex1 components">
                        <span>dialog</span>(弹窗)
                    </div>
                </div>
            </router-link>
            <router-link :to="{ path:'/qq', activeClass:'current'}" tag="li">
                <div class="demos-item f-flex">
                    <div class="icon menu-qq"></div>
                    <div class="f-flex1 components">
                        <span>QQ</span>(qq在线客服)
                    </div>
                </div>
            </router-link>
            <router-link :to="{ path:'/marquee', activeClass:'current'}" tag="li">
                <div class="demos-item f-flex">
                    <div class="icon menu-announcement"></div>
                    <div class="f-flex1 components">
                        <span>marquee</span>(公告轮播&跑马灯)
                    </div>
                </div>
            </router-link>
            <router-link :to="{ path:'/countdown', activeClass:'current'}" tag="li">
                <div class="demos-item f-flex">
                    <div class="icon menu-countdown"></div>
                    <div class="f-flex1 components">
                        <span>countdown</span>(倒计时)
                    </div>
                </div>
            </router-link>
            <router-link :to="{ path:'/slider', activeClass:'current'}" tag="li">
                <div class="demos-item f-flex">
                    <div class="icon menu-dialog"></div>
                    <div class="f-flex1 components">
                        <span>slider</span>(滑动)
                    </div>
                </div>
            </router-link>
            <router-link :to="{ path:'/drag', activeClass:'current'}" tag="li">
                <div class="demos-item f-flex">
                    <div class="icon menu-dialog"></div>
                    <div class="f-flex1 components">
                        <span>drag</span>(拖动排序)
                    </div>
                </div>
            </router-link>
            <router-link :to="{ path:'/uploadImg', activeClass:'current'}" tag="li">
                <div class="demos-item f-flex">
                    <div class="icon menu-uploadImg"></div>
                    <div class="f-flex1 components">
                        <span>uploadImg</span>(上传图片)
                    </div>
                </div>
            </router-link>
        </ul>
        <cubee-tab :which-tab="2"></cubee-tab>
        
    </div>
</template>
<script>
import {
    CubeeLoading,
    CubeeTab
} from '../../components';
import {
    mapActions
} from 'vuex'
import HeaderCom from './header.vue'
export default {
    name: 'menu',
    data() {
        return {

        }
    },
    components: {
        CubeeLoading,
        HeaderCom,
        CubeeTab
    },
    methods: {
        ...mapActions([
            'setLoadStatus'
        ]),
    },
    created: function() {

    },
    mounted: function() {
        
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
$bcolor:#5682D9;
.m-menu {
    padding-bottom: 1rem;
    .content {
        height: 100%;
    }
    .demos-item {
        background-color: #FFF;
        height: 1rem;
        line-height: 1rem;
        font-size: 12px;
        color: #9099B4;
        .icon {
            width: 0.94rem;
            height: 1rem;
        }
        .components {
            border-bottom: 1px solid #E6E6E6;
            span {
                color: #2D3859;
            }
        }
    }
    .demos-item:active {
        background: darken(#fff, 10%);
    }
    li:nth-last-of-type(1) {
        .components {
            border: none;
        }
    }
    .menu-pull-refresh {
        background: url(../../assets/images/icon/icon-loading.png) center no-repeat;
        background-size: 0.34rem 0.34rem;
    }
    .menu-swiper {
        background: url(../../assets/images/icon/icon-swiper.png) center no-repeat;
        background-size: 0.4rem 0.22rem;
    }
    .menu-addressBook {
        background: url(../../assets/images/icon/icon-addressBook.png) center no-repeat;
        background-size: 0.31rem 0.32rem;
    }
    .menu-radio {
        background: url(../../assets/images/icon/icon-radio.png) center no-repeat;
        background-size: 0.32rem 0.32rem;
    }
    .menu-checkbox {
        background: url(../../assets/images/icon/icon-checkbox.png) center no-repeat;
        background-size: 0.32rem 0.32rem;
    }
    .menu-select-drop {
        background: url(../../assets/images/icon/icon-select-drop.png) center no-repeat;
        background-size: 0.32rem 0.24rem;
    }
    .menu-select-scroll {
        background: url(../../assets/images/icon/icon-select-scroll.png) center no-repeat;
        background-size: 0.34rem 0.28rem;
    }
    .menu-select-area {
        background: url(../../assets/images/icon/icon-area.png) center no-repeat;
        background-size: 0.3rem 0.36rem;
    }
    .menu-select-datatime {
        background: url(../../assets/images/icon/icon-datatime.png) center no-repeat;
        background-size: 0.34rem 0.32rem;
    }
    .menu-dialog {
        background: url(../../assets/images/icon/icon-dialog.png) center no-repeat;
        background-size: 0.34rem 0.32rem;
    }
    .menu-preview {
        background: url(../../assets/images/icon/icon-preview.png) center no-repeat;
        background-size: 0.34rem 0.24rem;
    }
    .menu-qrcode {
        background: url(../../assets/images/icon/icon-qrcode.png) center no-repeat;
        background-size: 0.29rem 0.29rem;
    }
    .menu-qq {
        background: url(../../assets/images/icon/icon-qq.png) center no-repeat;
        background-size: 0.29rem 0.29rem; 
    }
    .menu-announcement {
        background: url(../../assets/images/icon/icon-announcement.png) center no-repeat;
        background-size: 0.32rem 0.29rem; 
    }
    .menu-countdown {
        background: url(../../assets/images/icon/icon-countdown.png) center no-repeat;
        background-size: 0.28rem 0.32rem; 
    }
    .menu-uploadImg {
        background: url(../../assets/images/icon/icon-fileImage.png) center no-repeat;
        background-size: 0.36rem 0.26rem; 
    }
}
</style>
