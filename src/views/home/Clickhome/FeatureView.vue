<template>
    <div class="feature_view">
        <a href="http://act.mogujie.com/zzlx67">
            <img :src="img" @load="featerLoad"/>
        </a>
    </div>
</template>
<script>
export default {
    name:'FeatureView',
    data() {
        return {
            img: require('@/assets/recommend_bg.jpg')
        }
    },
    methods:{
        featerLoad() {
            this.$emit("featerImgLoad");
        }
    },
}
</script>
<style  scoped>
.feature_view{
    margin-top: 5px;
}
    .feature_view a{
     
            display: block;
            width: 100vw;
            height: 5.5rem;
            
        }
    .feature_view    img{
                width: 100%;
                height: 100%;
            }
    
</style>