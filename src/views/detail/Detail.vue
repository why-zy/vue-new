<template>
  <div>
<DetailNar></DetailNar>
  </div>
</template>

<script>
import DetailNar from './Clickdetail/DetailNar'
export default {
    name:'Detail',
    components:{
        DetailNar
    },
    data(){
        return{
            
        }
    },
    created(){
        this.iid=this.$route.params.iid
    }

}
</script>

<style>

</style>