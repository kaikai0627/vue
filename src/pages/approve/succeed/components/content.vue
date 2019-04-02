<template>
    <div class="succeed text-center">
        <img src="./icon-02.png" alt=""/>
        <div>授权成功</div>
        <br>
        <br>
        <button type="button" class="btn skin btn_skin_themColor login-btn"
            @click="goApproveList"
        >
            返回授权列表
        </button>
    </div>
</template>

<script>
    export default {
        name: 'Succeed',
        methods: {
            goApproveList () {
                this.$router.push({path: "/personal/approve/list"})
            }
        }
    }
</script>

<style lang="stylus" type="text/stylus" scoped>
    .succeed {
        padding: .75rem 0;
        font-size: .3rem;

        div {
            padding: 0 1.2rem;
        }

        img {
            width: 2.45rem;
            margin-bottom: .2rem;
        }

        .login-btn {
            margin-top: .85rem;
        }
    }
</style>
