<template>
    <div class="content">
        <cubee-dialog :close="close" :title="title" :content="content" :button="button" :isDiaShow="isDiaShow" v-on:closeDiaAfter="closeDiaAfter">
        </cubee-dialog>
    </div>
</template>
<script>
import {
    CubeeDialog
} from '../../components';
export default {
    name: 'dialog-demo',
    data() {
        return {
            title: "testestffasfsdaf123gdgfdg342354235235235",
            content: "布里斯班以逸待劳，反击或是制胜法宝；墨尔本城受大财团资助，人员实力大幅提升，但团队磨合不够。布里斯班以逸待劳，反击或是制胜法宝；墨尔本城受大财团资助，人员实力大幅提升，",
            button: ["确定", "取消"],
            close: true
        }
    },
    components: {
        CubeeDialog
    },
    methods: {
        closeDiaAfter(){
            console.log("已关闭弹窗")
        }
    },
    mounted() {
        console.log(this.isDiaShow);
    }
}
</script>
<style lang="sass" scoped>
.btn {
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
</style>
