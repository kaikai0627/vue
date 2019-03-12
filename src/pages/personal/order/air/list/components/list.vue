<template>
    <div class="order-list">
        <div class="order-item" @click="goDetail">
            <div class="order-hd">
                <i class="iconfont icon-feiji skin font_skin_themeColor icon-flight"></i><span class="city">重庆</span>
                <span class="order-arrow"><i class="icon-arrow-line"></i></span><span class="city">武汉</span><span
                    class="process">(单程)</span><span class="order-cc">CC</span>
            </div>
            <div class="order-bd">
                <div class="order-result">已成交</div>
                <div class="clearfix">
                    <div class="order-title pull-left text-right">出发：</div>
                    <div class="order-detail pull-left">2018年7月19日</div>
                </div>
                <div class="clearfix">
                    <div class="order-title pull-left text-right">乘机人：</div>
                    <div class="order-detail pull-left">张三</div>
                </div>
            </div>
            <div class="order-foot clearfix">
                <span class="order-price pull-right">¥<span>7568</span></span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'AirList',
        methods: {
            goDetail() {
                this.$router.push({path: "/personal/order/air/detail"})
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .order-list {
        padding: .2rem .34rem;

        .order-item {
            background: #fff;
            border-radius: .1rem;
            margin-bottom: .1rem;

            .order-hd {
                height: .88rem;
                line-height: .88rem;
                border-bottom: 1px solid #E5E5E5;
                padding: 0 .2rem;

                .order-arrow {
                    position: relative;
                    width: 1rem;
                    display: inline-block;

                    .icon-arrow-line {
                        width: 1rem;
                        position: absolute;
                        left: 0;
                        top: -.1rem;

                        &:before {
                            content: '';
                            position: absolute;
                            left: 0;
                            top: 0;
                            width: 1rem;
                            height: 1px;
                            background: #ccc;
                        }

                        &:after {
                            content: '';
                            position: absolute;
                            right: -1px;
                            bottom: -1px;
                            width: 0;
                            height: 0;
                            border-style: solid;
                            border-width: .07rem .07rem .07rem 0;
                            border-color: transparent transparent #ccc;
                        }
                    }
                }

                .icon-flight {
                    font-size: .35rem;
                    position: relative;
                    top: .02rem;
                }

                .city {
                    margin: 0 .1rem;
                    font-size: .3rem;
                }

                .process {
                    color: #666;
                    font-size: .24rem;
                }

                .order-cc {
                    color: #F46D3F;
                    border: 1px solid #F46D3F;
                    font-size: .22rem;
                    padding: 0 .1rem;
                    margin-left: .15rem;
                }
            }

            .order-bd {
                line-height: .6rem;
                padding: .25rem .2rem;
                position: relative;
                overflow: hidden;

                .order-result {
                    position: absolute;
                    right: 0;
                    top: 0;
                    background: #ED7925;
                    width: 1.43rem;
                    height: .45rem;
                    line-height: .45rem;
                    border-top-left-radius: 1rem;
                    border-bottom-left-radius: 1rem;
                    color: #fff;
                    text-align: center;
                    box-shadow: 0 1px .1rem #ED7925;

                    &.cancel {
                        background: #999;
                        box-shadow: 0 1px .1rem #999;
                    }
                }

                .order-title {
                    width: 1.5rem;
                    font-size: .3rem;
                    padding-right: .2rem;
                }

                .order-detail {
                    font-size: .26rem;
                    width: 4.8rem;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }
            }

            .order-foot {
                border-top: 1px solid #E5E5E5;
                padding: .15rem .25rem;

                .order-price {
                    color: #FF0202;

                    span {
                        font-size: .4rem;
                        line-height: .6rem;
                    }
                }
            }
        }
    }
</style>
