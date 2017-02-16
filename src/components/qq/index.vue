<template>
    <div class="u-qq">
<<<<<<< HEAD
        <a class="link" @click="callQq()"></a>
=======
        <span class="link" @click="callQq()">qq咨询</span>
>>>>>>> upstream/master
    </div>
</template>
<script>
export default {
    name: 'qq',
    data() {
        return {};
    },
    props: {
        account: Number
    },
    methods: {
        callQq() {
            window.open(
                'http://wpa.b.qq.com/cgi/wpa.php?ln=2&uin=' + this.account,
                '_blank',
                'height = 544, width = 644, toolbar = no, scrollbars = no, menubar = no, status = no'
            );
        }
    }
}
</script>
<style lang="sass" scoped>
.u-qq {
    position: fixed;
    right: 20px;
    bottom: 20px;
    width: 1rem;
    height: 1rem;
    padding: 0.29rem 0.32rem;
    text-align: center;
    border-radius: 100%;
    opacity: 0.5;
    background: #000D1A;
    font-size: 14px;
    a {
        display: block;
        width: 100%;
        height: 100%;
        background: url(./qq.png) center no-repeat;
        background-size: 100% 100%;
    }
}
</style>
