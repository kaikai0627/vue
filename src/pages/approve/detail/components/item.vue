<template>
    <div class="detail-info">
        <div class="detail-item">
            <div class="detail-title">联系信息</div>
            2598421641654
        </div>
        <div class="detail-item">
            <div class="detail-title">支付方式</div>
            企业钱包授权支付
        </div>
        <div class="detail-item">
            <div class="detail-title">报销凭证</div>
            无需凭证
        </div>
        <div class="detail-item">
            <div class="detail-title">发票抬头</div>
            上海红旅票务服务
        </div>
        <div class="detail-item">
            <div class="detail-title">税务编号</div>
            1645645641
        </div>
        <div class="detail-item">
            <div class="detail-title">收&nbsp;&nbsp;件&nbsp;&nbsp;人</div>
            张三
        </div>
        <div class="detail-item">
            <div class="detail-title">地&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;址</div>
            上海红旅票务服务
        </div>
    </div>
</template>

<script>
    export default {
        name: 'DetailItem'
    }
</script>

<style lang="stylus" type="text/stylus" scoped>
    .detail-info {
        background: #fff;
        padding: .2rem .34rem;
        line-height: .5rem;

        .detail-item {
            position: relative;
            padding-left: 1.45rem;
            color: #999;

            .detail-title {
                position: absolute;
                left: 0;
                color: #121212;
            }
        }
    }
</style>
