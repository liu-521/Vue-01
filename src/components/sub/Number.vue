<template>
    <div class="numberbox">
       <div class="left" @click="sub">
           -
       </div>
        <div class="middle">
            {{count}}
        </div>
        <div class="right" @click="add">
            +
        </div>
    </div>
</template>

<style scoped>
    .numberbox{
        display: flex;
    }
    .left, .right {
        border: 1px solid rgba(1,1,1,0.3);
        width: 30px;
        height: 25px;
        text-align: center;
    }
    .middle {
        border: 1px solid rgba(1,1,1,0.3);
        width: 40px;
        height: 25px;
        text-align: center;
    }
</style>

<script type=text/ecmascript-6>
    export default {
        data(){
            return {
                count:1
            }
        },
        created(){
            this.count = this.initcount > 1 ? this.initcount : 1;
        },
        props:['initcount'],
        methods:{
            add(){
                this.count++
                this.submitCount()
            },
            sub(){
                if(this.count <= 1){
                    this.count = 1
                    return
                }
                this.count--
                this.submitCount()
            },
            // 一旦调用这个方法就会给父组件传值
            submitCount(){
//                const key = 'count'
                this.$emit('count',this.count)
            }
        }
    }
</script>

