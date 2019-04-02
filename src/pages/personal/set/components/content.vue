<template>
    <div>
        <div class="main">
            <div class="choose-update">
                <span>绑定手机</span>
                <div class="pull-right">去绑定</div>
                <i class="iconfont icon-iconfontyoujiantou icon-rt"></i>
            </div>
            <div class="choose-update" @click="goPwd">
                <span>修改密码</span>
                <i class="iconfont icon-iconfontyoujiantou icon-rt"></i>
            </div>
        </div>
        <button type="button" class="btn skin btn_skin_themColor login-btn">返回</button>
    </div>
</template>

<script>
    export default {
        name: 'SetContent',
        methods: {
            goPwd() {
                this.$router.push({path: "/personal/pwdUpdate"})
            }
        }
    }
</script>

<style lang="stylus" type="text/stylus" scoped>
    .main {
        margin-top: .1rem;
        padding: 0 .34rem;
        background: #fff;

        .choose-update {
            border-bottom: 1px solid #F0F0F0;
            height: .88rem;
            line-height: .88rem;
            font-size: .32rem;
            padding-right: .35rem;
            position: relative;

            div {
                font-size: .28rem;
                color: #999;
            }

            .icon-rt {
                position: absolute;
                top: 0;
                right: 0;
                color: #999;
            }
        }
    }

    .login-btn {
        display: block;
        margin: 1rem auto;
    }
</style>
