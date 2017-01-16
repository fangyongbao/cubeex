<template>
    <div class="m-address-book">
        <div class="f-ot book-content" ref="content">
            <div class="item" v-for="(g, initial) in books">
                <div class="title" :ref="initial">{{initial}}</div>
                <ul>
                    <li v-for="item in g">
                        <div class="wrap">{{item.value}}</div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="f-flex f-flexvc book-bar" @touchstart="handleTouchStart">
            <ul>
                <li v-for="(g, initial) in books" class="initialLi">{{initial}}</li>
            </ul>
        </div>
    </div>
</template>
<script>
import {
    mapActions
} from 'vuex';
export default {
    name: 'address-book',
    data() {
        return {
            books: {},
            moving: false
        }
    },
    props:{
        names:{
            type: Array,
            request: true
        }
    },
    methods: {
        handleTouchStart(e) {
            this.scrollList(e.changedTouches[0].clientX, e.changedTouches[0].clientY);
            document.addEventListener('touchmove', this.handleTouchMove);
            document.addEventListener('touchend', this.handleTouchEnd);
        },

        handleTouchMove(e) {
            e.preventDefault();
            this.scrollList(e.changedTouches[0].clientX, e.changedTouches[0].clientY);
        },

        handleTouchEnd() {
            document.removeEventListener('touchmove', this.handleTouchMove);
            document.removeEventListener('touchend', this.handleTouchEnd);
        },

        scrollList(x, y) {
            console.log(x + "," + y);
            let _this = this;
            let currentItem = document.elementFromPoint(x, y);
            if (currentItem.classList.contains('initialLi')) {
                let indicator = currentItem.innerText;
                let $el = _this.$refs[indicator];
                if ($el) {
                    let t = $el[0].getBoundingClientRect().top;
                    let t1 = _this.$refs['A'][0].getBoundingClientRect().top;
                    let d = t - t1;
                    this.$refs.content.scrollTop = d;
                }
            }
        }
    },
    created() {
        let _this = this;
        let names = _this.names;
        let letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        letters.split("").forEach(initial => {
            let g = names.filter(item => {
                return item.value[0] === initial;
            });
            this.books[initial] = g;
        });
    }
}
</script>
<style lang="sass" scoped>
@mixin background-portrait ($topbg, $bottombg) {
    background: -moz-linear-gradient(top, $topbg, $bottombg);
    background: -webkit-gradient(linear, 50% 0, 50% 100%, from($topbg), to($bottombg));
    background: -webkit-linear-gradient(top, $topbg, $bottombg);
    background: -o-linear-gradient(top, $topbg, $bottombg);
}

.m-address-book {
    padding-right: 40px;
    height: 100%;
    .book-content {
        height: 100%;
        .item {
            .title {
                line-height: 30px;
                background: #fafafa;
                padding: 0 10px;
            }
        }
        ul li {
            .wrap {
                line-height: 40px;
                @include background-portrait(#d9d9d9, #d9d9d9);
                background-size: 120% 1px;
                background-repeat: no-repeat;
                background-position: top left;
                padding: 0 10px;
                background-origin: content-box;
            }
            &:first-child {
                .wrap {
                    background-origin: border-box;
                }
            }
            &:last-child {
                @include background-portrait(#d9d9d9, #d9d9d9);
                background-size: 120% 1px;
                background-repeat: no-repeat;
                background-position: bottom left;
            }
        }
    }
    .book-bar {
        width: 40px;
        height: 100%;
        position: absolute;
        right: 0;
        top: 0;
        border: 1px solid #d9d9d9;
        ul {
            width: 100%;
            text-align: center;
            li {
                font-size: 12px;
                line-height: 1.5;
            }
        }
    }
}
</style>
