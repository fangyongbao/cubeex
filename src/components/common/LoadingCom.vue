<template>
    <div class="m-loading" v-show="isLoading">
      <img src="../../assets/images/loading/loading.gif" />
    </div>
</template> 

<script>
export default {
  data(){
    return {
       
    }
  },
  props: ['isLoading'],
  methods: {
    
  },
  created: function(){
    
  },
  mounted: function(){
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
$bcolor:#5682D9;
.m-loading{
	position: fixed; left:0; top:0; width: 100%; height: 100%; background: rgba(0,0,0,0.6); z-index: 99999;
	img{
        width: 62px;
        height: 62px;
        position: absolute;
        left: 50%;
        top: 50%;
        margin-top: -31px;
        margin-left: -31px;
	}
}
</style>