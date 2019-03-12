<template>
    <div class="main">
        <div class="logo text-center">
            <img src="./jihui_big.png" alt=""/>

            <div class="logo-text">吉辉票务</div>
        </div>
        <form action="">
            <div class="login-form">
                <div class="login-item">
                    <i class="iconfont icon-qiye icon-login"></i>
                    <input type="text" placeholder="请输入企业ID号" autocomplete="off"/>
                </div>
                <div class="login-item">
                    <i class="iconfont icon-icon-test icon-login"></i>
                    <input type="text" placeholder="请输入手机号/身份证号码" autocomplete="off"/>
                </div>
                <div class="login-item">
                    <i class="iconfont icon-mima icon-login"></i>
                    <input type="text" placeholder="请输入密码" autocomplete="off"/>
                    <router-link to="/">忘记密码？</router-link>
                </div>
            </div>
            <login-dray></login-dray>
            <div class="text-center">
                <button type="button" class="btn btn-blue login-btn" @click="goPersonal">登录</button>
            </div>
        </form>
        <div class="text-center login-hint">
            <div><i class="iconfont icon-gantanhao"></i>&nbsp;若贵司己是吉辉商旅企业客户</div>
            <div>可联系贵司差旅负责人获取登录账号</div>
        </div>
        <div class="text-center">
            <button type="button" class="btn btn-orange login-btn">新企业注册</button>
        </div>
        <div class="text-center login-hint">
            登录即表示己同意我们的《服务协议和隐私政策》
        </div>
    </div>
</template>

<script>
    import LoginDray from './components/drag'
    export default {
        name: 'Login',
        components: {
            LoginDray
        },
        methods: {
            goPersonal () {
                this.$router.push({path: "/personal/main"})
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .main
        background: url("login-bg.png") no-repeat
        height: 100%
        background-size: 100%

        .logo
            padding: .53rem 0
            color: #fff
            font-size: .2rem


            img
                width: 1.6rem
                height: auto

            .logo-text
                margin-left: -.3rem

        .login-form
            width: 6.8rem
            background: #fff
            border-radius: 4px
            margin: 0 auto

            .login-item
                padding-left: .8rem
                height: 1.1rem
                position: relative
                border-bottom: 1px solid #DCDCDC

                input
                    height: 1.09rem
                    width: 100%
                    background: transparent

                a
                    position: absolute
                    right: 0
                    top: 0
                    display: block
                    height: 1rem
                    line-height: 1.1rem
                    padding-right: .16rem
                    color: #333

                .icon-login
                    position: absolute
                    left: .2rem
                    top: .4rem
                    color: #666
                    font-size: .4rem

            .login-item:last-child
                border: none

        .login-hint
            color: rgba(255, 255, 255, .8)
            margin: .4rem 0 .5rem

</style>
