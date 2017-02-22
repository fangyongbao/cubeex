<template>
    <div class="m-editor-demo view">
        <Header-com :title="'editor'" :right-btn="rightBtnInfo" @right-btn="submit"></Header-com>
        <div class="f-ot content">
        	<cubee-editor ref="editor"></cubee-editor>
        </div>
		
        <cubee-tab :which-tab="2"></cubee-tab>
    </div>
</template>
<script>
import HeaderCom from './header';
import {
    CubeeTab,CubeeEditor
} from '../../components';
export default {
    name: 'editor-demo',
    data() {
        return {
            rightBtnInfo: {
                bgImg: '',
                text: "上传",
                isHas: true
            }
        }
    },
    components: {
        HeaderCom,
        CubeeTab,
        CubeeEditor
    },
    methods: {
    	submit() {
    		console.log(this.$refs.editor.getContents());
    	}
    },
    mounted() {

    }
}
</script>
<style lang="sass">
    .m-editor-demo {
        padding-bottom: 1rem;
        font-size: 12px;
        .content {
        	height: 100%;
        }
    }
</style>
