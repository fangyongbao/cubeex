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
                <div class="f-flex1 f-tac f-oh ProvCityContentList" v-if="format.Y">
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
                <div class="f-flex1 f-tac f-oh ProvCityContentList" v-if="format.D">
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
 * @param obj format - 设置 Y-M-D || M-D || Y-M
 * @param obj minTime - 设置最小的时间 {'Y': 2016,'M': 10,'D': 11}
 * @param obj maxTime - 设置最大的时间 {'Y': 2016,'M': 10,'D': 11}
 * @example
 * <cubee-dateTime :show="dateTimeStatus" :defaultTime="setTime" :startYear="1970" :yearRange="50" :minTime="minTime" :maxTime="maxTime"></cubee-dateTime>
 */
export default {
    data: function() {
        return {
            target: '',
            yearState: {
                selectedId: 0,
                startPos: null,
                translateY: 0,
                startTranslateY: 0,
                dragging: false,
                length: null,
                minSelectId: 0,
                maxSelectId: null,
            },
            monthState: {
                selectedId: 0,
                startPos: null,
                translateY: 0,
                startTranslateY: 0,
                dragging: false,
                length: 12,
                minSelectId: 0,
                maxSelectId: null,
            },
            dayState: {
                selectedId: 0,
                startPos: null,
                translateY: 0,
                startTranslateY: 0,
                dragging: false,
                length: null,
                minSelectId: 0,
                maxSelectId: null,
            },
            delta: 0,
            slideHeight: null,
        }
    },
    methods: {
        reset() {
            this.yearState.length = this.yearRange;  
            this.slideHeight = document.querySelector(".ProvCityContentList").getElementsByTagName("li")[0].clientHeight;
            if(this.defaultTime != null) {
                this.yearState.selectedId = this.defaultTime.year - this.startYear; //年
                this.monthState.selectedId = this.defaultTime.month - 1; //月
                this.dayState.selectedId = this.defaultTime.day - 1; //日
            } else {
                let dateObj = new Date();
                this.yearState.selectedId = dateObj.getFullYear() - this.startYear; //年
                this.monthState.selectedId = dateObj.getMonth(); //月
                this.dayState.selectedId = dateObj.getDate() - 1; //日
            }
            
            this.getDays();
            this.yearState.translateY = -this.slideHeight * this.yearState.selectedId;
            this.monthState.translateY = -this.slideHeight * this.monthState.selectedId;
            this.dayState.translateY = -this.slideHeight * this.dayState.selectedId;
            this._minTimeInit();
            this._maxTimeInit();
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
            if(!this.format.Y && this.format.D) {
                this.$parent.dateTimeResult = dateTimeResult.month + '.' + dateTimeResult.day;
            } else if (!this.format.D && this.format.Y) {
                this.$parent.dateTimeResult = dateTimeResult.year + '.' + dateTimeResult.month;
            } else if (!this.format.Y && !this.format.D){
                this.$parent.dateTimeResult = dateTimeResult.month;
            } else {
                this.$parent.dateTimeResult = dateTimeResult.year + '.' + dateTimeResult.month + '.' + dateTimeResult.day;
            }
            
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
            if(target === 'year' || target === "month") {
                this.getDays();
            }
            if(target === 'year' && this.minTime != null) {
                if(this.yearState.selectedId == this.yearState.minSelectId) {
                    this.monthState.minSelectId = Number(this.minTime.M) - 1;
                    if(this.monthState.selectedId < this.monthState.minSelectId) {
                        this.monthState.selectedId = this.monthState.minSelectId;
                        this.monthState.translateY = -this.monthState.minSelectId * this.slideHeight;
                    }
                    
                } else {
                    this.monthState.minSelectId = 0;
                }
                if(this.yearState.selectedId == this.yearState.minSelectId && this.monthState.selectedId == this.monthState.minSelectId && this.format.D) {
                    this.dayState.minSelectId = Number(this.minTime.D) - 1;
                    if(this.dayState.selectedId < this.dayState.minSelectId) {
                        this.dayState.selectedId = this.dayState.minSelectId;
                        this.dayState.translateY = -this.dayState.minSelectId * this.slideHeight;
                    }
                } else {
                    this.dayState.minSelectId = 0;
                }
            }
            if(target == "month" && this.format.D && this.minTime != null) {
                if(this.yearState.selectedId == this.yearState.minSelectId && this.monthState.selectedId == this.monthState.minSelectId && this.format.D) {
                    this.dayState.minSelectId = Number(this.minTime.D) - 1;
                    if(this.dayState.selectedId < this.dayState.minSelectId) {
                        this.dayState.selectedId = this.dayState.minSelectId;
                        this.dayState.translateY = -this.dayState.minSelectId * this.slideHeight;
                    }
                } else {
                    this.dayState.minSelectId = 0;
                }
            }
            if(target === 'year' && this.maxTime != null) {
                if(this.yearState.selectedId == this.yearState.maxSelectId) {
                    this.monthState.maxSelectId = Number(this.maxTime.M) - 1;
                    if(this.monthState.selectedId > this.monthState.maxSelectId) {
                        this.monthState.selectedId = this.monthState.maxSelectId;
                        this.monthState.translateY = -this.monthState.maxSelectId * this.slideHeight;
                    }
                } else {
                    this.monthState.maxSelectId = 11;
                }
                if(this.yearState.selectedId == this.yearState.maxSelectId && this.monthState.selectedId == this.monthState.maxSelectId && this.format.D) {
                    this.dayState.maxSelectId = Number(this.maxTime.D) - 1;
                    if(this.dayState.selectedId > this.dayState.maxSelectId) {
                        this.dayState.selectedId = this.dayState.maxSelectId;
                        this.dayState.translateY = -this.dayState.maxSelectId * this.slideHeight;
                    }
                } else {
                    this.dayState.maxSelectId = new Date(this.yearState.selectedId+this.startYear,this.monthState.selectedId+1,0).getDate();
                }
            }
            if(target == "month" && this.format.D && this.maxTime != null) {
                if(this.yearState.selectedId == this.yearState.maxSelectId && this.monthState.selectedId == this.monthState.maxSelectId && this.format.D) {
                    this.dayState.maxSelectId = Number(this.maxTime.D) - 1;
                    if(this.dayState.selectedId > this.dayState.maxSelectId) {
                        this.dayState.selectedId = this.dayState.maxSelectId;
                        this.dayState.translateY = -this.dayState.maxSelectId * this.slideHeight;
                    }
                } else {
                    this.dayState.maxSelectId = new Date(this.yearState.selectedId+this.startYear,this.monthState.selectedId+1,0).getDate();
                }
            }
        },
        setPage() {
            let target = this.target;
            let thisData = this[target + 'State'];
            let clientHeight = this.slideHeight;
            let total = thisData.length;
            let goPage = Math.round((thisData.translateY / clientHeight).toFixed(1));
            let minSelectId = thisData.minSelectId;
            let maxSelectId = thisData.maxSelectId;
            if (goPage > 0) {
                goPage = 0;
            }
            goPage = total - 1 >= Math.abs(goPage) ? goPage : -(total - 1);
            let index = Math.abs(goPage);
            console.log("total:"+total,"goPage:"+goPage,"index:"+index,"minSelectId:"+minSelectId,"maxSelectId:"+maxSelectId);
            
            if(index < minSelectId && this.minTime != null) {
                index = minSelectId;
            }
            if(index > maxSelectId && this.minTime != null) {
                index = maxSelectId;
            }
            this.getSelectedData(index);
            thisData.translateY = -index * clientHeight;
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
        },
        _minTimeInit() {
            if(this.minTime != null) {
                if(this.format.Y) {
                    this.yearState.minSelectId = Number(this.minTime.Y) < this.startYear ? 0 : Number(this.minTime.Y) - this.startYear;
                    if(this.yearState.selectedId < this.yearState.minSelectId) {
                        this.yearState.selectedId = this.yearState.minSelectId;
                        this.yearState.translateY = -this.slideHeight * this.yearState.selectedId;
                    }
                    if(this.yearState.selectedId == this.yearState.minSelectId) {
                        this.monthState.minSelectId = Number(this.minTime.M) - 1;
                        if(this.monthState.selectedId < this.monthState.minSelectId) {
                            this.monthState.selectedId = this.monthState.minSelectId;
                            this.monthState.translateY = -this.slideHeight * this.monthState.selectedId;
                        }
                    }
                }
                if(this.format.D) {
                    if(this.yearState.selectedId == this.yearState.minSelectId && this.monthState.selectedId == this.monthState.minSelectId) {
                        this.dayState.minSelectId = Number(this.minTime.D) - 1;
                        if(this.dayState.selectedId < this.dayState.minSelectId) {
                            this.dayState.selectedId = this.dayState.minSelectId;
                            this.dayState.translateY = -this.slideHeight * this.dayState.selectedId;
                        }
                    }
                }
            }
        },
        _maxTimeInit() {
            if(this.maxTime != null) {
                if(this.format.Y) {
                    this.yearState.maxSelectId = Number(this.maxTime.Y) > this.startYear + this.yearRange - 1 ? this.startYear + this.yearRange - 1 : Number(this.maxTime.Y) - this.startYear;
                    if(this.yearState.selectedId > this.yearState.maxSelectId) {
                        this.yearState.selectedId = this.yearState.maxSelectId;
                        this.yearState.translateY = -this.slideHeight * this.yearState.selectedId;
                    }
                    if(this.yearState.selectedId == this.yearState.maxSelectId) {
                        this.monthState.maxSelectId = Number(this.maxTime.M) - 1;
                        if(this.monthState.selectedId > this.monthState.maxSelectId) {
                            this.monthState.selectedId = this.monthState.maxSelectId;
                            this.monthState.translateY = -this.slideHeight * this.monthState.selectedId;
                        }
                    } else {
                        this.monthState.maxSelectId = 11;
                    }
                }
                if(this.format.D) {
                    if(this.yearState.selectedId == this.yearState.maxSelectId && this.monthState.selectedId == this.monthState.maxSelectId) {
                        this.dayState.maxSelectId = Number(this.maxTime.D) - 1;
                        if(this.dayState.selectedId > this.dayState.maxSelectId) {
                            this.dayState.selectedId = this.dayState.maxSelectId;
                            this.dayState.translateY = -this.slideHeight * this.dayState.selectedId;
                        }
                    } else {
                        this.dayState.maxSelectId = new Date(this.yearState.selectedId+this.startYear,this.monthState.selectedId+1,0).getDate();
                    }
                }
            } else {
                this.yearState.maxSelectId = this.yearRange - 1;
            }
        }
    },
    props: {
        'defaultTime': {
            type: Object,
            default: null,
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
        },
        'format': {
            type: Object,
            default() {
                return {
                    'Y': true,
                    'D': true,
                } 
            }
        },
        'minTime': {
            type: Object,
            default: null,
        },
        'maxTime': {
            type: Object,
            default: null,
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
