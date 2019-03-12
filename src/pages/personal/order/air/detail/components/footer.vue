<template>
    <div>
        <div class="go-pay clearfix">
            <div class="pull-left go-pay-price"><label>总价：</label>¥<span>7568</span></div>
            <div class="go-pay-rt pull-right">
                <div class="pull-left" @click="costShow = !costShow">
                    明细&nbsp;<i class="iconfont icon-iconfontshangjiantou"></i>
                </div>
            </div>
        </div>
        <div class="choose-pop" v-show="costShow" @click="costShow = false">
            <div class="choose-content" @click.stop>
                <div class="choose-hd text-center">费用明细</div>
                <ul class="choose-bd">
                    <li class="choose-item clearfix">
                        <div class="pull-left">机票价</div>
                        <div class="pull-right">¥1040*3人</div>
                    </li>
                    <li class="choose-item clearfix">
                        <div class="pull-left">民航基金&amp;燃料</div>
                        <div class="pull-right">¥50*3人</div>
                    </li>
                    <li class="choose-item clearfix">
                        <div class="pull-left">基础服务费</div>
                        <div class="pull-right">¥45</div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'DetailFooter',
        data () {
            return  {
                costShow: false
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
        border-top: 1px solid #E5E5E5;

        .go-pay-price {
            color: #E31414;
            padding-left: .34rem;

            span {
                font-size: .4rem;
            }

            label {
                color: #363636;
            }
        }

        .go-pay-rt {
            div {
                height: .98rem;
                width: 1.2rem;
                background: #fff;
                position: relative;
            }
        }
    }

    body {
        .choose-content {
            bottom: .98rem;

            .choose-hd {
                height: .9rem;
                line-height: .9rem;
                border-bottom: 1px solid #E5E5E5;
                font-size: .3rem;
                font-weight: bold;
                padding: 0 .34rem;

                span {
                    font-weight: 500;
                    font-size: .28rem;
                }

                b {
                    color: #258FED;
                }
            }
        }
    }
</style>
