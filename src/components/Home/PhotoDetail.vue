<template>
    <div class="temp">
        <div class="title">
            <h3>{{photoInfoData.title}}</h3>
            <div class="otitle">
                <div>
                    {{photoInfoData.click}}次浏览
                </div>
                分类:经济民生
            </div>
            <lg-preview class="preview"></lg-preview>
            <div>
                <!--九宫格布局图片-->
                <div class="mui-content">
                    <ul class="mui-table-view mui-grid-view mui-grid-9">
                        <li v-for="item in photoImageData"
                            class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                            <img class="img" v-preview="item.src" :src="item.src" alt="">
                        </li>
                    </ul>
                </div>
            </div>
            <div class="content" v-html="photoInfoData.content"></div>
        </div>
        <div>
            <Discuss :discussid="toDiscussid"></Discuss>
        </div>
    </div>
</template>

<style scoped>
    .preview {
        position: absolute;
        top:0px;
        left: 0px;
    }
    .img {
        width: 75px;
        height: 75px;
    }

    .mui-grid-view.mui-grid-9 {
        background-color: white;
    }

    .otitle {
        display: flex;
        justify-content: space-around;
        font-size: 14px;
        color: rgba(1, 1, 1, 0.4);
    }

    .title h3 {
        color: #02C1ED;
        text-align: center;
    }

    .title {
        padding: 5px;
    }

    .content {
        color: darkgray;
    }
</style>

<script type=text/ecmascript-6>
    import common from '../tools/common'
    import Discuss from '../sub/Discuss.vue'
    export default {
        data(){
            return {
                photoInfoData: {},
                photoImageData: [],
                toDiscussid:0
            }
        },
        components:{
            Discuss
        },
        props: ['id'],
        created(){
            var id = this.$route.params.id;
            this.getPhotoDetailInfoData(id)
            this.getPhotoDetailImageData(id)
            this.toDiscussid = id
        },
        methods: {
            getPhotoDetailInfoData(id){
                var url = `${common.HTTP}${common.SERVER_PATH}:${common.PORT}/api/getimageInfo/${id}`
                this.$http.get(url).then(
                        res=> {
                            this.photoInfoData = res.body.message[0]
                        },
                        res=> {
                            console.warn('photodetail页面请求页面数据出错')
                        }
                )
            },
            getPhotoDetailImageData(id){
                var url = `${common.HTTP}${common.SERVER_PATH}:${common.PORT}/api/getthumimages/${id}`
                this.$http.get(url).then(
                        res=> {
                            this.photoImageData = res.body.message
                        },
                        res=> {
                            console.warn('photodetail页面请求页面数据出错')
                        }
                )
            }
        }
    }
</script>

