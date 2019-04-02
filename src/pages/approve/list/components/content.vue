<template>
    <div class="approve-list">
        <div class="approve-item">
            <div class="approve-hd">
                <i class="iconfont icon-feiji icon-flight skin font_skin_themeColor"></i><span class="city">重庆</span><span class="approve-arrow" style="position: relative"><i class="icon-arrow-line"></i></span><span class="city">武汉</span><span class="process">(单程)</span><span class="approve-cc">CC</span>
                <span class="pull-right">申请人：张三</span>
            </div>
            <div class="approve-bd">
                <div class="clearfix">
                    <div class="approve-title pull-left">出发：</div>
                    <div class="approve-detail pull-left">2018年7月19日</div>
                </div>
                <div class="clearfix">
                    <div class="approve-title pull-left">返回：</div>
                    <div class="approve-detail pull-left">2018年7月19日</div>
                </div>
                <div class="clearfix">
                    <div class="approve-title pull-left">创建时间：</div>
                    <div class="approve-detail pull-left">2018年7月19日&nbsp;11:11:11</div>
                </div>
                <div class="clearfix">
                    <div class="approve-title pull-left">出差人：</div>
                    <div class="approve-detail pull-left">张三等5人</div>
                </div>
                <div class="clearfix">
                    <div class="approve-title pull-left">出差目的：</div>
                    <div class="approve-detail pull-left">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Culpa doloribus illo natus, numquam odit velit voluptate?
                    </div>
                </div>
            </div>
            <div class="approve-foot clearfix">
                <span class="approve-price">¥<span>7568</span></span>
                <div class="pull-right">
                    <button type="button" class="btn btn-white btn-corner-small">拒绝</button>
                    <button type="button" class="btn skin btn_skin_themColor btn-corner-small">授权通过</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'ListContent',
        methods: {
            goDetail() {
                this.$router.push({path: "/personal/approve/detail"})
            }
        }
    }
</script>

<style lang="stylus" type="text/stylus" scoped>
    .approve-list {
        padding: .2rem .34rem;

        .approve-item {
            background: #fff;
            border-radius: .1rem;
            margin-bottom: .1rem;

            .approve-hd {
                height: .88rem;
                line-height: .88rem;
                border-bottom: 1px solid #E5E5E5;
                padding: 0 .2rem;

                .approve-arrow {
                    position: relative;
                    width: 1rem;
                    display: inline-block;

                    .icon-arrow-line {
                        width: 1rem;
                        position: absolute;
                        left: 0;
                        top: -.1rem;

                        &::before {
                            content: '';
                            position: absolute;
                            left: 0;
                            top: 0;
                            width: 1rem;
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

                .iconfont {
                    font-size: .4rem;
                    position: relative;
                    top: .05rem;
                }

                .city {
                    margin: 0 .1rem;
                    font-size: .3rem;
                }

                .process {
                    color: #666;
                    font-size: .24rem;
                }

                .approve-cc {
                    color: #F46D3F;
                    border: 1px solid #F46D3F;
                    font-size: .22rem;
                    padding: 0 .1rem;
                    margin-left: .15rem;
                }
            }

            .approve-bd {
                line-height: .6rem;
                padding: .25rem .2rem;
                position: relative;
                overflow: hidden;

                .approve-result {
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
                }

                .approve-title {
                    width: 1.5rem;
                    font-size: .3rem;
                }

                .approve-detail {
                    font-size: .26rem;
                    width: 4.8rem;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }
            }

            .approve-foot {
                border-top: 1px solid #E5E5E5;
                padding: .3rem .25rem;

                button {
                    width: 1.7rem;
                    height: .59rem;
                    margin-left: .1rem;
                    font-size: .26rem;
                }

                .approve-price {
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
