<template>
    <div class="m-shop">
         <div id="wrapper">
            <div id="scroller">
                shop
            </div>
        </div>
    </div>
</template>
<script>
import Iscroll from 'iscroll'
import $ from 'jquery'

export default {
    data() {
        return {
            viewName: 'shopCom'
        }
    },

    methods: {
    },

    mounted: function(){
        console.log(this.$route);
    },
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
.m-shop {
    height: 100%; overflow:hidden; background-color: #fff;
    #wrapper{height:100%;}
    .titleP{
        height: 0.76rem; font-size:0.28rem; line-height:0.76rem;background:#fafafa;color: #596380;padding:0 10px;margin-top:10px;
    }
}
</style>