<template>
    <div class="m-list view">
        <Header-com :title="'pull-refresh-xscroll'"></Header-com>
        <div class="content">
            <cubee-pull-refresh-x ref="pullRefreshEl" :is-pull-down="isPullDown" :is-pull-up="isPullUp" v-on:on-pulldown="pullDownAction" v-on:on-pullup="pullUpAction" class="scrollCon">
                <div class="f-flex f-flexr item" v-for="item in matchList">
                    <div class="f-flex1 itemc">{{item.homeName}}</div>
                    <div class="f-flex1 itemc">{{item.awayName}}</div>
                </div>
            </cubee-pull-refresh-x>
        </div>
    </div>
</template>
<script>
import {
    CubeePullRefreshX
} from '../../components';
import HeaderCom from './header';
export default {
    name: 'pull-refresh-scroll-demo',
    data() {
        return {
            matchList: [],
            page: 1,
            allDataLength: 20,
            scrollDom: null,
            isPullDown: true,
            isPullUp: true
        }
    },
    components: {
        HeaderCom,
        CubeePullRefreshX
    },
    methods: {
        getData(finishCb) {
            let _this = this;
            let data = [{
                matchId: 1,
                homeName: '皇马',
                awayName: '巴萨'
            }, {
                matchId: 2,
                homeName: '皇马',
                awayName: '巴萨'
            }, {
                matchId: 3,
                homeName: '皇马',
                awayName: '巴萨'
            }, {
                matchId: 4,
                homeName: '皇马',
                awayName: '巴萨'
            }, {
                matchId: 5,
                homeName: '皇马',
                awayName: '巴萨'
            }, {
                matchId: 6,
                homeName: '皇马',
                awayName: '巴萨'
            },{
                matchId: 1,
                homeName: '皇马',
                awayName: '巴萨'
            }, {
                matchId: 2,
                homeName: '皇马',
                awayName: '巴萨'
            }, {
                matchId: 3,
                homeName: '皇马',
                awayName: '巴萨'
            }, {
                matchId: 4,
                homeName: '皇马',
                awayName: '巴萨'
            }, {
                matchId: 5,
                homeName: '皇马',
                awayName: '巴萨'
            }, {
                matchId: 6,
                homeName: '皇马',
                awayName: '巴萨'
            }]
            setTimeout(() => {
                this.matchList = this.matchList.concat(data);

                if (this.matchList.length < this.allDataLength) {
                    this.isPullUp = true;
                } else {
                    this.isPullUp = false;
                }
                _this.scrollDom.$nextTick(function() {
                    if (finishCb) {
                        finishCb();
                        if (_this.isPullUp) {
                            _this.scrollDom.loadRestart();
                        } else {
                            _this.scrollDom.loadMoreOver();
                        }
                    } else {
                        if (_this.isPullUp) {
                            _this.scrollDom.loadMore();
                        } else {
                            _this.scrollDom.loadMoreOver();
                        }
                    }
                })
            }, 400)

        },
        pullDownAction(finishCb) {
            this.page = 1;
            this.matchList = [];
            this.getData(this.scrollDom.refresh)
        },
        pullUpAction() {
            this.page++;
            this.getData();
        }
    },
    mounted() {
        this.$nextTick(function() {
            this.scrollDom = this.$refs.pullRefreshEl;
            this.getData();
        })
    }
}
</script>
<style lang="sass" scoped>
.m-list {
    .item {
        margin-bottom: 10px;
        text-align: center;
        height: 60px;
        line-height: 60px;
        color: #fff;
        background: #C4D4DF;
        font-size: 14px;
    }
    .itemC {
        line-height: 60px;
    }
    .content {
        height: 100%;
        .scrollCon {
            width: 100%;
            height: 100%;
        }
    }
}
</style>
