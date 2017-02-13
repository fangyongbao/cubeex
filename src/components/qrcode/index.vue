<template>
	<div :id="qrcodeId" class="qrcode"></div>
</template>

<script>
	import { QRCode } from './qrcode.js'
	export default {
		data() {
			return {
				qrcodeId: 'qrcode',
				qrcode: null
			}
		},
		props: {
			codeConfig: {
				type: Object,
				default() {
					return {
						width: 100, // 图像宽度
						height: 100, // 图像高度
						colorDark : "#000000", // 前景色
					    colorLight : "#ffffff", // 背景色
					    correctLevel : QRCode.CorrectLevel.H // 容错级别，可设置为：QRCode.CorrectLevel.L  QRCode.CorrectLevel.M  QRCode.CorrectLevel.Q  QRCode.CorrectLevel.H
					}
				}
			},
			codeUrl: {
				type: String,
				required: true
			}
		},
		methods: {
			createCode() {
				document.getElementById(this.qrcodeId).innerHTML = '';
				this.qrcode = new QRCode(document.getElementById(this.qrcodeId), this.codeConfig);
				this.qrcode.makeCode(this.codeUrl);
			}
		},
		mounted() {
			this.qrcodeId = 'qrcode' + new Date().getTime();
			console.log(this.codeUrl)
		},
		watch: {
			codeUrl() {
				this.createCode();
			},
			codeConfig() {
				this.createCode();
			}
		}
	}
</script>

<style lang="sass" scopoed>
	.qrcode {
		width: 80%;
		margin: 10px auto;
		img {
			width: 100%;
			height: 100%;
		}
	}
</style>