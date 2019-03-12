<template>
    <div>
        <div class="go-pay clearfix">
            <div class="pull-left go-pay-price">¥<span>7568</span></div>
            <div class="go-pay-rt pull-right">
                <div class="pull-left" @click="priceDetail = !priceDetail">
                    明细&nbsp;<i class="iconfont icon-iconfontshangjiantou"></i>
                </div>
                <button type="button"
                        class="pull-right btn skin btn_skin_themColor"
                        @click="goPay"
                >
                    提交
                </button>
            </div>
        </div>
        <div class="choose-pop text-center" v-show="priceDetail" @click="priceDetail = false">
            <div class="choose-content" @click.stop>
                <div class="choose-bd">
                    <div class="choose-item clearfix">
                        <div class="pull-left">票价</div>
                        <div class="pull-right">¥<span class="price">555</span>×2人</div>
                    </div>
                    <div class="choose-item clearfix">
                        <div class="pull-left">服务费</div>
                        <div class="pull-right">¥<span class="price">25</span>×2人</div>
                    </div>
                    <div class="choose-item clearfix">
                        <div class="pull-left">总额</div>
                        <div class="pull-right">¥<span class="price">555</span></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'BookFooter',
        data () {
            return {
                priceDetail: false,
            }
        },
        methods: {
            goPay () {
                this.$router.push({path: "/pay"})
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .go-pay {
        position: fixed;
        bottom: 0;
        left: 0;
        background: #fff;
        line-height: .98rem;
        z-index: 11;

        .go-pay-price {
            color: #E31414;
            padding-left: .5rem;

            span {
                font-size: .4rem;
            }
        }

        .go-pay-rt {
            width: 4rem;

            div {
                height: .98rem;
                width: 1.2rem;
                background: #fff;
                position: relative;
            }

            .btn {
                height: .98rem;
                width: 2.75rem;
                font-size: .36rem;
                border-radius: 0;
            }
        }
    }

    div.choose-content {
        bottom: .98rem;
    }
</style>
