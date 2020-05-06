<template>
  <div class="tabcontrol">
      <div v-for="(item,index) in titles" :key="item"
       class="tabcontrol-item" 
       :class="{active: index === currentIndex}" 
       @click="itemClick(index)">
          <span>{{item}}</span>
      </div>
  </div>
</template>

<script>
export default {
    naem:'Tabcontrol',
     props:{
        titles:{
            type:Array,
            default() {
                return []
            }
        }
    },
   data(){
       return{
           currentIndex:0
       }

   },
   methods:{
       itemClick(index) {
           this.currentIndex=index;
           this.$emit('titleChange',index)
       }
   }
}
</script>
    <style scoped>
     .tabcontrol{
         display: flex;
         text-align: center;
         font-size: 14px;         
         height: 40px;
         line-height: 40px;
         background-color: seashell;

     }
     .tabcontrol-item{
         flex:1;
     }
      .tabcontrol-item span{
          padding: 3px;
      }
     .active{
            color: rgb(238, 101, 226);
            line-height: 32px;
     }
     .active span{
         border-bottom: 3px solid rgb(238, 101, 226);
     }
</style>