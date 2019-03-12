<template>
    <div class="list-wrap">
        <div v-if="list.length >= 1">
            <div class="flight-item"
                 v-for="item of list"
                 :key="item.id"
                 v-if="item.tax"
                 @click="handClickShow"

            >
                <div class="text-right benefit">
                    <span class="pull-left">{{item.type}}</span>{{item.sendCoupon}}&nbsp;送{{item.sendIntegrals}}积分
                </div>
                <div class="clearfix">
                    <div class="airport-info pull-left">
                        <div class="airport-date">{{item.begDate}}</div>
                        <div class="airport-city">{{item.begCity}}</div>
                    </div>
                    <div class="airport-transit text-center pull-left">
                        <div>中转</div>
                        <i class="icon-arrow-line"></i>
                        <div>长沙</div>
                    </div>
                    <div class="airport-info text-right pull-left">
                        <div class="airport-date">{{item.endDate}}</div>
                        <div class="airport-city">{{item.endCity}}</div>
                    </div>
                    <div class="discount pull-left text-center">
                        <div class="flight-price">&yen;<span>{{item.price}}</span></div>
                        <div>往返价{{item.discount}}折</div>
                    </div>
                </div>
                <div class="remark"><i class="pf pf_cz"></i>东方航空&nbsp;MU5331&nbsp;330大&nbsp;有餐食</div>
            </div>
            <div class="flight-date clearfix" v-if="list.length >= 1">
                筛选合适的航班时间
                <ul class="cut-type text-center pull-right">
                    <li class="pull-left active">起飞时间</li>
                    <li class="pull-left">降落时间</li>
                </ul>
            </div>
            <div>
                <ul class="chart-list clearfix">
                    <li class="chart-item pull-left">
                        <div class="chart-progress" style="transform: translateY(.5rem);">
                            <div class="chart-price">&yen;2498</div>
                        </div>
                    </li>
                    <li class="chart-item pull-left">
                        <div class="chart-progress" style="transform: translateY(2rem);">
                            <div class="chart-price">&yen;2498</div>
                        </div>
                    </li>
                    <li class="chart-item pull-left">
                        <div class="chart-progress" style="transform: translateY(1rem);">
                            <div class="chart-price">&yen;2498</div>
                        </div>
                    </li>
                    <li class="chart-item pull-left">
                        <div class="chart-progress" style="transform: translateY(2rem);">
                            <div class="chart-price">&yen;2498</div>
                        </div>
                    </li>
                    <li class="chart-item pull-left">
                        <div class="chart-progress" style="transform: translateY(3rem);">
                            <div class="chart-price">&yen;2498</div>
                        </div>
                    </li>
                    <li class="chart-item pull-left">
                        <div class="chart-progress" style="transform: translateY(2rem);">
                            <div class="chart-price">&yen;2498</div>
                        </div>
                    </li>
                    <li class="chart-item pull-left">
                        <div class="chart-progress" style="transform: translateY(1.5rem);">
                            <div class="chart-price">&yen;2498</div>
                        </div>
                    </li>
                </ul>
                <table class="time-list">
                    <tbody>
                    <tr>
                        <td>0点</td>
                        <td>6点</td>
                        <td>9点</td>
                        <td>12点</td>
                        <td>15点</td>
                        <td>18点</td>
                        <td>21点</td>
                        <td>24点</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div class="no-flight text-center" v-if="list.length < 1">
            <img src="~images/no_result.png" alt="">

            <div>没有找到结果哎~</div>
            <div class="no-btn text-center">
                <button type="button" class="btn skin btn_border_skin_themColors login-btn btn-ellipse">返回首页</button>
            </div>
        </div>
        <!--推荐预订-->
        <div class="filtrate-pop" @click="handClickHide" v-show="recommendPop">
            <div class="filtrate-content" @click.stop>
                <div class="filtrate-hd text-center">
                    根据公司差旅政策，推荐您预订最低价航班
                </div>
                <div class="recommend-bd">
                    <div class="flight-item">
                        <div class="text-right benefit">机场接送+迪士尼门票&nbsp;送1000积分</div>
                        <div class="clearfix">
                            <div class="airport-info pull-left">
                                <div class="airport-date">07:00</div>
                                <div class="airport-city">虹桥国际机场T1</div>
                            </div>
                            <div class="airport-transit text-center pull-left">
                                <div>中转</div>
                                <i class="icon-arrow-line"></i>
                                <div>南京</div>
                            </div>
                            <div class="airport-info text-right pull-left">
                                <div class="airport-date">07:00</div>
                                <div class="airport-city">虹桥国际机场T1</div>
                            </div>
                            <div class="discount pull-right text-right">
                                <div class="flight-price">?<span>7568</span></div>
                            </div>
                        </div>
                        <div class="remark">
                            <i class="pf pf_cz"></i>东方航空&nbsp;MU5331&nbsp;330大&nbsp;有餐食 <span class="pull-right">退票说明</span>
                        </div>
                    </div>
                </div>
                <div class="filtrate-foot clearfix">
                    <button type="button" @click="toBook(0)" class="btn pull-left">预订最低价</button>
                    <button type="button" @click="toBook(1)" class="btn skin btn_skin_themColor pull-left">继续预订原航班</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'BackContent',
        props: {
            list: Array
        },
        data () {
            return {
                recommendPop: false,

            }
        },
        methods: {
            handClickShow () {
                this.recommendPop = true
            },
            handClickHide () {
                this.recommendPop = false
            },
            toBook (is) {
                if (is == 0) {
                    this.$router.push({path: '/airtitcket/book'})
                } else {
                    this.$router.push({path: '/airtitcket/cause'})
                }
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .list-wrap {
        padding-bottom 1.1rem;
    }

    .flight-item
        margin-bottom: .1rem
        background: #fff
        padding: 0 .34rem

        .benefit
            color: #FF5656
            margin-bottom: .15rem
            line-height: .5rem

            span
                padding: 0 .22rem
                height: .39rem
                line-height: .44rem
                color: #fff
                background: #FF6058

    .airport-info
        width: 1.85rem
        margin-top: .2rem

        .airport-date
            font-size: .4rem

        .airport-city
            color: #999
            margin-top: .12rem

    .airport-transit
        width: 1.35rem
        position: relative
        line-height: .55rem

        div
            height: .55rem
            width: 100%

        .icon-arrow-line
            width: 1.35rem
            position: absolute
            left: 0
            top: 46%

        .icon-arrow-line:before
            content: ''
            position: absolute
            left: 0
            top: 0
            width: 1.35rem
            height: 1px
            background: #ccc

        .icon-arrow-line:after
            content: ''
            position: absolute
            right: -1px
            bottom: -1px
            width: 0
            height: 0
            border-style: solid
            border-width: .07rem .07rem .07rem 0
            border-color: transparent transparent #ccc

        .discount
            width: 1.76rem
            padding-left: .1rem

            .flight-price
                color: #FF0202
                font-size: .3rem
                width: 1.76rem
                margin: 0

                span
                    font-size: .4rem

            div
                margin-right: -.1rem

        .remark
            padding: .23rem 0 .3rem .4rem
            border-top: .01rem solid #E5E5E5
            margin-top: .25rem
            position: relative

            i
                position: absolute
                left: 0
                top: .25rem

            span
                color: #248FED

    .flight-date {
        padding: .2rem .34rem;
        line-height: .57rem;
        width: 100%;
        color: #363636;
    }

    .cut-type
        border: 1px solid #258FED
        border-radius: .05rem
        overflow: hidden

        li
            background: #fff
            color: #258FED
            padding: .07rem .25rem
            line-height: normal
            height: .52rem

        li.active
            color: #fff
            background: #258FED
            font-size: .26rem

    .chart-list
        padding: 0 .34rem
        margin-left: -.06rem

        .chart-item
            width: .81rem
            height: 3rem
            background: #fff
            border: 1px solid #E5E5E5
            overflow: hidden
            margin-left: .16rem
            border-radius: .1rem
            color: #248FED

            .chart-progress
                background: #258FED
                height: 100%
                width: 100%
                position: relative
                -webkit-transition: -webkit-transform 1s ease
                transition: -webkit-transform 1s ease
                transition: transform 1s ease, -webkit-transform 1s ease

                .chart-price
                    position: absolute
                    top: -.3rem
                    left: 0
                    width: 100%
                    text-align: center
                    font-size: .24rem

    .time-list
        width: 100%
        margin-left: .2rem

        td
            width: 12.5%
            font-size: .22rem
            color: #248FED

    .filtrate-pop {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 99;
        background: rgba(0, 0, 0, .5);

        .filtrate-content {
            position: absolute;
            bottom: 0;
            background: #fff;
            width: 100%;

            .filtrate-hd {
                padding: 0 .34rem;
                height: .95rem;
                line-height: .95rem;
                font-size: .34rem;
                border-bottom: 1px solid #E7E7E7;

                .btn {
                    margin-top: .24rem;
                    border-radius: .1rem;
                }
            }

            .filtrate-foot {
                border-top: 1px solid #F7F7F7;

                .btn {
                    border-radius: 0;
                    width: 50%;
                    height: 1rem;
                    font-size: .32rem;
                    position: relative;
                    top: 1px;
                    background #fff;
                }
            }
        }
    }
</style>
