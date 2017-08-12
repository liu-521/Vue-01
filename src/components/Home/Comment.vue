<template>
    <div class="temp">
        <Discuss :discussid="commentid"></Discuss>
    </div>
</template>

<style scoped>

</style>

<script type=text/ecmascript-6>
    import Discuss from '../sub/Discuss.vue'
    export default {
        data(){
            return {
                commentid:0
            }
        },
        components:{
            Discuss
        },
        created(){
            let id = this.$route.params.id
            this.commentid = id
        },
        props:['id']

    }
</script>

