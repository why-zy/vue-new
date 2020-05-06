<template>
  <div>
<van-grid :border="false" :column-num="4" class="recommend">
  <van-grid-item v-for="(item, index) in recommend" :key="index" > 
      <a :href="item.link">
          <van-image :src="item.image" />
      </a>
  </van-grid-item>


</van-grid>
  </div>
</template>

<script>
export default {
  name:'Recommend',
     props: {
        recommend: {
            type: Array,
            default() {
                return [];
            }
        }
    },
}
</script>

<style scoped>
.recommend{
       margin-top: 5px;
        width: 100vw;
        height: 2rem;

    }
       img{
            width: 20vw;
            height: 20vw;
        }
        .recommend title{
            font-size: 5px;
        }
</style>>
