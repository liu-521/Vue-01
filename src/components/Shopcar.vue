<template>
    <div class="temp" v-for="item in shopData">
        <div class="left">
            <img :src="item.thumb_path" alt="">
        </div>
        <div class="right">
            <h5>{{item.title}}</h5>
            <div>
                购买数量: <Number :initcount="item.cou"></Number>
            </div>
            <div class="sellprice">
                售价:{{item.sell_price}}
                <a href="">删除</a>
            </div>
        </div>
    </div>
</template>

<style scoped>

</style>

<script type=text/ecmascript-6>
    import common from './tools/common'
    import {getItem} from './tools/LocalStorageHelper'
    import Number from './sub/Number.vue'
    export default {
        data(){
            return {
                shopData:[],
            }
        },
        components:{
            Number
        },
        created(){
            this.getShopcarData()
        },
        methods:{
            getShopcarData(){
                // 从本地数据库中获取之前存入的数据
                let array = getItem()

                let message = {}

                //{"goodsid":"87","count":1}  {"goodsid":"88","count":1}
                // {"goodsid":"88","count":2}
//                {"goodsid":"87","count":1} ==>  {87:1,88:2,89:3}

                array.forEach(item=>{
                    if(message[item.goodsid]){
                        let tempCount = message[item.goodsid]
                        tempCount+=item.count
                        message[item.goodsid]=tempCount
                    } else {
                        message[item.goodsid]=item.count
                    }
                })

//                {87:1,88:2,89:3}
                var tempArray = []
                for(var key in message) {
                    tempArray.push(key)
                }

                var ids = tempArray.join(',')

                // url
                var url = `${common.HTTP}${common.SERVER_PATH}:${common.PORT}/api/goods/getshopcarlist/${ids}`
                this.$http.get(url).then(
                        res=>{
                            this.shopData = res.body.message;
                        },
                        res=>{
                            console.warn('购物车页面请求失败')
                        }
                )
            }
        }
    }
</script>

