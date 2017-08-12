<template>
    <div>
        <!--导航条-->
        <!--从mint-ui导入的-->
        <!--<mt-header fixed title="Vue项目"></mt-header>-->

        <mt-header fixed title="Vue项目">
            <router-link to="" slot="left">
                <mt-button v-show="isTrue" @click="goBack" icon="back">返回</mt-button>
            </router-link>
        </mt-header>

        <!--显示切换不同的组件-->
        <router-view></router-view>

        <!--tabbar-->
        <!--从mui中导入的tababr-->
        <nav class="mui-bar mui-bar-tab">
            <router-link class="mui-tab-item" to="/home">
                <span class="mui-icon mui-icon-home"></span>
                <span class="mui-tab-label">首页</span>
            </router-link>
            <router-link class="mui-tab-item" to="/member">
                <span class="mui-icon mui-icon-email"></span>
                <span class="mui-tab-label">会员</span>
            </router-link>
            <router-link class="mui-tab-item" to="/shopcar">
                <span class="mui-icon mui-icon-contact">
                    <span id="badge" class="mui-badge">9</span>
                </span>
                <span class="mui-tab-label">购物车</span>
            </router-link>
            <router-link class="mui-tab-item" to="/search">
                <span class="mui-icon mui-icon-gear"></span>
                <span class="mui-tab-label">搜索</span>
            </router-link>
        </nav>
    </div>
</template>

<style scoped>

</style>

<script>
    import {Linju} from './components/tools/Linju'

    Linju.$on('countNumber',function (numberCount) {
        let badge = document.getElementById('badge')
        var tempcount = badge.innerText - 0
        tempcount+=numberCount
        badge.innerText = tempcount
    })

    export default {
        data(){
            return {
                isTrue: false
            }
        },
        // 监听路由的变化
        watch:{
            '$route':function (newValue,oldValue) {
                console.log(223232323)
                console.log(newValue)
                console.log(oldValue)
//                对比判断是不是/home
                if(newValue.path == '/home') {
                    // 是home页面
                    this.isTrue = false
                } else {
                        // 不是home页面
                    this.isTrue = true
                }
            }
        },
        methods:{
            goBack(){
                this.$router.go(-1)
            }
        }
    }
</script>
