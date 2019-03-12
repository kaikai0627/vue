<template>
    <div>
        <div class="property">
            <div class="property-hd">我的资产</div>
            <div class="clearfix">
                <div class="part-item pull-left">
                    <i class="part-icon"></i>

                    <div class="part-title">授权余额<span>(元)</span></div>
                    <div class="part-sub">7,520.00</div>
                </div>
                <div class="part-item pull-left">
                    <i class="part-icon part-icon-2"></i>

                    <div class="part-title">账户余额<span>(元)</span></div>
                    <div class="part-sub">30.00</div>
                </div>
            </div>
        </div>
        <div class="property">
            <div class="property-hd">我的优惠券</div>
            <div class="clearfix">
                <div class="part-item pull-left">
                    <i class="part-icon part-icon-3"></i>

                    <div class="part-title">酒店优惠券<span>(元)</span></div>
                    <div class="part-sub">5张</div>
                </div>
                <div class="part-item pull-left" @click="goCoupon">
                    <i class="part-icon part-icon-4"></i>

                    <div class="part-title">机票优惠券<span>(元)</span></div>
                    <div class="part-sub">3张</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'IndexProperty',
        methods: {
            goCoupon () {
                this.$router.push({path: "/personal/coupon"})
            }
        }
    }
</script>

<style lang="stylus" scoped>

    .property {
        background: #fff;
        padding: 0 .4rem;
        margin-bottom: .1rem;

        .property-hd {
            font-size: .3rem;
            padding: .25rem 0 .2rem;
            border-bottom: 1px solid #E5E5E5;
        }

        .part-item {
            width: 50%;
            margin: .25rem 0;
            position: relative;
            padding-left: .36rem;

            .part-icon {
                display: inline-block;
                width: .25rem;
                height: .25rem;
                background: url("./icon-05.png") no-repeat;
                background-size: 3.44rem;
                position: absolute;
                left: 0;
                top: .1rem;
            }

            .part-icon-2 {
                background-position-x: -.85rem;
            }

            .part-icon-3 {
                background-position-x: -1.76rem;
            }

            .part-icon-4 {
                background-position-x: -2.62rem;
            }

            &::after {
                content: '';
                display: inline-block;
                height: 100%;
                border-left: 1px solid #E5E5E5;
                position: absolute;
                right: 0;
                top: 0;
            }

            &:last-child {
                padding-left: .7rem;

                .part-icon {
                    left: .25rem;
                }

                &::after {
                    border: none;
                }
            }

            .part-title {
                span {
                    font-size: .24rem;
                }
            }

            .part-sub {
                color: #999;
                margin-top: .15rem;
            }
        }
    }

</style>
