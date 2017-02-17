<template>
    <div class="m-previewer view">
        <Header-com :title="'previewer'"></Header-com>
        <div class="f-ot content">
            <ul class="imgList">
                <li v-for="(item, index) in list" class="f-fl">
                    <img class="previewer-demo-img"  :src="item.src" @click="show(index)">
                </li>
            </ul>
        </div>
        
        
        <cubee-previewer :list="list" ref="previewer" :options="options"></cubee-previewer>
        <cubee-tab :which-tab="2"></cubee-tab>
    </div>
</template>

<script>
import HeaderCom from './header';
import { CubeePreviewer, CubeeTab } from '../../components'

export default {
    components: {
        HeaderCom,
        CubeePreviewer,
        CubeeTab
    },
    methods: {
        show (index) {
            this.$refs.previewer.show(index)
        }
    },
    data () {
        return {
            list: [{
                src: 'https://placekitten.com/800/400',
                w: 600,
                h: 400
            },
            {
                src: 'https://placekitten.com/1200/900',
                w: 1200,
                h: 900
            }],
            options: {
                getThumbBoundsFn (index) {
                    // find thumbnail element
                    let thumbnail = document.querySelectorAll('.previewer-demo-img')[index]
                    // get window scroll Y
                    let pageYScroll = window.pageYOffset || document.documentElement.scrollTop
                    // optionally get horizontal scroll
                    // get position of element relative to viewport
                    let rect = thumbnail.getBoundingClientRect()
                    // w = width
                    return {x: rect.left, y: rect.top + pageYScroll, w: rect.width}
                    // Good guide on how to get element coordinates:
                    // http://javascript.info/tutorial/coordinates
                }
            }
        }
    }
}
</script>
<style lang="sass" scoped>
    .m-previewer {
        padding-bottom: 1rem;
        .content {
            height: 100%;
        }
        .imgList {
            padding: 0 0.1rem;
            background-color: #FFF;
            li {
                padding: 0.2rem 0.1rem 0;
                width: 33.3%;
                overflow: hidden;
                img {
                    width: 100%;
                    float: left;
                }
            }
        }
    }
</style>