<template>
    <div class="m-list view">
        <Header-com></Header-com>
        <div class="content">
            <cubee-pull-refresh ref="pullRefreshEl" :usePullDown="true" :usePullUp="true" v-on:pullDownAction="pullDownAction" v-on:pullUpAction="pullUpAction">
                <div class="f-flex f-flexr item" v-for="item in matchList">
                    <div class="f-flex1 itemc">{{item.homeName}}</div>
                    <div class="f-flex1 itemc">{{item.awayName}}</div>
                </div>
            </cubee-pull-refresh>
        </div>
    </div>
</template>
<script>
import {
    CubeePullRefresh
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
        HeaderCom,
        CubeePullRefresh
    },
    methods: {
        scrollInit() {
            console.log('init');
            let pullRefreshEl = this.$refs.pullRefreshEl;
            pullRefreshEl.$nextTick(function() {
                setTimeout(() => {
                    pullRefreshEl._init();
                }, 50)
            })
        },
        pullDownAction() {
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
            }];

            setTimeout(() => {
                this.matchList = this.matchList.concat(data);
                this.$refs.pullRefreshEl.refresh();
                //console.log('down');
            }, 400);
        },
        pullUpAction() {
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
                this.matchList = this.matchList.concat(data);
            }, 400);
        },
        getData() {
            let data = [{
                matchId: 1,
                homeName: '皇马2',
                awayName: '巴萨2'
            }, {
                matchId: 2,
                homeName: '皇马2',
                awayName: '巴萨2'
            }, {
                matchId: 3,
                homeName: '皇马2',
                awayName: '巴萨2'
            }, {
                matchId: 4,
                homeName: '皇马2',
                awayName: '巴萨2'
            },{
                matchId: 1,
                homeName: '皇马2',
                awayName: '巴萨2'
            }, {
                matchId: 2,
                homeName: '皇马2',
                awayName: '巴萨2'
            }, {
                matchId: 3,
                homeName: '皇马2',
                awayName: '巴萨2'
            }, {
                matchId: 4,
                homeName: '皇马2',
                awayName: '巴萨2'
            },{
                matchId: 1,
                homeName: '皇马2',
                awayName: '巴萨2'
            }, {
                matchId: 2,
                homeName: '皇马2',
                awayName: '巴萨2'
            }, {
                matchId: 3,
                homeName: '皇马2',
                awayName: '巴萨2'
            }, {
                matchId: 4,
                homeName: '皇马2',
                awayName: '巴萨2'
            }];
            setTimeout(() => {
                this.matchList = data;
                this.scrollInit();
            }, 400);
        }
    },
    mounted() {
        this.getData();
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
        position: absolute;
        left: 0;
        width: 100%;
        top: 40px;
        bottom: 0;
    }
}
</style>
