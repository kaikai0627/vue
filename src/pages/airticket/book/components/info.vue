<template>
    <div>
        <div class="flight-summary" @click="show = !show">
            <i class="iconfont icon-feiji skin font_skin_themeColor"></i>9.28&nbsp;周五&nbsp;青岛-澳门 <i
                class="iconfont icon-iconfontshangjiantou pull-right"></i>
        </div>
        <div class="flight-info" v-show="show">
            <div class="flight-info-item">
                <div class="airline">
                    东方航空MU5331&nbsp;|&nbsp;大&nbsp;|&nbsp;经济舱
                </div>
                <div class="clearfix">
                    <div class="airport-info pull-left">
                        <div class="airport-time">07:00</div>
                        <div class="airport-date">9月28日&nbsp;周五</div>
                        <div class="airport-city">虹桥国际机场T1</div>
                    </div>
                    <div class="flight-arrow text-center pull-left">
                        <div>2h30m</div>
                        <i class="icon-arrow-line"></i>
                    </div>
                    <div class="airport-info pull-left text-right">
                        <div class="airport-time">07:00</div>
                        <div class="airport-date">9月28日&nbsp;周五</div>
                        <div class="airport-city">宝安国际机场T1</div>
                    </div>
                </div>
            </div>
            <div class="flight-info-item">
                <div class="airline">
                    东方航空MU5331&nbsp;|&nbsp;大&nbsp;|&nbsp;经济舱
                </div>
                <div class="clearfix">
                    <div class="airport-info pull-left">
                        <div class="airport-time">07:00</div>
                        <div class="airport-date">9月28日&nbsp;周五</div>
                        <div class="airport-city">虹桥国际机场T1</div>
                    </div>
                    <div class="flight-arrow text-center pull-left">
                        <div>2h30m</div>
                        <i class="icon-arrow-line"></i>
                    </div>
                    <div class="airport-info pull-left text-right">
                        <div class="airport-time">07:00</div>
                        <div class="airport-date">9月28日&nbsp;周五</div>
                        <div class="airport-city">宝安国际机场T1</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="flight-summary" @click="backShow = !backShow">
            <i class="iconfont icon-feiji"></i>9.28&nbsp;周五&nbsp;青岛-澳门
            <i class="iconfont icon-iconfontshangjiantou pull-right"></i></div>
        <div class="flight-info flight-orange" v-show="backShow">
            <div class="flight-info-item">
                <div class="airline">
                    东方航空MU5331&nbsp;|&nbsp;大&nbsp;|&nbsp;经济舱
                </div>
                <div class="clearfix">
                    <div class="airport-info pull-left">
                        <div class="airport-time">07:00</div>
                        <div class="airport-date">9月28日&nbsp;周五</div>
                        <div class="airport-city">虹桥国际机场T1</div>
                    </div>
                    <div class="flight-arrow text-center pull-left">
                        <div>2h30m</div>
                        <i class="icon-arrow-line"></i>
                    </div>
                    <div class="airport-info pull-left text-right">
                        <div class="airport-time">07:00</div>
                        <div class="airport-date">9月28日&nbsp;周五</div>
                        <div class="airport-city">宝安国际机场T1</div>
                    </div>
                </div>
            </div>
            <div class="flight-info-item">
                <div class="airline">
                    东方航空MU5331&nbsp;|&nbsp;大&nbsp;|&nbsp;经济舱
                </div>
                <div class="clearfix">
                    <div class="airport-info pull-left">
                        <div class="airport-time">07:00</div>
                        <div class="airport-date">9月28日&nbsp;周五</div>
                        <div class="airport-city">虹桥国际机场T1</div>
                    </div>
                    <div class="flight-arrow text-center pull-left">
                        <div>2h30m</div>
                        <i class="icon-arrow-line"></i>
                    </div>
                    <div class="airport-info pull-left text-right">
                        <div class="airport-time">07:00</div>
                        <div class="airport-date">9月28日&nbsp;周五</div>
                        <div class="airport-city">宝安国际机场T1</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="cost-content">
            <div class="cost-list">
                <div class="clearfix">
                    <div class="pull-left cost-hd">机票费</div>
                    <div class="pull-left cost-bd"><span>&yen;</span>7568</div>
                </div>
                <div class="clearfix">
                    <div class="pull-left cost-hd">税、燃油</div>
                    <div class="pull-left cost-bd"><span>&yen;</span>50</div>
                </div>
                <div class="clearfix">
                    <div class="pull-left cost-hd">服务费</div>
                    <div class="pull-left cost-bd"><span>&yen;</span>10</div>
                </div>
            </div>
            <div class="vice text-right skin font_skin_themeColor" @click="explainShow = true">
                查看退改签<i class="iconfont icon-iconfontyoujiantou skin font_skin_themeColor"></i>
            </div>
        </div>
        <div class="explain-pop" v-show="explainShow">
            <span class="iconfont icon-cha icon-x" @click="explainShow = false"></span>
            <div class="explain-content">
                <div class="explain-hd">去程退改说明</div>
                <table>
                    <tr>
                        <td class="text-center">更改条件</td>
                        <td>不可更改</td>
                    </tr>
                    <tr>
                        <td>更改条件</td>
                        <td>每成人退票费500元人民币，儿童、
                            婴儿退票费与成人相同，如部分使
                            用后退票，需扣除已使用航段的适
                            用票价以及税款
                        </td>
                    </tr>
                    <tr>
                        <td>签转条件</td>
                        <td>不得签转</td>
                    </tr>
                    <tr>
                        <td>No Show条件<br/>(误机规则)</td>
                        <td>退票至少在首段航班起飞前120分
                            钟办理，否则每成人800元人民币，
                            每儿童800元人民币，每婴儿800
                            元人民币。
                            <br/>回程改期至少在首段航班起飞前
                            120分钟办理否则每成人300元人
                            民币，每儿童300元人民币，每婴
                            儿300元人民币。
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'BookInfo',
        data() {
            return {
                show: true,
                backShow: true,
                explainShow: false
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .flight-summary {
        padding: .25rem .34rem .25rem .9rem;
        background: #fff;
        position: relative;
        margin-bottom: .1rem;

        .icon-feiji {
            position: absolute;
            top: .26rem;
            left: .30rem;
            font-size: .38rem;
            color: #FF7449;
        }
    }

    .flight-orange.flight-info {
        background-color: #F57F52;
        margin-top: .1rem;
    }

    .flight-info {
        padding: 0 .34rem;
        background-color: #258FED;
        color: rgba(255, 255, 255, .9);

        .flight-info-item {
            padding-bottom: .4rem;
            border-bottom: 1px dashed #fff;

            &:last-child {
                border: none;
            }

            .airline {
                padding: .35rem 0;
                font-size: .24rem;
            }

            .airport-info {
                width: 2.45rem;
                height: 1.2rem;
            }

            .airport-time {
                font-size: .6rem;
                color: #fff;
            }

            .airport-date, .airport-city {
                font-size: .22rem;
                margin-bottom: .03rem;
            }

            .flight-arrow {
                width: 1.9rem;
                position: relative;
                height: .6rem;
                margin-top: .2rem;

                div {
                    position: relative;
                    top: -.1rem;
                }

                .icon-arrow-line {
                    position: absolute;
                    top: 50%;
                    left: 0;
                    width: 1.9rem;

                    &:before {
                        content: '';
                        position: absolute;
                        left: 0;
                        top: 0;
                        width: 1.9rem;
                        height: 1px;
                        background: #fff;
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
                        border-color: transparent transparent #fff;
                    }
                }
            }
        }
    }

    .cost-content {
        background: #fff;
        padding: 0 .34rem;
        margin-top: .1rem;
        line-height: .5rem;

        .cost-list {
            padding: .35rem 0;

            .cost-hd {
                width: 1.5rem;
            }

            .cost-bd {
                color: #E31414;
                font-size: .34rem;

                span {
                    font-size: .24rem;
                }
            }
        }

        .vice {
            height: .9rem;
            line-height: .9rem;
            border-top: 1px solid #E5E5E5;
            color: #248FED;
        }
    }

    .explain-pop {
        background: rgba(0, 0, 0, .6);
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        padding: 0 .34rem;
        z-index: 99;

        .icon-cha {
            position: absolute;
            top: .8rem;
            right: .34rem;
            z-index: 99;
            color: #fff;
            font-size: .7rem;
        }

        .explain-content {
            color: #fff;
            height: 8rem;
            overflow: auto;
            position: absolute;
            width: 6.85rem;
            top: 50%;
            left: 50%;
            -webkit-transform: translate(-50%, -50%);
            -moz-transform: translate(-50%, -50%);
            -ms-transform: translate(-50%, -50%);
            -o-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);

            .explain-hd {
                font-size: .36rem;
                margin-bottom: .3rem;
            }

            table {
                width: 100%;

                td {
                    padding: .4rem 0 .4rem .4rem;
                    border: 1px solid #fff;

                    &:first-child {
                        border-left: none;
                        width: 2.2rem;
                    }

                    &:last-child {
                        border-right: none;
                        width: 4.6rem;
                    }
                }
            }
        }
    }
</style>
