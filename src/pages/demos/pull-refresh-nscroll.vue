<template>
    <div class="m-list view">
        <Header-com :title="'pull-refresh-nscroll'"></Header-com>
        <div class="f-ot content" ref="wrapper">
            <cubee-pull-refresh-n ref="pullRefreshEl" :usePullDown="true" :usePullUp="usePullUp" v-on:pullDownAction="pullDownAction" v-on:pullUpAction="pullUpAction">
                <div class="wrapperCon" ref="wrapperCon">
                    <div class="f-flex f-flexr item" v-for="item in matchList">
                        <div class="f-flex1 itemc">{{item.homeName}}</div>
                        <div class="f-flex1 itemc">{{item.awayName}}</div>
                    </div>
                </div>
            </cubee-pull-refresh-n>
        </div>
    </div>
</template>
<script>
import {
    CubeePullRefreshN
} from '../../components';
import HeaderCom from './header';
export default {
    name: 'pull-refresh-nscroll-demo',
    data() {
        return {
            matchList: [],
            wrapperHeight: 0,
            isLoading: false,
            usePullUp: true
        }
    },
    components: {
        HeaderCom,
        CubeePullRefreshN
    },
    methods: {
        refreshContainer() {
            let _this = this;
            let pullRefreshEl = _this.$refs.pullRefreshEl;
            pullRefreshEl.refresh();
            _this.wrapperHeight = document.documentElement.clientHeight - _this.$refs.wrapper.getBoundingClientRect().top;
            _this.$refs.wrapperCon.style.height = 'auto';
        },
        pullDownAction() {
            let _this = this;
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
                _this.matchList = data;
                _this.usePullUp = true;
                _this.refreshContainer();
                console.log('down');
            }, 400);
        },
        pullUpAction() {
            let _this = this;
            if (_this.isLoading) {
                return;
            }
            _this.isLoading = true;
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
                _this.matchList = _this.matchList.concat(data);
                _this.isLoading = false;
                _this.refreshContainer();
                console.log('up');
            }, 400);
        }
    },
    mounted() {
        let _this = this;
        _this.$refs.wrapperCon.style.height = _this.$refs.wrapper.clientHeight + 'px';
        _this.pullDownAction();
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
        background: #385FB5;
        font-size: 14px;
    }
    .itemC {
        line-height: 60px;
    }
    .content {
        height: 100%;
    }
    .wrapperCon {
        background-color: #FFF;
        height: 2000px;
    }
}
</style>
