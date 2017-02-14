<template>
    <div class="m-qrcode-demo view f-ot">
        <Header-com :title="'qrcode'"></Header-com>
        <div class="code">
            <cubee-qrcode ref="qrcodeDemo1" :code-url="codeUrl" :code-config="codeConfig" class="qrcodeItem"></cubee-qrcode>
        </div>
        
        <div class="u-button" @click="changeCode">更新二维码</div class="u-button">
        <cubee-tab :which-tab="2"></cubee-tab>
    </div>
</template>
<script>
import HeaderCom from './header';
import {
    CubeeQrcode,CubeeTab
} from '../../components';

export default {
    name: 'qrcode-demo',
    data() {
        return {
            codeUrl: '',
            codeConfig: {
                colorDark : "#fff",
                colorLight: '#000'
            }
        }
    },
    components: {
        HeaderCom,
        CubeeQrcode,
        CubeeTab
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
        padding-bottom: 1rem;
        .code {
            padding: 0.6rem 0;
            background-color: #FFF;
            .qrcodeItem {
                margin: 0 auto;
                width: 4.17rem;
            }
        }
        .u-button{
            height: 0.8rem;
            line-height: 0.8rem;
            margin: 0.6rem 0.24rem 0;

        }
        .u-button:active {
            background: darken(#358AD6,10%);
        }
    }
    
</style>
