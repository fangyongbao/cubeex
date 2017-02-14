<template>
    <div class="f-pr m-header">
        <div class="u-herder-btn u-back" @click="goBack" v-if="isGoBack"></div>
        <div class="u-header-title f-toe">{{title}}</div>
    </div>
</template>
<script>
import { mapActions } from 'vuex'
export default {
    name: 'header',
    data() {
        return {

        }
    },
    props: {
        title: {
            type: String,
            default: ''
        },
        isGoBack: {
            type: Boolean,
            default: true
        }
    },
    methods: {
        ...mapActions([
            'setDirection'
        ]),
        goBack() {
            // this.setDirection('reverse');
            this.$router.go(-1);
        }
    },
    created: function() {

    },
    mounted: function() {

    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
.m-header {
    width: 100%;
    height: 0.88rem;
    background-image: linear-gradient(-135deg, #354682 0%, #0459A9 100%);
    color: #fff;
    padding: 0.23 0.24rem;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;
    .u-herder-btn {
        width: 0.42rem;
        height: 0.42rem;
        position: absolute;
    }
    .u-back {
        top: 0.23rem;
        left: 0.24rem;
        background: url(../../assets/images/icon/icon-back.png) left center no-repeat;
        background-size: cover;
        z-index: 2;
    }
    .u-header-title {
        width: 100%;
        padding: 0 0.7rem;
        height: 26px;
        font-size: 18px;
        color: #FFFFFF;
        line-height: 26px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        -webkit-transform: translate(-50%,-50%);
        text-align: center;
        z-index: 1;
    }
}
</style>
