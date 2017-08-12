<template>
    <div class="temp">
        <Lunbo :lunboData="goodsDetailData"></Lunbo>

        <div class="title" v-for="item in goodsInfoData">
            <h4>{{item.title}}</h4>
            <div class="otitle">
                市场价:¥{{item.sell_price}}
                <div>
                    销售价:<s>¥{{item.market_price}}</s>
                </div>
            </div>
            <div class="count">
                购买数量:  <Number v-on:count="getCount"></Number>

                <transition
                        v-on:before-enter="beforeEnter"
                        v-on:enter="enter"
                        v-on:after-enter="afterEnter"
                >
                    <div v-show="isshow" class="ball"></div>
                </transition>





            </div>
            <div class="button">
                <mt-button type="primary" size="small">立即购买</mt-button>
                <mt-button type="danger" size="small" @click="goToCart">加入购物车</mt-button>
            </div>
            <div class="info">
                <h5>商品信息:</h5>
                <ul>
                    <li>商品货号:{{item.goods_no}}</li>
                    <li>库存情况:{{item.stock_quantity}}</li>
                    <li>上架时间:{{item.add_time | filter('YYYY-MM-DD')}}</li>
                </ul>
            </div>
            <div class="lastbutton">
                <mt-button plain type="primary" size="large" @click="goToDesc">图文介绍</mt-button>
                <mt-button plain class="btn" type="danger" size="large" @click="goToComment">商品评论</mt-button>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .count {
        position: relative;
    }
    .ball {
        width: 35px;
        height: 35px;
        border-radius: 50%;
        background-color: red;
        position: absolute;
        top: 0px;
        right: 110px;
        transition: all 1s cubic-bezier(.93,-0.66,.94,.46);
    }
    .btn {
        margin-top: 5px;
    }
    .title h4{
        color: #02C1ED;
        text-align: center;
    }
    .otitle, .count, .button{
        display: flex;
        justify-content: space-around;
        font-size: 14px;
    }
    .info li{
        list-style: none;
        font-size: 14px;
        color: rgba(1,1,1,0.6);
    }
    .info {
        padding: 5px;
    }
</style>

<script type=text/ecmascript-6>
    import Lunbo from '../sub/Lunbo.vue'
    import common from '../tools/common'
    import Number from '../sub/Number.vue'
    import {setItem} from '../tools/LocalStorageHelper'
    import {Linju} from '../tools/Linju'
    export default {
        data(){
            return {
                // 保存轮播数据的数组
                goodsDetailData:[],
                // 保存商品详情信息的数组
                goodsInfoData:[],

                numberCount:0,

                // 控制小球的显示隐藏
                isshow:false
            }
        },
        components:{
            Lunbo,
            Number
        },
        props:['id'],
        created(){
            // 外部传过来的数据
            let id = this.$route.params.id
            // 请求轮播图的方法
            this.getGoodsDetailData(id)
            // 获取当前页面的信息方法
            this.getGoodsDetailInfoData(id)
        },
        methods:{
            // 请求轮播图的数据
            getGoodsDetailData(id){
                var url = `${common.HTTP}${common.SERVER_PATH}:${common.PORT}/api/getthumimages/${id}`
                this.$http.get(url).then(
                        res=>{
                            console.log(res.body.message)
                            this.goodsDetailData = res.body.message
                        },
                        res=>{
                            console.log('goodsdetail页面请求数据出错')
                        }
                )
            },
            getGoodsDetailInfoData(id){
                var url = `${common.HTTP}${common.SERVER_PATH}:${common.PORT}/api/goods/getinfo/${id}`
                this.$http.get(url).then(
                        res=>{
                            this.goodsInfoData = res.body.message
                        },
                        res=>{
                            console.log('goodsdetail页面信息请求数据出错')
                        }
                )
            },
            getCount(count){
                console.log(count)
                this.numberCount = count
            },
            // 去往商品描述页面
            goToDesc(){
                let id = this.$route.params.id;
                //代码跳转
                this.$router.push(
                        {name:'goodsDesc',params:{id:id}}
                )
            },
            goToComment(){
                let id = this.$route.params.id;
                //代码跳转
                this.$router.push(
                        {name:'comment',params:{id:id}}
                )
            },
            // 点击加入购物车按钮之后调用的方法
            goToCart(){
                // 1.动画效果
                this.isshow = !this.isshow

                // 2. 加入本地数据库
                var data =  {goodsid:'goodsid',count:this.numberCount}
                setItem(data)

                // 3.通知tabbar中的徽章,更改数字
                Linju.$emit('countNumber',this.numberCount)
            },
            beforeEnter: function (el) {
                el.style.transform = 'translate3d(0,0,0)'
            },
            enter: function (el, done) {
                // 不停地获取动画变换效果,才可以看到整个过程
                var offset = el.offsetWidth
                el.style.transform = 'translate3d(22px,255px,0)'
                done()
            },
            afterEnter: function (el) {
                this.isshow = !this.isshow
            },
        }
    }
</script>

