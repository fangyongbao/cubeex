<template>
    <div>
        <div class="m-cover m-rule" @click="closeRule()" v-show="ruleStatus"></div>
        <div class="m-dialog m-dialog-rule animated duration0-6 slideInDown" v-show="ruleStatus">
            <a href="javascript:void(0);" class="close-btn" @click="closeRule()"></a>
            <strong>活动规则</strong>
            <div class="text">
                <p><i>1</i>用户单笔充值满150元及以上，可免费获取一次抽奖资格，可多次参与。</p>
                <p><i>2</i>抽奖资格可累计，每次参加消耗1次。</p>
                <p><i>3</i>抵扣优惠券仅可适用于旺热英超理财计划产品，有效期30天（据领取时间开始计算），不与尊享专属折扣同享，且优先使用折扣。</p>
            </div>
        </div>
    </div>
</template>
<script>
import Vue from 'vue'
import {
    mapGetters,
    mapActions
} from 'vuex'

export default {
    computed: mapGetters({
        ruleStatus: 'getRuleStatus'
    }),

    methods: {
        closeRule: function() {
            this.$store.dispatch('setRuleStatus', false)
        }
    },

    mounted() {
        console.log('======RuleCom======');
        console.log(this);
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
.m-rule {
    z-index: 100;
}

.close-btn {
    width: 28px;
    height: 28px;
    position: absolute;
    right: -14px;
    top: -14px;
    background: url(../../../assets/images/close_btn.png) no-repeat;
    background-size: 100% auto;
}

.m-dialog-rule {
    width: 82%;
    min-height: 200px;
    border-radius: 8px;
    position: fixed;
    left: 50%;
    margin-left: -41%;
    top: 50%;
    margin-top: -100px;
    z-index: 101;
    background: #3e3258;
    strong {
        text-align: center;
        line-height: 28px;
        display: block;
        color: #ef7960;
        margin-top: 10px;
    }
    .text {
        padding: 10px;
        color: #fff;
        font-size: 14px;
        line-height: 24px;
        p {
            overflow: hidden;
            padding-left: 20px;
            i {
                text-align: center;
                width: 14px;
                line-height: 14px;
                height: 14px;
                background: #f6ee1a;
                color: #000;
                float: left;
                margin-left: -20px;
                border-radius: 5px;
                font-size: 8px;
                margin-top: 5px;
            }
        }
    }
}
</style>
