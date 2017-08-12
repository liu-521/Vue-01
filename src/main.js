
import Vue from 'vue'
import App from './app.vue'
// 引入mint-ui  官网就有提示
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)

// 导入mui中的样式
import './statics/css/mui.min.css'


// 导入vueRouter
import VueRouter from 'vue-router'
Vue.use(VueRouter)
// 导入vueResource
import VueResource from 'vue-resource'
Vue.use(VueResource)

// 引入Home组件
import Home from './components/Home/Home.vue'
import Member from './components/Member.vue'
import Shopcar from './components/Shopcar.vue'
import Search from './components/Search.vue'
import NewsList from './components/Home/NewsList.vue'
import NewsDetail from './components/Home/NewsDetail.vue'
import PhotoList from './components/Home/PhotoList.vue'
import PhotoDetail from './components/Home/PhotoDetail.vue'
import GoodsList from './components/Home/GoodsList.vue'
import GoodsDetail from './components/Home/GoodsDetail.vue'
import GoodsDesc from './components/Home/GoodsDesc.vue'
import Comment from './components/Home/Comment.vue'

// 引入全局的css
import './root.css'

import moment from 'moment'
// 创建全局的过滤器
Vue.filter('filter',function (input,fmtString) {
    return moment(input).format(fmtString)
})

// 引入图片预览功能插架
import vuePicturePreview from 'vue-picture-preview'
Vue.use(vuePicturePreview)

let router = new VueRouter({
    linkActiveClass:'mui-active',
    routes:[
        {name:'root',path:'/',redirect:'/home'},
        {name:'home',path:'/home',component:Home},
        {name:'member',path:'/member',component:Member},
        {name:'shopcar',path:'/shopcar',component:Shopcar},
        {name:'search',path:'/search',component:Search},
        {name:'newsList',path:'/newsList',component:NewsList},
        {name:'newsDetail',path:'/newsDetail/:id',component:NewsDetail},
        {name:'photoList',path:'/photoList',component:PhotoList},
        {name:'photoDetail',path:'/photoDetail/:id',component:PhotoDetail},
        {name:'goodsList',path:'/goodsList',component:GoodsList},
        {name:'goodsDetail',path:'/goodsDetail/:id',component:GoodsDetail},
        {name:'goodsDesc',path:'/goodsDesc',component:GoodsDesc},
        {name:'comment',path:'/comment',component:Comment},
    ]
})

new Vue({
    el:'#app',
    router,
    // render:function (create) {
    //     create(App)
    // }
    render:create=>create(App)
})