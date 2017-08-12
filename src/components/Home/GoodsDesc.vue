<template>
    <div class="temp">
        <h3>{{goodsDescData.title}}</h3>
        <p v-html="goodsDescData.content"></p>
    </div>
</template>

<style scoped>
    .temp h3{
        text-align: center;
        color: #02C1ED;
    }
    .temp p{
        padding: 5px;
    }
</style>

<script type=text/ecmascript-6>
    import common from '../tools/common'
    export default {
        data(){
            return {
                goodsDescData:{}
            }
        },
        props:['id'],
        created(){
            let id = this.$route.params.id
            this.getGoodsDesc(id)
        },
        methods:{
            getGoodsDesc(id){
                var url = `${common.HTTP}${common.SERVER_PATH}:${common.PORT}/api/goods/getdesc/${id}`
                this.$http.get(url).then(
                        res=>{
                            this.goodsDescData = res.body.message[0]
                        },
                        res=>{
                            console.warn('获取goodsdesc页面出错')
                        }
                )
            }
        }
    }
</script>

