<template>
    <div class="order-info">
        <div class="order-state">已取消</div>
        <div class="info-content">预定时间：2018-06-16&nbsp;12:00</div>
        <div class="info-content">订&nbsp;单&nbsp;号&nbsp;：29191019292919292</div>
        <div class="info-content"><b>当前订单申请参加了预订反劵活动</b></div>
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
</style>
