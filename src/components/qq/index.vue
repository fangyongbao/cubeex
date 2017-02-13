<template>
    <div class="u-qq">
        <a class="link" @click="callQq()">qq咨询</a>
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
                'http://wpa.b.qq.com/cgi/wpa.php?ln=2&amp;uin=' + this.account,
                '_blank',
                'height = 544, width = 644, toolbar = no, scrollbars = no, menubar = no, status = no '
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
    width: 60px;
    height: 60px;
    text-align: center;
    line-height: 60px;
    border-radius: 100%;
    border: 1px solid #e0e0e0;
    font-size: 14px;
}
</style>
