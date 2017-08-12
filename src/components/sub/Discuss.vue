<template>
    <div class="discuss">
        <div class="submittitle">
            <h3>输入评论内容</h3>
            <div class="textarea">
                <textarea ref="textArea" placeholder="请输入文本信息"></textarea>
                <mt-button size="large" type="primary" @click="postDiscussData">提交评论</mt-button>
            </div>
        </div>
        <div class="showtitle">
            <h3>展示评论内容</h3>
            <ul>
                <li v-for="item in discussData">
                    <div class="content">
                        {{item.content}}
                    </div>
                    <div class="info">
                        <div>
                            {{item.user_name}}
                        </div>
                        {{item.add_time | filter('YYYY-MM-DD')}}
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
    .discuss{
        padding: 5px;
    }
    .showtitle li{
        list-style: none;
        border-bottom: 1px solid rgba(1,1,1,0.1);
        margin-top: 5px;
    }
    .showtitle ul{
        padding: 0px;
    }
    .info {
        display: flex;
        justify-content: space-between;
    }
</style>

<script type=text/ecmascript-6>
    import common from '../tools/common'
    import {Toast} from 'mint-ui'
    export default {
        data(){
            return {
                discussData:[],

            }
        },
        props:['discussid'],
        created(){
            this.getDiscussData()
        },
        methods:{
            getDiscussData(){
                var url = `${common.HTTP}${common.SERVER_PATH}:${common.PORT}/api/getcomments/${this.discussid}?pageindex=1`
                this.$http.get(url).then(
                        res=>{
                            this.discussData = res.body.message
                        },
                        res=>{
                            console.log('评论页面请求数据出错')
                        }
                )
            },
            // post传递方法
            postDiscussData(){
                var url = `${common.HTTP}${common.SERVER_PATH}:${common.PORT}/api/postcomment/${this.discussid}`
                // 获取textarea中评论的内容
                let contentValue = this.$refs.textArea.value
                // 判断文本框是否为空,如果为空,不能提交
                if(!contentValue || contentValue.trim().length <= 0){
                    Toast('评论不能为空')
                    return
                }

                this.$http.post(url,{content:contentValue},{emulateJSON:true}).then(
                        res=>{
                            // 1,清空textarea文本框
                            this.$refs.textArea.value = ''

                            // 2. 再次请求,更新数据
                            this.getDiscussData()

                            // 3.给用户一个提示
                            Toast('评论提交成功')
                        },
                        res=>{

                        }
                )
            }
        }
    }
</script>

