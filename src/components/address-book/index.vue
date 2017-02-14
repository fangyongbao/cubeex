<template>
    <div class="m-address-book f-pr">
        <div class="f-ot book-content" ref="content">
            <div class="item" v-for="(g, initial) in books">
                <div class="title" :ref="initial">{{initial}}</div>
                <ul class="f-cb">
                    <li v-for="item in g" class="f-fl">
                        <div class="wrap f-toe">{{item.value}}</div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="f-flex f-flexvc book-bar" @touchstart="handleTouchStart">
            <ul>
                <li v-for="(g, initial) in books" class="initialLi f-flex f-flexvc f-flextc">{{initial}}</li>
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
    font-size: 14px;
    height: 100%;
    .book-content {
        height: 100%;
        .item {
            .title {
                line-height: 0.76rem;
                background: #F8F9FA;
                padding: 0 0.24rem;
                box-shadow: inset 0 -1px 0 0 #E6E6E6;
            }
        }
        ul {
            width: 100%;
            padding: 0 0.15rem;
            background-color: #FFF;
            margin-bottom: 0.2rem;
            li {
                width: 33.3%;
                padding: 0.2rem 0.15rem;
                .wrap {
                    width: 100%;
                    padding: 0 0.15rem;
                    border: 1px solid #E6E6E6;
                    border-radius: 0.25rem;
                    line-height: 0.5rem;
                    height: 0.5rem;
                    text-align: center;
                    color: #9099b4;
                }
                .wrap:active {
                    background: darken(#FFF,10%);
                }
            }
        }
    }
    .item:nth-last-of-type(1) {
        ul {
            margin-bottom: 0;
        }    
    }
    .book-bar {
        width: 0.8rem;
        height: 100%;
        position: absolute;
        right: 0;
        top: 0;
        // border: 1px solid #d9d9d9;
        padding: 0.5rem 0;
        ul {
            width: 100%;
            height: 100%;
            text-align: center;
            li {
                font-size: 14px;
                color: #596380;
                height: 3.846%;
            }
        }
    }
}
</style>
