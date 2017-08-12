<template>
    <div class="temp">
        <!--调用Lunbo组件的内容来显示图片轮播功能-->
        <Lunbo :lunboData="homeData"></Lunbo>

        <!--从mui中复制九宫格-->
        <div class="mui-content">
            <ul class="mui-table-view mui-grid-view mui-grid-9">
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="/newsList">
                        <span class="mui-icon mui-icon-home"></span>
                        <div class="mui-media-body">新闻资讯</div>
                    </router-link>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="/photoList">
                        <span class="mui-icon mui-icon-email"><span class="mui-badge">5</span></span>
                        <div class="mui-media-body">图片分享</div>
                    </router-link>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                    <router-link to="/goodsList">
                        <span class="mui-icon mui-icon-chatbubble"></span>
                        <div class="mui-media-body">商品购买</div>
                    </router-link>
                </li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon mui-icon-location"></span>
                    <div class="mui-media-body">反馈信息</div>
                </a></li>
                <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                    <span class="mui-icon mui-icon-search"></span>
                    <div class="mui-media-body">视频专区</div>
                </a></li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
    /*这是修改九宫格中的图片的样式*/
    .mui-icon-home {
        background-image: url("../../images/news.png");
        /*设置一个环绕*/
        background-repeat: round;
    }

    .mui-icon-home:before {
        content: '';
    }

    .mui-icon {
        width: 50px;
        height: 50px;
    }

    .mui-icon-email {
        background-image: url("../../images/feedback.png");
        /*设置一个环绕*/
        background-repeat: round;
    }

    .mui-icon-email:before {
        content: '';
    }

    .mui-icon-chatbubble {
        background-image: url("../../images/goodShow.png");
        /*设置一个环绕*/
        background-repeat: round;
    }

    .mui-icon-chatbubble:before {
        content: '';
    }

    .mui-icon-chatbubble {
        background-image: url("../../images/goodShow.png");
        /*设置一个环绕*/
        background-repeat: round;
    }

    .mui-icon-chatbubble:before {
        content: '';
    }

    .mui-icon-location {
        background-image: url("../../images/picShare.png");
        /*设置一个环绕*/
        background-repeat: round;
    }

    .mui-icon-location:before {
        content: '';
    }

    .mui-icon-search {
        background-image: url("../../images/search.png");
        /*设置一个环绕*/
        background-repeat: round;
    }

    .mui-icon-search:before {
        content: '';
    }

    .mui-grid-view.mui-grid-9 {
        background-color: white;
    }
</style>

<script type=text/ecmascript-6>
    import Lunbo from '../sub/Lunbo.vue'
    import common from '../tools/common'
    export default {
        data(){
            return {
                homeData: [],
                title: 'weoiwojfeowf'
            }
        },
        components: {
            Lunbo
        },
        methods: {
//            网路请求的方法
            getHomeData(){
//                进行网络请求
                var url = `${common.HTTP}${common.SERVER_PATH}:${common.PORT}/api/getlunbo`
                console.log(url)
                this.$http.get(url).then(
//                        function (res) {
//
//                        }
                        res=> {
                            console.log(res.body.message)
                            this.homeData = res.body.message;
                        },
                        res=> {

                        }
                )

            }
        },
        created(){
            this.getHomeData()
        }
    }
</script>

