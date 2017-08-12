<template>
    <div class="temp">
        <!--从mui中获取medialist中的模板数据-->
        <!--这是假数据模板-->
        <!--<ul class="mui-table-view">-->
            <!--<li class="mui-table-view-cell mui-media">-->
                <!--<a href="javascript:;">-->
                    <!--<img class="mui-media-object mui-pull-left" src="../../images/0-1.jpg">-->
                    <!--<div class="mui-media-body">-->
                        <!--幸福-->
                        <!--<p class='mui-ellipsis'>能和心爱的人一起睡觉，是件幸福的事情；可是，打呼噜怎么办？</p>-->
                    <!--</div>-->
                <!--</a>-->
            <!--</li>-->
            <!--<li class="mui-table-view-cell mui-media">-->
                <!--<a href="javascript:;">-->
                    <!--<img class="mui-media-object mui-pull-left" src="../../images/0-2.jpg">-->
                    <!--<div class="mui-media-body">-->
                        <!--木屋-->
                        <!--<p class='mui-ellipsis'>想要这样一间小木屋，夏天挫冰吃瓜，冬天围炉取暖.</p>-->
                    <!--</div>-->
                <!--</a>-->
            <!--</li>-->
            <!--<li class="mui-table-view-cell mui-media">-->
                <!--<a href="javascript:;">-->
                    <!--<img class="mui-media-object mui-pull-left" src="../../images/0-3.jpg">-->
                    <!--<div class="mui-media-body">-->
                        <!--CBD-->
                        <!--<p class='mui-ellipsis'>烤炉模式的城，到黄昏，如同打翻的调色盘一般.</p>-->
                    <!--</div>-->
                <!--</a>-->
            <!--</li>-->
        <!--</ul>-->
        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="item in newsListData">
                <router-link v-bind='{to:"/newsDetail/"+item.id}'>
                    <img class="mui-media-object mui-pull-left" :src="item.img_url">
                    <div class="mui-media-body">
                        {{item.title}}
                        <div class="info">
                            <div>
                                发布时间:{{item.add_time | filter('YYYY-MM-DD')}}
                            </div>
                            {{item.click}}次点击
                        </div>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<style scoped>
    .info{
        display: flex;
        justify-content: space-between;
        font-size: 12px;
        color: rgba(1,1,1,0.4);
    }
</style>

<script type=text/ecmascript-6>
    import common from '../tools/common'
    export default {
//     初始化的数据
        data(){
            return {
                newsListData:[]
            }
        },
        // 所有的方法写到这里面来
        methods: {
            // 数据请求的方法
            getNewsListData(){
                var url = `${common.HTTP}${common.SERVER_PATH}:${common.PORT}/api/getnewslist`
                // 发送请求
                this.$http.get(url).then(
                        res=> {
//                            console.log(res.body.message)
                            this.newsListData = res.body.message
                        },
                        res=>{
                            console.log('newslist页面请求数据出错')
                        }
                )
            }
        },
        created(){
            this.getNewsListData()
        }
    }
</script>

