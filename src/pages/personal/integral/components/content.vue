<template>
    <div>
        <div class="conversion"></div>
        <div class="coupon-wrap">
            <div class="coupon text-center">
                <div class="coupon-top">50元优惠券<span>5000积分</span></div>
                <div class="coupon-bot">有效期：2018-02-25&nbsp;至&nbsp;2018-02-25</div>
            </div>
            <div class="coupon-title">商品详情</div>
            <div class="coupon-detail">
                吉辉商旅，为旅客提供国内机票，国际机票，酒店，签证等一站式商旅预订服务
            </div>
            <div class="coupon-title">使用规则</div>
            <div class="coupon-detail">
                <p>1、优惠券可用于机票，酒店，签证等产品</p>

                <p>2，优惠券领取后有效期至2018-12-31</p>

                <p>3，使用流程或券码问题，可拨打吉辉商旅客服专线：021-999999，或直接联系在线客服（工作日：09：00至18：00）</p>
            </div>
            <div class="coupon-title">重要声明</div>
            <div class="coupon-detail">
                <p>1、商品一经兑换，一律不退还积分，请用户兑换前仔细参照使用规则、使用说明，有效期等重要信息；</p>

                <p>2，通过非法途径获得积分后进行的正常兑换行为，或不按商品使用规则进行兑换，商家有权不提供服务；</p>

                <p>3，凡以不正当手段（包括但不限于作弊，扰乱系统，实施网络攻击等）进行兑换，平台有权终止该次兑换。</p>
            </div>
            <br/>
            <br/>
            <button type="button" class="btn login-btn">积分不足</button>
            <br/>
            <br/>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'IntegralContent'
    }
</script>

<style lang="stylus" scoped>
    .conversion {
        height: 2.49rem;
        background: url("./bg-02.png") no-repeat;
        background-size: 100%;
    }

    .coupon-wrap {
        padding: 0 .34rem;

        .coupon {
            border-radius: .1rem;
            overflow: hidden;
            margin-top: .15rem;

            .coupon-top {
                padding: .37rem 0 .25rem;
                color: #EF4646;
                background: #fff;
                font-size: .4rem;
                font-weight: bold;

                span {
                    margin-left: .2rem;
                    font-weight: 500;
                    font-size: .32rem;
                }
            }

            .coupon-bot {
                background: #EF4646;
                color: #fff;
            }
        }

        .coupon-title {
            margin: .2rem 0;
            font-weight: 600;
        }

        .coupon-detail {
            line-height: .4rem;
            font-size: .24rem;
        }
    }
</style>
