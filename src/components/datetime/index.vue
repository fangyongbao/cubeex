<template>
    <div class="ProvCityBoxWarp">
        <div class="animated duration0-4 fadeIn ProvCityBoxBg" @click="close" v-show="show" @touchmove="_stopDef" @mousewheel="_stopDef"></div>
        <div class="animated duration0-2 linear slideInUp ProvCityBox" v-show="show" @mousewheel="_stopDef">
            <div class="ProvCityHeader">
                <div class="ProvCityHeaderCancle" @click="close">{{cancel}}</div>
                {{title}}
                <div class="ProvCityHeaderConfirm" @click="submit">{{confirm}}</div>
            </div>
            <div class="f-flex f-flext ProvCityContent">
                <div class="f-flex1 f-tac f-oh ProvCityContentList">
                    <ul :class="{'province_dragging': yearState.dragging}" @touchstart="_onTouchStart('year', $event)" @mousedown="_onTouchStart('year', $event)" :style="{'transform' : 'translate3d(0,' + yearState.translateY + 'px, 0)'}">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li class="f-toe" v-for="(item, index) in yearState.length" :class="{
                                    'current': index === yearState.selectedId,
                                    'node1':  Math.abs(index - yearState.selectedId) == 1,
                                    'node2':  Math.abs(index - yearState.selectedId) == 2,
                                    'node3':  Math.abs(index - yearState.selectedId) >= 3
                                }">{{index+startYear}}</li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
                <div class="f-flex1 f-tac f-oh ProvCityContentList">
                    <ul :class="{'city_dragging': monthState.dragging}" @touchstart="_onTouchStart('month', $event)" @mousedown="_onTouchStart('month', $event)" :style="{'transform' : 'translate3d(0,' + monthState.translateY + 'px, 0)'}">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li class="f-toe" v-for="(item, index) in monthState.length"  :class="{
                                    'current': index === monthState.selectedId,
                                    'node1':  Math.abs(index - monthState.selectedId) == 1,
                                    'node2':  Math.abs(index - monthState.selectedId) == 2,
                                    'node3':  Math.abs(index - monthState.selectedId) >= 3
                            }">{{item}}</li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
                <div class="f-flex1 f-tac f-oh ProvCityContentList">
                    <ul :class="{'area_dragging': dayState.dragging}" @touchstart="_onTouchStart('day', $event)" @mousedown="_onTouchStart('day', $event)" :style="{'transform' : 'translate3d(0,' + dayState.translateY + 'px, 0)'}">
                        <li></li>
                        <li></li>
                        <li></li>
                        <li class="f-toe"  v-for="(item, index) in dayState.length" :class="{
                            'current': index.code === dayState.selectedId,
                            'node1':  Math.abs(index - dayState.selectedId) == 1,
                            'node2':  Math.abs(index - dayState.selectedId) == 2,
                            'node3':  Math.abs(index - dayState.selectedId) >= 3
                        }">{{item}}</li>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>
            </div>
            <hr class="ProvCitySelectedTop">
            <hr class="ProvCitySelectedBottom">
        </div>
    </div>
</template>
<script>
/**
 * datetime
 * @module components/datetime
 * @desc 日期滚动组件
 * @param bol show - 显示隐藏
 * @param obj defaultTime - 默认事件设置 如果没有设置,会有默认值(当前时间)
 * @param Number startYear - 开始的年份
 * @param Number yearRange - 时间范围
 * @param String title - 头部中间文字
 * @param String cancel - 头部左边文字
 * @param String confirm - 头部右边文字
 * @example
 * <cubee-dateTime :show="dateTimeStatus" :defaultTime="setTime" :startYear="1970" :yearRange="50"></cubee-dateTime>
 */
