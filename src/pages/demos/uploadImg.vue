<template>
    <div class="m-uploadImg-demo view">
        <Header-com :title="'uploadImg'" :right-btn="rightBtnInfo" @right-btn="submit"></Header-com>
        <div class="f-ot content">
            <div class="text f-cb">
                <input type="text" placeholder="标题" v-model="imgTitle">
                <textarea placeholder="请输入内容" v-model="imgCon"></textarea>
                <ul class="imgList f-cb">
                    <li class="imgItem f-pr uploadImg-previewer" v-for="(item, $index) in loadImgs" :style="{ 'background' : 'url(' + item.src + ') top center no-repeat', 'background-size' : 'contain' }" @click="show($index)">
                        <i class="remove" @click.stop="removeImg($index)"></i>
                    </li>
                    <li class="imgItem uploadIcon">
                        <cubee-upload-img @loadend="loadend"></cubee-upload-img>
                    </li>
                </ul>
            </div>
        </div>
        <cubee-previewer :list="loadImgs" ref="previewer" :options="options"></cubee-previewer>
        <cubee-tab :which-tab="2"></cubee-tab>
    </div>
</template>

<script>
import HeaderCom from './header';
import { CubeeUploadImg, CubeeTab, CubeePreviewer } from '../../components'

export default {
    components: {
        HeaderCom,
        CubeeUploadImg,
        CubeeTab,
        CubeePreviewer
    },
    methods: {
        removeImg(index) {
            this.loadImgs.splice(index,1);
        },
        loadend() {
            console.log(this.loadImgs)
        },
        show (index) {
            this.$refs.previewer.show(index)
        },
        submit() {
            console.log(this.imgTitle, this.imgCon, this.loadImgs)
        }
    },
    data () {
        return {
            loadImgs: [],
            options: {
                getThumbBoundsFn (index) {
                    // find thumbnail element
                    let thumbnail = document.querySelectorAll('.uploadImg-previewer')[index]
                    // get window scroll Y
                    let pageYScroll = window.pageYOffset || document.documentElement.scrollTop
                    // optionally get horizontal scroll
                    // get position of element relative to viewport
                    let rect = thumbnail.getBoundingClientRect()
                    // w = width
                    console.log({x: rect.left, y: rect.top + pageYScroll, w: rect.width})
                    return {x: rect.left, y: rect.top + pageYScroll, w: rect.width}
                    // Good guide on how to get element coordinates:
                    // http://javascript.info/tutorial/coordinates
                }
            },
            rightBtnInfo: {
                bgImg: '',
                text: "上传",
                isHas: true
            },
            imgTitle: "",
            imgCon: ""
        }
    }
}
</script>
<style lang="sass" scoped>
    .m-uploadImg-demo {
        padding-bottom: 1rem;
        font-size: 12px;
        .content {
            height: 100%;
            .text {
                width: 100%;
                padding: 0.2rem;
                background-color: #FFF;
                input {
                    width: 100%;
                    height: 0.6rem;
                    padding: 0 0.12rem;
                    background: #F7F9FB;
                    border: 1px solid #E6E6E6;
                    border-radius: 2px;
                    margin-bottom: 0.2rem;
                }
                textarea {
                    width: 100%;
                    padding: 0.16rem 0.14rem;
                    background: #F7F9FB;
                    border: 1px solid #E6E6E6;
                    border-radius: 2px;
                    height: 2.2rem;
                    resize: none;
                    display: block;
                }
                .imgList {
                    padding: 0.4rem 0 0;
                    width: 100%;
                    .imgItem {
                        width: 1.2rem;
                        height: 1.2rem;
                        float: left;
                        margin-right: 0.2rem;
                        margin-bottom: 0.2rem;
                        img {
                            width: 100%;
                            height: 100%;
                        }
                        .remove {
                            width: 10px;
                            height: 10px;
                            background: rgba(0,0,0,0.6) url(../../assets/images/icon/icon-remove.png) center no-repeat;
                            background-size: 6px 6px;
                            position: absolute;
                            border-radius: 100%;
                            top: 0;
                            right: 0;
                            transform: translate(50%,-50%);
                            -webkit-transform: translate(50%,-50%);
                        }
                    }
                    .uploadIcon {
                        border: 1px dashed #358AD6;
                        border-radius: 2px;
                        position: relative;
                        label {
                            width: 100%;
                            height: 100%;
                            display: block;
                            position: relative;
                            z-index: 10;
                        }
                    }
                    .uploadIcon:after {
                        width: 0.54rem;
                        height: 0.06rem;
                        background: #609ED6;
                        content: "";
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%,-50%);
                        -webkit-transform: translate(-50%,-50%);
                    }
                    .uploadIcon:before {
                        width: 0.54rem;
                        height: 0.06rem;
                        background: #609ED6;
                        content: "";
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%,-50%) rotateZ(90deg);
                        -webkit-transform: translate(-50%,-50%) rotateZ(90deg);
                    }
                }
            }
        }
       
    }
</style>