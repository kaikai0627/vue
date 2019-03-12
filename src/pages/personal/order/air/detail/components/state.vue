<template>
    <div>
        <div class="order-info">
            <div class="order-state">已成交</div>
            <div class="info-content">预定时间：2018-06-16&nbsp;12:00</div>
            <div class="info-content">订&nbsp;单&nbsp;号&nbsp;：29191019292919292</div>
        </div>
        <div class="order-attention">
            <i class="iconfont icon-gantanhao icon-zhuyi"></i>
            本订单由张三三(卡号:45652)预订，如需订单服务，请联系张三三或者致电携程商旅客服
        </div>
    </div>
</template>

<script>
    export default {
        name: 'DetailState'
    }
</script>

<style lang="stylus" scoped>
    .order-info {
        height: 3rem;
        padding: .6rem 0 0 .72rem;
        background: url("./order-bg.png") center center no-repeat;
        background-size: 100%;
        color: #fff;

        .order-state {
            font-size: .45rem;
            margin-bottom: .25rem;
        }

        .info-content {
            line-height: .4rem;
            color: rgba(255, 255, 255, .9);
            font-size: .24rem;
        }
    }

    .order-attention {
        padding: .2rem .34rem .2rem .95rem;
        font-size: .24rem;
        position: relative;
        background: #fff;

        .icon-zhuyi {
            color: #F32323;
            font-size: .34rem;
            position: absolute;
            left: .34rem;
            top: .3rem;
        }
    }
</style>
