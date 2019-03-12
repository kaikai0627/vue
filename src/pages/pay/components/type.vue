<template>
    <div class="pay-type">
        <div class="pay-hd"><span class="skin font_skin_themeColor">¥</span>支付方式</div>
        <div class="pay-type-list">
            <div class="pay-type-item">
                <label class="radio-choose pull-left radio_skin_color">
                    <i class="pay-icon"></i>钱包授信支付

                    <input type="radio" id="type1" name="type"
                           :checked="payType == 0" class="hidden"
                           @click="chooseType(0)"
                    />
                    <label for="type1"></label>
                </label>
            </div>
            <div class="pay-type-item">
                <label class="radio-choose pull-left radio_skin_color">
                    <i class="pay-icon pay-icon-02"></i>钱包授信支付

                    <input type="radio" id="type2" name="type"
                           :checked="payType == 1" class="hidden"
                           @click="chooseType(1)"
                    />
                    <label for="type2"></label>
                </label>
            </div>
            <div class="pay-type-item">
                <label class="radio-choose pull-left radio_skin_color">
                    <i class="pay-icon pay-icon-03"></i>钱包授信支付

                    <input type="radio" id="type3" name="type"
                           :checked="payType == 2" class="hidden"
                           @click="chooseType(2)"
                    />
                    <label for="type3"></label>
                </label>
            </div>
        </div>
        <div class="balance clearfix">
            <div class="pull-right text-right">
                <div class="pull-left">授信余额：<span>¥7568</span></div>
                <div class="pull-left">本次扣款：<span>¥7568</span></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'PayType',
        data () {
            return {
                payType: 0
            }
        },
        methods: {
            chooseType (is) {
                this.payType = is
                if (is == 1) {
                    this.pwdShow = true
                    this.$emit('chang', true)
                } else {
                    this.$emit('chang', false)
                }
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .pay-type {
        margin-top: .1rem;
        background: #fff;
        padding: 0 .34rem;

        .pay-hd {
            font-size: .3rem;
            border-bottom: 1px solid #E5E5E5;
            height: .88rem;
            line-height: .88rem;
            position: relative;
            padding-left: .44rem;

            span {
                color: #258FED;
                position: absolute;
                left: 0;
                padding-left: .05rem;
            }
        }

        .pay-type-item {
            height: 1.1rem;
            line-height: 1.1rem;
            padding-left: 1rem;
            position: relative;

            .radio-choose {
                width: 100%;
                padding: 0;

                label {
                    position: absolute;
                    right: .34rem;
                    top: 50%;
                }

                .pay-icon {
                    display: inline-block;
                    width: .71rem;
                    height: .71rem;
                    background: url("./icon-04.png") no-repeat;
                    position: absolute;
                    left: -1rem;
                    top: 50%;
                    margin-top: -.355rem;
                    background-size: 3.22rem;
                }

                .pay-icon-02 {
                    background-position-x: -1.22rem;
                }

                .pay-icon-03 {
                    background-position-x: -2.51rem;
                }
            }
        }

        .balance {
            height: .95rem;
            line-height: .95rem;
            border-top: 1px solid #E5E5E5;

            span {
                color: #FF0202;
            }

            div {
                margin-left: .35rem;
            }
        }
    }
</style>
