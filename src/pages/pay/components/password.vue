<template>
    <div class="credit-list" v-show="credit">
        <div class="credit-item">
            <div class="credit-title pull-left">支付密码</div>
            <input type="text" :placeholder="payPwdHint"
                   :class="{'error-ipt': setError}"
                   v-model="payPwd"
                    @blur="getPwd"
            />
        </div>
        <div class="credit-item">
            <div class="credit-title pull-left">短信验证码</div>
            <input type="text" placeholder="请输入短信验证码"
                   :class="{'error-ipt': setError}"
                   v-model="isCode"
            />
            <button type="button" :disabled="isDisabled"
                    class="btn skin btn_border_skin_themColors btn-v-code btn-corner-small"
                    @click="codeBtn"
            >
                {{btn}}
            </button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'payPassword',
        props: {
            credit: Boolean
        },
        data() {
            return {
                pwdShow: false,
                setError: false,
                payPwd: "",
                payPwdHint: "请输入支付密码",
                codeError: false,
                isDisabled: false,
                btn: "获取验证码",
                s: 60,
                isCode: "",
                codeHint: "请输入短信验证码"
            }
        },
        methods: {
            getPwd () {
                if (this.payPwd == '') {
                    this.setError = true
                    this.payPwdHint = "支付密码不能为空"
                } else {
                    this.setError = false
                    this.payPwdHint = "请输入支付密码"
                }
            },
            codeBtn () {
                this.isDisabled = true
                this.enableCodeBtn()
            },
            enableCodeBtn () {
                this.btn = this.s + "秒后重新获取"
                if (this.s > 0) {
                    this.s--
                    setTimeout(this.enableCodeBtn,1000)
                } else {
                    this.isDisabled = false
                    this.btn = "获取验证码"
                    this.s = 60
                }
            }
        }
    }
</script>

<style lang="stylus" type="text/stylus" scoped>
    .credit-list {
        margin-top: .1rem;
        background: #fff;
        padding: 0 .34rem;

        .credit-item {
            height: 1.1rem;
            line-height: 1.1rem;
            padding-left: 1.7rem;
            position: relative;
            border-bottom: 1px solid #E5E5E5;

            &:last-child {
                border: none;
            }

            .credit-title {
                margin-left: -1.7rem;
            }

            input {
                height: 100%;
                width: 100%;
                background: transparent;
                padding-right: 2rem;
            }

            .btn {
                position: absolute;
                right: 0;
                top: 50%;
                margin-top: -.25rem;
            }
        }
    }
</style>
