<template>
    <div class="order-info">
        <div class="order-code"><i class="iconfont icon-dingdan skin font_skin_themeColor"></i>订单号：<a
                href="javascript:void(0);">20199219191221012</a></div>
        <div class="order-info-list">
            <div class="clearfix">
                <div class="pull-left info-title">产品类型：</div>
                <div class="pull-left">国际机票</div>
            </div>
            <div class="clearfix">
                <div class="pull-left info-title">产品名称：</div>
                <div class="pull-left">上海飞往北京MU344往返机票</div>
            </div>
            <div class="clearfix">
                <div class="pull-left info-title">产品描述：</div>
                <div class="pull-left">上海飞往北京MU344往返机票</div>
            </div>
            <div class="clearfix">
                <div class="pull-left info-title">交易金额：</div>
                <div class="pull-left info-price">¥<span>7568</span></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'PayInfo'
    }
</script>

<style lang="stylus" type="text/stylus" scoped>
    .order-info {
        padding: 0 .34rem;
        background: #fff;

        .order-code {
            border-bottom: 1px solid #E5E5E5;
            height: .88rem;
            line-height: .88rem;
            font-size: .3rem;
            position: relative;
            padding-left: .44rem;

            i {
                margin-right: .2rem;
                position: absolute;
                left: 0;
            }

            a {
                color: #363636;
            }
        }

        .order-info-list {
            line-height: .65rem;
            padding: .3rem 0;

            .info-title {
                color: #666;
            }

            .info-price {
                color: #FF0202;
            }

            .info-price span {
                font-size: .36rem;
            }
        }
    }
</style>