export default {
    data: function() {
        return {
            target: '',
            yearState: {
                selectedId: null,
                startPos: null,
                translateY: 0,
                startTranslateY: 0,
                dragging: false,
                length: null,
            },
            monthState: {
                selectedId: null,
                startPos: null,
                translateY: 0,
                startTranslateY: 0,
                dragging: false,
                length: 12,
            },
            dayState: {
                selectedId: null,
                startPos: null,
                translateY: 0,
                startTranslateY: 0,
                dragging: false,
                length: null,
            },
            delta: 0,
            slideHeight: null,
        }
    },
    methods: {
        reset() {
            this.yearState.length = this.yearRange;  
            this.slideHeight = document.querySelector(".ProvCityContentList").getElementsByTagName("li")[0].clientHeight;
            this.yearState.selectedId = this.defaultTime.year ? ( this.defaultTime.year - this.startYear) : (new Date().getFullYear() - this.startYear); //年
            this.monthState.selectedId = this.defaultTime.month ? this.defaultTime.month - 1 : (new Date().getMonth()); //月
            this.dayState.selectedId = this.defaultTime.day ? this.defaultTime.day - 1 : (new Date().getDate() - 1); //日
            this.getDays();
            this.yearState.translateY = -this.slideHeight * this.yearState.selectedId;
            this.monthState.translateY = -this.slideHeight * this.monthState.selectedId;
            this.dayState.translateY = -this.slideHeight * this.dayState.selectedId;
        },
        close() {
            this.$parent.dateTimeStatus = false;
        },
        submit() {
            var dateTimeResult = {
                'year': this.yearState.selectedId+this.startYear,
                'month': this.monthState.selectedId+1,
                'day': this.dayState.selectedId+1
            };
            this.$parent.setTime = dateTimeResult;
            this.$parent.dateTimeStatus = false;
            this.$parent.dateTimeResult = dateTimeResult.year + '.' + dateTimeResult.month + '.' + dateTimeResult.day;
        },
        getDays() {
            let dates = new Date(this.yearState.selectedId+this.startYear,this.monthState.selectedId+1,0).getDate();
            if(this.dayState.selectedId > dates - 1) {
                this.dayState.selectedId = dates - 1;
                this.dayState.translateY = -this.slideHeight * this.dayState.selectedId;
            }
            this.dayState.length = dates;
        },
        getSelectedData(index) {
            let target = this.target;
            let thisData = this[target + 'State'];
            thisData.selectedId = index;
            if (target === 'year' || target === "month") {
                this.getDays();
            }
        },
        setPage() {
            let target = this.target;
            let thisData = this[target + 'State'];
            let clientHeight = this.slideHeight;
            let total = thisData.length;
            let goPage = Math.round((thisData.translateY / clientHeight).toFixed(1));
            if (goPage > 0) {
                goPage = 0;
            }
            goPage = total - 1 >= Math.abs(goPage) ? goPage : -(total - 1);
            let index = Math.abs(goPage);
            this.getSelectedData(index);
            thisData.translateY = goPage * clientHeight;
            console.log(this.yearState.selectedId+this.startYear,this.monthState.selectedId+1,this.dayState.selectedId+1);
        },
        _getTouchPos(e) {
            return e.changedTouches ? e.changedTouches[0]['pageY'] : e['pageY'];
        },
        _getElem(e) {
            // console.log(e.currentTarget.children);
            // console.log(Array.from(e.currentTarget.children).slice(3, -3));
            return Array.from(e.currentTarget.children).slice(3, -3);
        },
        _onTouchStart(target, e) {
            
            let thisData = this[target + 'State'];
            this.target = target;
            // this.slideEls = this._getElem(e);
            this.delta = 0;
            thisData.startPos = this._getTouchPos(e);
            thisData.startTranslateY = thisData.translateY;
            thisData.dragging = true;
            document.addEventListener('touchmove', this._onTouchMove, false);
            document.addEventListener('touchend', this._onTouchEnd, false);
            document.addEventListener('mousemove', this._onTouchMove, false);
            document.addEventListener('mouseup', this._onTouchEnd, false);
        },
        _onTouchMove(e) {
            let target = this.target;
            let thisData = this[target + 'State'];
            this.delta = this._getTouchPos(e) - thisData.startPos;
            // console.log('delta:' + this.delta);
            thisData.translateY = thisData.startTranslateY + this.delta;
            if (Math.abs(this.delta) > 0) {
                e.preventDefault();
            }
        },
        _onTouchEnd(e) {
            let target = this.target;
            let thisData = this[target + 'State'];
            thisData.dragging = false;
            this.setPage();
            document.removeEventListener('touchmove', this._onTouchMove);
            document.removeEventListener('touchend', this._onTouchEnd);
            document.removeEventListener('mousemove', this._onTouchMove);
            document.removeEventListener('mouseup', this._onTouchEnd);
        },
        _stopDef(e) {
            e.preventDefault()
        }
    },
    props: {
        'defaultTime': {
            type: Object,
            default: {}
        },
        'show': Boolean,
        'title': {
            type: String,
            default: '请选择'
        },
        'confirm': {
            type: String,
            default: '确定'
        },
        'cancel': {
            type: String,
            default: '取消'
        },
        'startYear': {
            type: Number,
            default: 2000
        },
        'yearRange': {
            type: Number,
            default: 30
        }
    },
    watch: {
        'show' (val) {
            if(val) {
                setTimeout(()=>{
                    this.reset();
                },50) 
            }
        }
    }
}
</script>
<style>
.ProvCityBoxBg {
    background: rgba(0, 0, 0, .7);
    z-index: 200;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
}

.ProvCityBox {
    position: fixed;
    z-index: 300;
    background: #fff;
    bottom: 0;
    left: 0;
    right: 0;
}

.ProvCityHeader {
    background: #385FB5;
    height: 44px;
    line-height: 44px;
    overflow: hidden;
    text-align: center;
    color: #fff;
    font-size: 16px;
}

.ProvCityHeaderCancle {
    float: left;
    padding: 0 20px;
    color: #fff;
    font-size: 14px;
}

.ProvCityHeaderConfirm {
    float: right;
    padding: 0 20px;
    color: #fff;
    font-size: 14px;
}

.ProvCityContent {
    width: 100%;
    margin: 0 auto;
    background: #fff;
    overflow: hidden;
    height: 245px;
    overflow: hidden;
}

.ProvCityContentList ul {
    -webkit-transition: all .4s ease;
    transition: all .4s ease;
}

.ProvCityContentList ul.province_dragging,
.ProvCityContentList ul.city_dragging,
.ProvCityContentList ul.area_dragging {
    -webkit-transition: none;
    transition: none;
}

.ProvCityContentList li {
    line-height: 35px;
    height: 35px;
    font-size: 14px;
}

.ProvCityContentList li.current {
    font-size: 16px;
    font-weight: bold;
}

.ProvCityContentList li.node1 {
    font-size: 15px;
    opacity: .7;
}

.ProvCityContentList li.node2 {
    font-size: 14px;
    opacity: .5;
}

.ProvCityContentList li.node3 {
    font-size: 12px;
    opacity: .3;
}

.ProvCitySelectedTop {
    width: 100%;
    border: none;
    border-top: 1px solid #eee;
    position: absolute;
    bottom: 105px;
    margin: 0;
    height: 0;
}

.ProvCitySelectedBottom {
    width: 100%;
    border: none;
    border-top: 1px solid #eee;
    position: absolute;
    bottom: 140px;
    margin: 0;
    height: 0;
}
</style>
