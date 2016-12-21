<template>
    <div class="m-menu view">
        <div class="wrapper">
            <div class="scroller">
                <div class="slide">
                    <router-link :to="{ path:'/pull-refresh', activeClass:'current'}" class="item">pull-up-refresh</router-link>
                </div>
                <!--                 <div class="slide">
                    <router-link :to="{ path:'/radio', exact: true, activeClass:'current'}" replace class="item">radio</router-link>
                </div> -->
                <div class="slide">
                    <router-link :to="{ path:'/checkbox', activeClass:'current'}" class="item">checkbox</router-link>
                </div>
            </div>
        </div>
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
        background: gray;
        margin-top: 10px;
        font-size: 14px;
        a {
            color: #fff;
            text-decoration: none;
        }
    }
}
</style>
