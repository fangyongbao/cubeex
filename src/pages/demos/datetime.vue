<template>
	<div class="m-datetime-demo view">
        <Header-com></Header-com>
        <cubee-dateTime :show="dateTimeStatus" :defaultTime="setTime" :yearRange="50"></cubee-dateTime>
        <div class="f-ot content">
            <div class="f-flex f-flexr item">
                <div class="f-flex f-flextc f-flexvc label">
                    选择
                </div>
                <div class="f-flex1 f-flex f-flexvc select">
                    <input type="" name="" class="areaInput" placeholder="设置时间" :value="dateTimeResult" @focus="openDateTime" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
	import HeaderCom from './header';
	import {
	    CubeeDateTime
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

				dateTimeResult: '',
			}
		},
		components: {
			HeaderCom,
			CubeeDateTime
		},
		methods: {
			openDateTime() {
				this.dateTimeStatus = true;
				document.activeElement.blur();
			}
		}
	}
</script>

<style lang="sass" scoped>
	.m-datetime-demo {
		color: #999;
	    font-size: 14px;
	    .item {
	        height: 60px;
	        margin-top: 10px;
	        .label {
	            width: 60px;
	        }
	        .select {
	            padding: 0 10px;
	            input {
	                width: 100%;
	                height: 40px;
	                line-height: 40px;
	                border: 1px solid rgba(0, 0, 0, 0.1);
	                border-radius: 2px;
	                color: #666;
	                position: relative;
	                box-sizing: border-box;
	                padding: 0 10px;
	                -webkit-appearance: none;
	                appearance: none;
	            }
	        }
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