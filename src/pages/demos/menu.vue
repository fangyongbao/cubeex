<template>
    <div class="f-ot m-menu view">
        <router-link :to="{ path:'/pull-refresh', activeClass:'current'}" class="item">
            <div class="slide">
                pull-up-refresh(上拉刷新/下拉加载)
            </div>
        </router-link>
        <router-link :to="{ path:'/address-book', activeClass:'current'}" class="item">
            <div class="slide">
                address-book(通讯录)
            </div>
        </router-link>
        <router-link :to="{ path:'/radio', activeClass:'current'}" class="item">
            <div class="slide">
                radio（单选框）
            </div>
        </router-link>
        <router-link :to="{ path:'/checkbox', activeClass:'current'}" class="item">
            <div class="slide">
                checkbox（复选框）
            </div>
        </router-link>
        <router-link :to="{ path:'/select', activeClass:'current'}" class="item">
            <div class="slide">
                select-drop(下拉框-下拉)
            </div>
        </router-link>
        <router-link :to="{ path:'/select-scroll', activeClass:'current'}" class="item">
            <div class="slide">
                select-scroll(下拉框-滚动)
            </div>
        </router-link>
        <router-link :to="{ path:'/area', activeClass:'current'}" class="item">
            <div class="slide">
                area-scroll(地区联动-滚动)
            </div>
        </router-link>
        <router-link :to="{ path:'/datetime', activeClass:'current'}" class="item">
            <div class="slide">
                datetime(时间联动-滚动)
            </div>
        </router-link>
        <router-link :to="{ path:'/dialog', activeClass:'current'}" class="item">
            <div class="slide">
                dialog(弹窗)
            </div>
        </router-link>
        <router-link :to="{ path:'/scroll', activeClass:'current'}" class="item">
            <div class="slide">
                scroll
            </div>
        </router-link>
    </div>
</template>
<script>
export default {
    name: 'menu',
    data() {
        return {

        }
    },
    methods: {

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
    .slide {
        height: 60px;
        line-height: 60px;
        color: #fff;
        text-align: center;
        background: #385FB5;
        margin-top: 10px;
        font-size: 14px;
    }
    a {
        color: #fff;
        text-decoration: none;
    }
}
</style>
