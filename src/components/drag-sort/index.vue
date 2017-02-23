<template>
	<div class="drag-list" id="drag-list">
		<div class="drag-item" v-for="item in options">
	        <div class="config-title" >
	            <span class="title-span"></span>{{item.name}}
	        </div>
	    </div>
    </div>
</template>

<script>
	import { Sortable } from './drag.js'
	export default {
		data() {
			return {
			}
		},
		props: {
	        options: {
	            type: Array,
	            required: true
	        }
	    },
		methods: {
			createDrag(){
				console.log("begin")
				console.log(Sortable)
				let el = document.getElementById('drag-list');


                let sortable = new Sortable(el, {
                    sort: true,  // sorting inside list
                    delay: 0, // time in milliseconds to define when the sorting should start
                    disabled: false, // Disables the sortable if set to true.
                    store: null,  // @see Store
                    animation: 150,  // ms, animation speed moving items when sorting, `0` — without animation
                    scroll: true, // or HTMLElement
                    scrollSensitivity: 30, // px, how near the mouse must be to an edge to start scrolling.
                    scrollSpeed: 10, // px

                    // dragging started
                    onStart: function (evt) {
                        evt.oldIndex;  // element index within parent
                    },
                    onEnd: function (/**Event*/evt) {

                        evt.oldIndex;  // element's old index within parent
                        evt.newIndex;  // element's new index within parent
                        // el.css({top: 0});
                    }
                });
            }
			
		},
		mounted() {
			this.createDrag();
		},
		watch: {
			
		}
	}
</script>

<style lang="sass" scopoed>
.drag-list{
	padding: 10px 10px;
    background: #ecedf2;
    position: relative;

	.drag-item{
		width: 100%;
	    border: 1px solid #e5e5e5;
	    border-radius: 4px;
	    background: #ffffff;
	    position: relative;
	    margin-bottom: 15px;

	    .config-title{
	    	color: #2f3857;
    		font-weight: 600;
    		padding: 10px 0;

    		span{
    			width: 6px;
			    height: 15px;
			    display: inline-block;
			    background: #ff6600;
			    margin-right: 10px;
			    vertical-align: middle;
			    position: relative;
			    top: -2px;
    		}
	    }
	}
}
</style>