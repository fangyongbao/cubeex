<template>
	<div class="m-eidtor f-flex f-flexc">
		<div class="f-ot f-flex1" :id="eidtorId"></div>
	</div>
</template>

<script>
	import Quill from 'quill'

	export default {
		data() {
			return {
				eidtorId: 'eidtor',
				quill: null,
				toolbarOptions: [
					[ 'bold', 'italic', 'underline', 'strike' ],
					[{ 'color': [] }, { 'background': [] }],
					[{ 'header': '1' }, { 'header': '2' }, 'blockquote', 'code-block' ],
					[{ 'list': 'ordered' }, { 'list': 'bullet'}, { 'indent': '-1' }, { 'indent': '+1' }],
					[ 'direction', { 'align': [] }],
					[ 'link', 'image', 'video' ],
					[ 'clean' ]
				]
			}
		},
		methods: {
			init() {
				let _this = this;
				_this.quill = new Quill('#' + _this.eidtorId, {
					'formula': true,
        			'syntax': true,
					modules: {
				    	toolbar: _this.toolbarOptions
				    },
				    theme: 'snow'
				});
			},
			getContents() {
				return this.$el.querySelector(".ql-editor").innerHTML;
			}
		},
		mounted: function () {
			this.eidtorId = 'eidtor' + new Date().getTime();
			this.$nextTick(function () {
				this.init()
			})
		}
	}
</script>

<style>
	@import '~quill/dist/quill.snow.css';
	.m-eidtor {
		width: 100%;
		height: 100%;
		font-size: 12px;
	}
	.ql-container {
		height: auto;
	}
	.ql-editor em {
		font-style: italic;
	}
	.ql-editor strong {
		font-weight: bold;
	}
	
</style>