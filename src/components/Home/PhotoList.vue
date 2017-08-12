<template>
    <div class="temp">
        <div class="title">
            <ul>
                <li>
                    <a @click="getPhotoImageData(0)">全部</a>
                </li>
                <li v-for="item in listData">
                    <a @click="getPhotoImageData(item.id)">{{item.title}}</a>
                </li>
            </ul>
        </div>
        <div class="image" v-for="item in imagesData">
            <router-link v-bind='{to:"/photoDetail/"+item.id}'>
                <img :src="item.img_url" class="images">
            </router-link>
            <div class="zhaiyao">
                <p>{{item.zhaiyao}}</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .zhaiyao {
        position: absolute;
        bottom: 0px;
        padding: 4px;
        background-color: rgba(1,1,1,0.1);
    }
    .zhaiyao p{
      color: white;
    }
    .image{
        position: relative;
    }
    .title li {
        list-style: none;
        padding-left: 5px;
    }
    .title ul{
        display: flex;
        padding: 0px;
    }
    .title {
        overflow-x: auto;
        overflow-y: hidden;
        height: 55px;
        white-space: nowrap;
    }
    .images {
        width: 100%;
        padding: 0px 5px;
    }

</style>

<script type=text/ecmascript-6>
    import common from '../tools/common'
    import {Indicator} from 'mint-ui'
    export default {
        data(){
            return {
                listData:[],
                imagesData:[]
            }
        },
        created(){
            // 调用
            // 获取分类数据
            this.getPhotoListData()
            // 获取图片数据
            this.getPhotoImageData(0)

        },
        methods:{
            // 获取当前页面的分类数据
            getPhotoListData(){
                var url = `${common.HTTP}${common.SERVER_PATH}:${common.PORT}/api/getimgcategory`
                this.$http.get(url).then(
                        res=> {
                            this.listData = res.body.message
                        },
                        res=> {
                            console.warn('获取photolist页面的分类数据出错')
                        }
                )
            },
            // 获取图片数据
            getPhotoImageData(id){
                var url =  `${common.HTTP}${common.SERVER_PATH}:${common.PORT}/api/getimages/${id}`

                Indicator.open()

                this.$http.get(url).then(
                        res=> {
                            Indicator.close()
                            this.imagesData = res.body.message
                        },
                        res=> {
                            console.warn('获取photolist页面的图片数据出错')
                            Indicator.close()
                        }
                )
            }
        }
    }
</script>

