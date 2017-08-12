<template>
    <div class="temp">
        <div class="title">
            <h4>{{newsDetailData.title}}</h4>
            <div class="info">
                <div>
                    {{newsDetailData.click}}次浏览
                </div>
                {{newsDetailData.add_time | filter('YYYY-MM-DD')}}
            </div>
            <div class="content">
                <p v-html="newsDetailData.content"></p>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .info{
        display: flex;
        justify-content:space-around;
        font-size: 14px;
        color: rgba(1,1,1,0.5);
    }
    .content {
        padding: 5px;
    }
    .title h4{
        color: #02C1ED;
        padding: 5px;
        text-align: center;
    }
</style>

<script type=text/ecmascript-6>
    import common from '../tools/common'
    export default {
        data(){
            return {
                newsDetailData:{}
            }
        },
        props:['id'],
        created(){
            let id = this.$route.params.id
            this.getNewsDetailData(id)
        },
        methods:{
            getNewsDetailData(id){
                var url = `${common.HTTP}${common.SERVER_PATH}:${common.PORT}/api/getnew/${id}`

                this.$http.get(url).then(
                        res=>{
                            this.newsDetailData = res.body.message[0]
                        },
                        res=>{
                            console.warn('newsDetail页面请求出错')
                        }
                )

            }
        }
    }
</script>


















