<template>
	<div class="m-datetime-demo view">
        <Header-com :title="'Datetime'"></Header-com>
        <cubee-dateTime :show="dateTimeStatus" :defaultTime="setTime" :yearRange="50"></cubee-dateTime>
        <div class="f-ot content">
            <div class="f-flex f-flexr areaSelect">
                <div class="f-flex1 f-flex f-flexvc select f-pr" @click="openDateTime">
                    {{dateTimeResult}}
                    <i class="icon-down"></i>
                </div>
            </div>

            <div class="f-flex f-flexr areaSelectItem">
                <div class="f-flex1 f-flex f-flexvc select f-pr" @click="openDateTime">
                    {{dateTimeResult}}
                    <i class="icon-down"></i>
                </div>
            </div>
        </div>
        <cubee-tab :which-tab="2"></cubee-tab>
    </div>
</template>

<script>
	import HeaderCom from './header';
	import {
	    CubeeDateTime,CubeeTab
	} from '../../components';
	export default {
		name: "datetime",
		data() {
			return {
				dateTimeStatus: false,
				setTime: {
					year: 2000,
					month: 1,
					day: 2
				},

				dateTimeResult: '请设置时间',
			}
		},
		components: {
			HeaderCom,
			CubeeDateTime,
			CubeeTab
		},
		methods: {
			openDateTime() {
				this.dateTimeStatus = true;
			}
		}
	}
</script>

<style lang="sass" scoped>
	.m-datetime-demo {
		color: #999;
	    font-size: 14px;
	    padding-bottom: 1rem;
	    .content {
	        .areaSelect {
	            background-color: #FFF;
	            padding: 0.4rem 0.24rem;
	            margin-bottom: 0.2rem;
	            .select {
	                border: 1px solid #BDC1D2;
	                border-radius: 0.04rem;
	                height: 0.8rem;
	                line-height: 0.8rem;
	                padding: 0 0.24rem;
	                .icon-down {
	                    width: 0.8rem;
	                    height: 0.8rem;
	                    background: url(../../assets/images/icon/icon_down.png) center no-repeat;
	                    background-size: 0.28rem 0.13rem;
	                    position: absolute;
	                    top: 0;
	                    right: 0;
	                }
	            }
	        }
	        .areaSelectItem {
	            background-color: #FFF;
	            border-top: 1px solid #E6E6E6;
	            border-bottom: 1px solid #E6E6E6;
	            .select {
	                padding: 0 0.24rem;
	                line-height: 0.9rem;
	                height: 0.9rem;
	                .icon-down {
	                    position: absolute;
	                    top: 0;
	                    right: 0.24rem;
	                    width: 0.12rem;
	                    height: 0.9rem;
	                    background: url(../../assets/images/icon/icon-right.png) center no-repeat;
	                    background-size: contain;
	                }
	            }
	        }
	    }
	}
</style>