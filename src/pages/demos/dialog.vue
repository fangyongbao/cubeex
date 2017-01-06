<template>
    <div class="content">

    <div class="m-list view">
        <Header-com></Header-com>
        <div class="content">
            <div class="btn" @click="openDia">
                带标题关闭按钮有确认取消按纽
            </div>
            <cubee-dialog :dialogId="dialogId"  :close="close" :title="title" :content="content" :button="button" :isDiaShow="isDiaShow" v-on:closeDiaAfter="closeDiaAfter">
            </cubee-dialog>
            <!-- <div class="btn" @click="openDia1">
                带关闭按钮有确认按纽
            </div>
            <cubee-dialog :dialogId="dialogId1"  :close="close" :title="title1" :content="content" :button="button" :isDiaShow="isDiaShow1">
            </cubee-dialog> -->
            <!-- <dia-exam :isDiaShow="isDiaShow"></dia-exam> -->
            <!-- <div class="btn" @click="openDia1">
                带标题有确认按纽
            </div>
            <dia-exam1 :isDiaShow="isDiaShow"></dia-exam1> -->
        </div>
    </div>
</template>
<script>
import HeaderCom from './header';
import {
    CubeeDialog
} from '../../components';
export default {
    name: 'dialog-demo',
    data() {
        return {
            title:"testestffasfsdaf123gdgfdg342354235235235",
            title1:'',
            content:"布里斯班以逸待劳，反击或是制胜法宝；墨尔本城受大财团资助，人员实力大幅提升，但团队磨合不够。布里斯班以逸待劳，反击或是制胜法宝；墨尔本城受大财团资助，人员实力大幅提升，",
            button:["确定","取消"],
            button1:["确定"],
            close:true,
            isDiaShow:false,
            isDiaShow1:false,
            dialogId:"dia1",
            dialogId1:"dia2"
        }
    },
    components: {
        HeaderCom,
        CubeeDialog
    },
    methods: {
        closeDiaAfter(){
            console.log("已关闭弹窗")
        },
        openDia(){
            this.isDiaShow=true;
        },
        openDia1(){
            this.isDiaShow1=true;
        }
    },
}
</script>
<style lang="sass" scoped>

.m-list {
    .item {
        margin-top: 10px;
        text-align: center;
        height: 60px;
        line-height: 60px;
        color: #fff;
        background: #385FB5;
        font-size: 14px;
    }
    .item:nth-of-type(1) {
        margin: 0;
    }
    .itemC {
        line-height: 60px;
    }
    .content {
        
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
