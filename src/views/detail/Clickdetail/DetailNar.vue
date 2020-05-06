<template>
  <div>
      <NarBar>
          <div slot="center" class="title">
              <div v-for="item in titles" :key="item" class="title-item">{{item}}  </div>
          </div>
      </NarBar>
  </div>
</template>

<script>
import NarBar from '@/components/common/narbar/NarBar'
export default {
    name:'DetailNar',
       components:{
           NarBar
           },
           data(){
               return{
                   titles:['商品','参数','详情','推荐']
               }
           }
}
</script>

<style scoped>
.title{
    display:flex;

}
.title-item{
    flex: 1;
}

</style>