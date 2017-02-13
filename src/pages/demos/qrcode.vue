<template>
    <div class="m-qrcode-demo view">
        <Header-com></Header-com>
        <cubee-qrcode ref="qrcodeDemo1" :code-url="codeUrl" :code-config="codeConfig"></cubee-qrcode>
        <button @click="changeCode">更新二维码</button>
    </div>
</template>
<script>
import HeaderCom from './header';
import {
    CubeeQrcode
} from '../../components';

export default {
    name: 'qrcode-demo',
    data() {
        return {
            codeUrl: '',
            codeConfig: {
                colorDark : "red",
                colorLight: 'blue'
            }
        }
    },
    components: {
        HeaderCom,
        CubeeQrcode
    },
    methods: {
        changeCode() {
            // this.codeUrl = 'http://www.baidu.com?t=sss'
            this.codeConfig = {

            }
        }
    },
    mounted() {
        this.$nextTick(function () {
            this.codeUrl = 'http://www.baidu.com'
        })
    }
};
</script>
<style lang="sass" scoped>
    .m-qrcode-demo{
        overflow: scroll;
        -webkit-overflow-scrolling: touch;
    }
</style>
