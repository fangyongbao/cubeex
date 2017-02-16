<template>
    <div class="m-dislog view">
        <Header-com :title="'dialog'"></Header-com>
        <div class="content">
            <div class="u-button" @click="openDia1">
                带标题关闭按钮有确认取消按纽
            </div>
            <div class="u-button" @click="openDia2">
                带标题有确认取消按纽
            </div>
            <div class="u-button" @click="openDia3">
                带标题单个按钮
            </div>
            <div class="u-button" @click="openDia4">
                无标题单个按钮
            </div>
        </div>
        <cubee-dialog :dialog-config="dialogConfig1" @left-btn="cancel1" @right-btn="sure1" @close-dia="closeDia"></cubee-dialog>
        <cubee-dialog :dialog-config="dialogConfig2" @left-btn="cancel1" @right-btn="sure1"></cubee-dialog>
        <cubee-dialog :dialog-config="dialogConfig3" @left-btn="cancel1"></cubee-dialog>
        <cubee-dialog :dialog-config="dialogConfig4" @left-btn="cancel1"></cubee-dialog>
        <cubee-tab :which-tab="2"></cubee-tab>
    </div>
</template>
<script>
import HeaderCom from './header';
import {
    CubeeDialog,CubeeTab
} from '../../components';
export default {
    name: 'dialog-demo',
    data() {
        return {
            dialogConfig1: {
                hasClose: true,
                title: '提示',
                content: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容',
                button: ['取消','确定'],
                isDiaShow: false
            },
            dialogConfig2: {
                hasClose: false,
                title: '提示',
                content: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容',
                button: ['取消','确定'],
                isDiaShow: false
            },
            dialogConfig3: {
                hasClose: false,
                title: '提示',
                content: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容',
                button: ['确定'],
                isDiaShow: false
            },
            dialogConfig4: {
                hasClose: false,
                title: '',
                content: '内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容内容容',
                button: ['确定'],
                isDiaShow: false
            }
        }
    },
    components: {
        HeaderCom,
        CubeeDialog,
        CubeeTab
    },
    methods: {
        openDia1(){
            this.dialogConfig1.isDiaShow = true;
        },
        openDia2(){
            this.dialogConfig2.isDiaShow = true;
        },
        openDia3() {
            this.dialogConfig3.isDiaShow = true;
        },
        openDia4() {
            this.dialogConfig4.isDiaShow = true;
        },
        cancel1() {
            this.dialogConfig1.isDiaShow = false;
            this.dialogConfig2.isDiaShow = false;
            this.dialogConfig3.isDiaShow = false;
            this.dialogConfig4.isDiaShow = false;
        },
        sure1() {
            console.log("确定1");
            this.dialogConfig1.isDiaShow = false;
            this.dialogConfig2.isDiaShow = false;
        },
        closeDia() {
            this.dialogConfig2.isDiaShow = false;
        }
    },
    mounted() {

    }
}
</script>
<style lang="sass" scoped>

.m-dislog {
    padding-bottom: 1rem;
    .content {
        width: 100%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
        -webkit-transform: translate(-50%,-50%);
        .u-button {
            height: 0.8rem;
            line-height: 0.8rem;
            text-align: center;
            margin: 0 0.2rem 0.2rem;
        }
    }

    .btn{
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        background-color: #ffffff;
        border-radius: 25px;
        color: #28a0f2;
        display: inline-block;
        font-size: 16px;
        height: 40px;
        line-height: 40px;
        overflow: hidden;
        padding: 0 20px;
        position: relative;
        text-align: center;
        text-decoration: none;
        vertical-align: middle;
        border: 1px solid #28a0f2;
        border-radius: 50px;
        cursor: pointer;
    }
}
</style>
