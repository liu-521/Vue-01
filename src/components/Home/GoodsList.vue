<template>
    <div class="temp">
        <div class="mui-content" style="background-color:#fff">
            <ul class="mui-table-view mui-grid-view">
                <li v-for="item in goodsListData" class="mui-table-view-cell mui-media mui-col-xs-6">
                    <router-link v-bind='{to:"/goodsDetail/"+item.id}'>
                        <img class="mui-media-object" :src="item.img_url">
                        <div class="title">
                                {{item.title}}
                            <div class="info">
                                折扣价: <span>¥{{item.sell_price}}</span>
                                销售价: <s>¥{{item.market_price}}</s>
                            </div>
                        </div>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
    .title{
        color: red;
        font-size: 12px;
        background-color: rgba(1,1,1,0.1);
    }
</style>

<script type=text/ecmascript-6>
    import common from '../tools/common'
    export default {
        data(){
          return {
              goodsListData:[]
          }
        },
        created(){
            this.getGoodsListData(1)
        },
        methods:{
            getGoodsListData(number){
                var url = `${common.HTTP}${common.SERVER_PATH}:${common.PORT}/api/getgoods?pageindex=${number}`
                this.$http.get(url).then(
                        res=>{
                            this.goodsListData = res.body.message
                        },
                        res=>{
                            console.log('goodslist页面请求数据出错')
                        }
                )
            }
        }
    }
</script>

