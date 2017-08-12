<template>
    <div>
        <!--从mint-ui中获取图片轮播效果-->
        <!--<mt-swipe :auto="4000">-->
            <!--<mt-swipe-item class="slide1">1</mt-swipe-item>-->
            <!--<mt-swipe-item class="slide2">2</mt-swipe-item>-->
            <!--<mt-swipe-item class="slide3">3</mt-swipe-item>-->
        <!--</mt-swipe>-->
        <mt-swipe :auto="4000">
            <mt-swipe-item class="slide1" v-for="(item,index) in lunboData" :key="index">
                <a :href="item.url">
                    <img :src="item.img" class="img">
                </a>
            </mt-swipe-item>
        </mt-swipe>
    </div>
</template>

<style scoped>
    .mint-swipe {
        height: 300px;
        color: #fff;
        font-size: 30px;
        text-align: center;
        margin-bottom: 20px;
    }

    .mint-swipe-item {
        line-height: 300px;
    }

    .img{
        width: 100%;
        height: 100%;
    }

</style>

<script>
    export default {
        data(){
            return {

            }
        },
        props:['lunboData']
    }
</script>

