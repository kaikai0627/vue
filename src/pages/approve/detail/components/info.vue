<template>
    <div>
        <div class="submitter text-center">张三7月18日&nbsp;11:47提交</div>
        <div class="flight-info">
            <div class="order-code-box">
                <i class="iconfont icon-feiji icon-flight skin font_skin_themeColor"></i>&nbsp;订单号：51221229291919191
                <span class="order-cc">CC</span>

                <div class="pull-right order-detail">
                    <span class="skin font_skin_themeColor">明细</span>
                    <i class="iconfont icon-iconfontyoujiantou"></i>
                </div>
            </div>
            <div class="flight-item">
                <div class="depart"><span class="text-center skin btn_skin_themColor">去程</span>9月17日&nbsp;周日&nbsp;上海-芝加哥
                </div>
                <div class="airline">东方航空/MU5331/330大/经济舱/时长:14h35m</div>
                <div class="clearfix text-center">
                    <div class="airport-info pull-left">
                        <div class="time">12:00</div>
                        <div class="airport">浦东机场</div>
                    </div>
                    <div class="arrow pull-left"><i class="icon-arrow-line"></i></div>
                    <div class="airport-info pull-left">
                        <div class="time">12:00</div>
                        <div class="airport">浦东机场</div>
                    </div>
                </div>
            </div>
            <div class="low_price text-center">最低价¥7568/张 四川航空3U7995/4折</div>
            <div class="approve-foot clearfix">
                <span class="approve-price"><label>总价：</label>¥<span>7568</span></span>

                <div class="pull-right">
                    <button type="button" class="btn btn-white btn-corner-small">退改签</button>
                    <button type="button" class="btn skin btn_skin_themColor btn-corner-small">差旅标准</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'DetailInfo'
    }
</script>

<style lang="stylus" type="text/stylus" scoped>
    .submitter {
        padding: .25rem 0;
        font-size: .24rem;
    }

    .flight-info {
        background: #fff;
        padding: 0 .34rem;

        .order-code-box {
            padding: .3rem 0;
            border-bottom: 1px solid #E5E5E5;
            font-size: .26rem;

            .icon-feiji {
                font-size: .3rem;
                position: relative;
                top: .02rem;
            }

            .order-cc {
                color: #F46D3F;
                border: 1px solid #F46D3F;
                font-size: .22rem;
                padding: 0 .1rem;
                margin-left: .15rem;
            }

            .order-detail {
                span {
                    font-size: .24rem;
                    padding-right: .2rem;
                }

                i {
                    font-size: .3rem;
                    position: relative;
                    top: .03rem;
                    color: #999;
                }
            }
        }

        .flight-item {
            background: #fff;
            padding: .3rem 0 0;

            .depart {
                span {
                    display: inline-block;
                    border-radius: .1rem;
                    color: #fff;
                    padding: .05rem .15rem;
                    font-size: .26rem;
                    margin-right: .1rem;
                }
            }

            .airline {
                color: #666;
                font-size: .24rem;
                margin: .15rem 0;
            }

            .airport-info {
                width: 2rem;

                .time {
                    font-size: .36rem;
                }

                .airport {
                    color: #999;
                    font-size: .24rem;
                    padding: .05rem 0;
                }
            }

            .arrow {
                position: relative;
                width: 2.75rem;
                height: .9rem;
                display: inline-block;

                .icon-arrow-line {
                    width: 2rem;
                    position: absolute;
                    left: 50%;
                    top: .2rem;
                    margin-left: -1rem;

                    &::before {
                        content: '';
                        position: absolute;
                        left: 0;
                        top: 0;
                        width: 2rem;
                        height: 1px;
                        background: #ccc;
                    }

                    &::after {
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
        }

        .low_price {
            color: #104C81;
            font-size: .26rem;
            background: #ACD4F7;
            height: .58rem;
            line-height: .58rem;
            margin-top: .1rem;
        }

        .approve-foot {
            padding: .3rem 0;

            button {
                width: 1.7rem;
                height: .59rem;
                margin-left: .1rem;
                font-size: .26rem;
            }

            .approve-price {
                color: #FF0202;

                label {
                    color: #333;
                }

                span {
                    font-size: .4rem;
                    line-height: .6rem;
                }
            }
        }
    }
</style>
