<template>
    <div class="m-list view">
        <Header-com></Header-com>
        <div class="content">
            <pull-refresh ref="pullRefreshEl" :usePullDown="true" :usePullUp="true" v-on:pullDownAction="pullDownAction" v-on:pullUpAction="pullUpAction">
                <div class="f-flex f-flexr item" v-for="item in matchList">
                    <div class="f-flex1 itemc">{{item.homeName}}</div>
                    <div class="f-flex1 itemc">{{item.awayName}}</div>
                </div>
            </pull-refresh>
        </div>
    </div>
</template>
<script>
import {
    PullRefresh
} from '../../components';
import HeaderCom from './header';
export default {
    name: 'pull-refresh-demo',
    data() {
        return {
            matchList: []
        }
    },
    components: {
        PullRefresh,
        HeaderCom
    },
    methods: {
        refreshScrollHeight() {
            let that = this;
            let pullRefreshEl = that.$refs.pullRefreshEl;
            pullRefreshEl.$nextTick(function() {
                setTimeout(() => {
                    pullRefreshEl.refresh();
                }, 50)
            })
        },
        pullDownAction() {
            let that = this;
            let data = [{
                matchId: 1,
                homeName: '皇马1',
                awayName: '巴萨1'
            }, {
                matchId: 2,
                homeName: '皇马1',
                awayName: '巴萨1'
            }, {
                matchId: 3,
                homeName: '皇马1',
                awayName: '巴萨1'
            }, {
                matchId: 4,
                homeName: '皇马1',
                awayName: '巴萨1'
            }, {
                matchId: 1,
                homeName: '皇马1',
                awayName: '巴萨1'
            }, {
                matchId: 2,
                homeName: '皇马1',
                awayName: '巴萨1'
            }, {
                matchId: 3,
                homeName: '皇马1',
                awayName: '巴萨1'
            }, {
                matchId: 4,
                homeName: '皇马1',
                awayName: '巴萨1'
            }, {
                matchId: 1,
                homeName: '皇马1',
                awayName: '巴萨1'
            }, {
                matchId: 2,
                homeName: '皇马1',
                awayName: '巴萨1'
            }, {
                matchId: 3,
                homeName: '皇马1',
                awayName: '巴萨1'
            }, {
                matchId: 4,
                homeName: '皇马1',
                awayName: '巴萨1'
            }, {
                matchId: 1,
                homeName: '皇马1',
                awayName: '巴萨1'
            }, {
                matchId: 2,
                homeName: '皇马1',
                awayName: '巴萨1'
            }, {
                matchId: 3,
                homeName: '皇马1',
                awayName: '巴萨1'
            }, {
                matchId: 4,
                homeName: '皇马1',
                awayName: '巴萨1'
            }];
            setTimeout(() => {
                that.matchList = data;
                that.refreshScrollHeight();
                console.log('down');
            }, 400);
        },
        pullUpAction() {
            let that = this;
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
            }]
            setTimeout(() => {
                that.matchList = that.matchList.concat(data);
                that.refreshScrollHeight();
                console.log('up');
            }, 400);
        }
    },
    mounted() {
        let that = this;
        that.pullDownAction();
    }
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
        background: gray;
        font-size: 14px;
    }
    .itemC {
        line-height: 60px;
    }
    .content {
        position: absolute;
        left: 0;
        width: 100%;
        top: 40px;
        bottom: 0;
    }
}
</style>
