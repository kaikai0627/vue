<template>
    <div>
        <pay-header></pay-header>
        <pay-info></pay-info>
        <pay-type @chang="handShow"></pay-type>
        <pay-password :credit="pwdShow"></pay-password>
        <div class="text-center form-submit">
            <button type="button" class="btn skin btn_skin_themColor login-btn">立即支付</button>
            <button type="button" class="btn login-btn" @click="back">返回</button>
        </div>
    </div>
</template>

<script>
    import PayHeader from './components/header'
    import PayInfo from './components/info'
    import PayType from './components/type'
    import PayPassword from './components/password'
    export default {
        name: 'Pay',
        data () {
            return {
                pwdShow: false
            }
        },
        components: {
            PayHeader,
            PayInfo,
            PayType,
            PayPassword
        },
        methods: {
            handShow (pd) {
                this.pwdShow = pd
            },
            back () {
                window.history.go(-1)
            }
        }
    }
</script>

<style lang="stylus" type="text/stylus" scoped>
    .form-submit{
        margin-top: .9rem;

        button{
            margin:  .23rem 0;
        }
    }
</style>
