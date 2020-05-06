<template>
   <div>
      <!-- 顶部导航 -->
      <van-nav-bar title="购物街" :fixed="true" :border="false" />
      <!-- 轮播图 -->
        <div class="scroll">
         <HomeSwiper :banner="banner"></HomeSwiper>
      <!-- 推荐显示 -->
      <Recommend :recommend=recommend></Recommend>
      <!-- 推荐分类 -->
      <FeatureView ></FeatureView>
            <!-- 导航吸顶 -->
            <van-sticky :offset-top="45">
                     <!-- 3大分类 -->
       <TabControl :titles="['流行','新款','精选']" @titleChange="titleChange"></TabControl>
            </van-sticky>
             <goods-list :goods="goods[currentType].list"></goods-list>

    
      

      </div>

   </div>
</template>

<script>
//封装的js调用代码，调用后端数据
import  {getHomeMultidata,getHomeGoods} from "@/network/home.js";
//导入组件
import HomeSwiper from './Clickhome/HomeSwiper'
import Recommend from './Clickhome/Recommend'
import FeatureView from './Clickhome/FeatureView'
//公共组件导入
import TabControl from '@/components/comcent/TabControl'
import GoodsList from '@/components/comcent/goods/GoodsList'
export default {
       name:'Home',
      components: {
          HomeSwiper,
          Recommend,
          FeatureView ,
          TabControl,
         GoodsList,
       },
       data(){
          return{
             banner:[],
             recommend:[],
             goods:{
                'pop':{page:0, list:[]},
                'new':{page:0, list:[]},
                'sell':{page:0, list:[]}
             },
            currentType: "pop"
          };
          
       },
    mounted() {
        getHomeMultidata().then(res => {
            console.log(res);
            //获取轮播图数据
            this.banner = res.data.banner.list;
            //获取轮播图下面的推荐数据;
            this.recommend = res.data.recommend.list;
        });
        this.getHomeGoods("pop");
        this.getHomeGoods('new');
        this.getHomeGoods('sell');

 document.addEventListener('scroll', this.scrollMoreData, false)
        
    },

       methods:{
  //点击tabControll切换
        titleChange(index){
            switch(index){
                case 0:
                    this.currentType = 'pop';
                    break;
                case 1:
                    this.currentType = 'new';
                    break;
                case 2:
                    this.currentType = 'sell';
            }
        },
             getHomeGoods(currentType){
              const page = this.goods[currentType].page + 1;
           getHomeGoods(currentType,page).then(res =>{
              this.goods[currentType].list.push(...res.data.list)
              this.goods[currentType].page++;

           })
           
        },
         scrollMoreData() {
            // 计算 总页数
            // this.pageTotal = Math.ceil(this.total / this.goodsParams.pagesize);
            const scrollTopHeight = document.documentElement.scrollTop;         //  获取 文档向上滚动的 距离;
            const clientHeight = document.documentElement.clientHeight;         // 获取浏览器窗口的 高度;
            const offsetHeight = document.querySelector(".scroll").offsetHeight;   // 获取滚动 内容的 高度;
             if ((scrollTopHeight + clientHeight) - 46 + 50 >= offsetHeight) {
                 // -54 是因为顶部的 搜索框占了 54px;  
                
                this.getHomeGoods(this.currentType);
                console.log('触底了'); 
             }}
        
          }
          
}
</script>

<style>
.van-nav-bar {
    background-color: #ff8a9d;
}
.van-nav-bar__title {
    color: #fff;
}

</style>