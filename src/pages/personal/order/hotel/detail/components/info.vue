<template>
    <div class="hotel-info">
        <div class="hotel-site">
            上海国丰大酒店<span class="xy">协议</span><span class="remark">大河路88号(国丰酒店旁)</span>
        </div>
        <div class="room-info">
            <div class="room-hd">豪华房 <span>8月12日-8月13日&nbsp;1晚</span></div>
            <div class="room-bd">1间&nbsp;|&nbsp;大床/双床&nbsp;|&nbsp;单早&nbsp;|&nbsp;23:59前到店</div>
        </div>
        <div class="seek text-right">
            <span>地图导航</span>
            <span>联系酒店</span>
        </div>
        <div class="send-list">
            <table>
                <tbody>
                <tr>
                    <td class="send-01">
                        <i class="iconfont icon-feiji skin font_skin_themeColor icon-flight"></i>
                        <div>上海送机</div>
                        <div class="send-sub">从上海国丰酒店出发</div>
                    </td>
                    <td class="send-02">
                        <span class="hotel-price">¥<span>568</span></span>/起
                    </td>
                    <td class="send-03">
                        <div class="book-btn text-center">
                            <div class="pull-left">预订</div>
                            <div class="pull-left">超低价</div>
                        </div>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'DetailInfo'
    }
</script>

<style lang="stylus" type="text/stylus" scoped>
    .hotel-info {
        margin-top: .1rem;
        background: #fff;
        padding: 0 .34rem;


        .hotel-site {
            font-size: .28rem;
            padding: .2rem 0;

            .xy {
                display: inline-block;
                height: .4rem;
                line-height: .4rem;
                width: .8rem;
                color: #258FED;
                border: 1px solid #258FED;
                border-radius: .1rem;
                margin: 0 .2rem;
                text-align: center;
            }

            .remark {
                color: #666;
                font-size: .24rem;
            }
        }


        .room-info {
            border-bottom: 1px solid #E5E5E5;
            padding: 0 0 .2rem;

            .room-hd {
                font-size: .4rem;

                span {
                    color: #999;
                    font-size: .24rem;
                }
            }

            .room-bd {
                font-size: .24rem;
                color: #999;
            }
        }

        .seek {
            color: #2C7AD3;
            padding: .25rem 0 0;

            span {
                margin-left: .4rem;
            }

        }

        .send-list {
            padding-bottom: .3rem;

            .send-01 {
                width: 3.9rem;
                position: relative;
                padding-left: .65rem;

                .icon-flight {
                    font-size: .35rem;
                    margin-right: .1rem;
                    position: absolute;
                    top: .35rem;
                    left: 0;
                }

                .send-sub {
                    color: #666;
                    font-size: .24rem;
                    margin-top: .05rem;
                }
            }

            .send-02 {
                width: 2rem;

                .hotel-price {
                    color: #FF0202;

                    span {
                        font-size: .4rem;
                    }
                }
            }

            .send-03 {
                width: .9rem;
                padding: .2rem 0;

                .book-btn {
                    border: 1px solid #258FED;
                    overflow: hidden;
                    border-radius: .1rem;
                    width: .9rem;

                    div {
                        height: .42rem;
                        line-height: .42rem;
                        font-size: .24rem;
                        width: .9rem;

                        &:last-child {
                            color: #258FED;
                            background: #fff;
                        }

                        &:first-child {
                            color: #fff;
                            background: #258FED;
                        }
                    }
                }
            }
        }
    }
</style>
