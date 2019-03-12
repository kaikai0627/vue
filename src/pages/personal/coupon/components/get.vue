<template>
    <div class="discount-bg">
        <div class="discount-price">您有¥650优惠券<a href="javascript:void(0);">马上领取</a></div>
    </div>
</template>

<script>
    export default {
        name: 'CouponGet'
    }
</script>

<style lang="stylus" scoped>
    .discount-bg {
        height: 2.49rem;
        background: url("./bg-01.png") no-repeat;
        background-size: 100%;

        .discount-price {
            font-size: .36rem;
            color: rgba(255, 255, 255, .9);
            text-align: center;
            padding-top: .2rem;

            a {
                color: #FF6337;
                background: #fff;
                width: 1.8rem;
                padding: .05rem 0;
                display: inline-block;
                margin-left: .2rem;
            }
        }
    }
</style>
