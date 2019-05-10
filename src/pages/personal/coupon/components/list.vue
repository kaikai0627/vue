<template>
    <div class="discount-list">
        <div v-for="(item,key) of list" :key="key">
            <div class="discount-item clearfix" @click="toggleDetail(item)">
                <div class="discount-lf text-center pull-left">
                    <div class="price">¥<span>{{item.price}}</span></div>
                    <div class="use"><a href="#">立即使用</a></div>
                </div>
                <div class="discount-rt pull-left">
                    <div>酒店携程商旅优惠券</div>
                    <div>{{item.beginDate}}&nbsp;至&nbsp;{{item.endDate}}</div>
                </div>
                <div class="iconfont icon-iconfontxiajiantou icon-arrow" v-show="item.isShow"></div>
            </div>
            <div class="discount-detail"
                 v-show="item.isHide"
                 @click="toggleDetail(item)"
            >
                <div>因私出行，预订任意房型时，可使用获得的优惠劵，每张订单仅限使用一次</div>
                <div class="discount-code">优惠代码&nbsp;{{item.code}}</div>
                <div class="iconfont icon-iconfontshangjiantou icon-arrow" v-show="item.isHide"></div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'CouponList',
        data() {
            return {
                list: [{
                    price: "20",
                    beginDate: "2019-01-01",
                    endDate: "2019-06-01",
                    code: "464564561",
                    isShow: true,
                    isHide: false
                }, {
                    price: "30",
                    beginDate: "2019-03-11",
                    endDate: "2019-08-01",
                    code: "464564222",
                    isShow: true,
                    isHide: false
                }, {
                    price: "50",
                    beginDate: "2019-02-01",
                    endDate: "2019-06-22",
                    code: "092564561",
                    isShow: true,
                    isHide: false
                }, {
                    price: "30",
                    beginDate: "2019-04-01",
                    endDate: "2019-07-02",
                    code: "873564561",
                    isShow: true,
                    isHide: false
                }]
            }
        },
        methods: {
            toggleDetail(id) {
                id.isHide = !id.isHide
                id.isShow = !id.isShow
            }
        }
    }
</script>

<style lang="stylus" type="text/stylus" scoped>
    .discount-list {
        padding: 0 .34rem;

        .discount-item {
            background: #fff;
            margin-top: .2rem;
            position: relative;

            .discount-lf {
                width: 1.95rem;
                padding-top: .15rem;

                .price {
                    color: #BF0000;
                    font-weight: 600;
                    font-size: .32rem;

                    span {
                        font-size: .58rem;
                    }
                }

                .use {
                    a {
                        display: inline-block;
                        padding: .03rem;
                        width: 1.55rem;
                        background: #EF4646;
                        color: #fff !important;
                        font-size: .24rem;
                    }
                }
            }

            .discount-rt {
                width: 4.85rem;
                padding: .3rem 0 .3rem .5rem;
                line-height: .4rem;

                div {
                    &:last-child {
                        color: #999;
                        font-size: .24rem;
                    }
                }
            }
        }

        .icon-arrow {
            font-size: .24rem;
            position: absolute;
            left: 50%;
            bottom: .1rem;
            color: #EF4646;

            &.icon-up {
                background-position-x: -.58rem;
            }

        }

        .discount-detail {
            position: relative;
            background: #fff;
            color: #666;
            font-size: .24rem;
            padding: .15rem .2rem;
            line-height: .4rem;

            .discount-code {
                color: #4FA4F0;
                margin-top: .05rem;
            }
        }
    }
</style>
