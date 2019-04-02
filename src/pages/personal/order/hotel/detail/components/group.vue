<template>
    <div>
        <div class="passenger">
            <div class="passenger-title pull-left"><i class="iconfont icon-ren skin font_skin_themeColor"></i>入住人</div>
            <div class="passenger-content">
                <div>李思思</div>
            </div>
            <div class="passenger-content">
                <div>LISHISHI</div>
            </div>
        </div>
        <div class="info-group">
            <div class="group-content clearfix">
                <div class="group-title pull-left">
                    <i class="iconfont icon-dianhua"></i>
                    联系信息
                </div>
                <div class="group-detail pull-left">
                    86-187****1282
                    <span>l**tu@.163.com</span>
                </div>
            </div>
        </div>
        <div class="info-group">
            <div class="group-content clearfix">
                <div class="group-title pull-left">
                    <i class="iconfont icon-zhangdan1"></i>
                    支付方式
                </div>
                <div class="group-detail pull-left">
                    前台现付
                </div>
            </div>
        </div>
        <div class="info-group">
            <div class="group-content clearfix">
                <div class="group-title pull-left">
                    <i class="iconfont icon-drxx30"></i>
                    担保情况
                </div>
                <div class="group-detail pull-left">
                    无需担保
                </div>
            </div>
        </div>
        <div class="info-group">
            <div class="group-content clearfix">
                <div class="group-title pull-left">
                    <i class="iconfont icon-feiji1"></i>
                    出差目的
                </div>
                <div class="group-detail pull-left">
                    开会
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'DetailGroup'
    }
</script>

<style lang="stylus" type="text/stylus" scoped>
    .passenger {
        margin-top: .1rem;
        background: #fff;
        padding: 0 .34rem 0 2.3rem;
        position: relative;

        .passenger-title {
            position: absolute;
            left: 0.34rem;
            line-height: .9rem;

            .icon-ren {
                font-size: .3rem;
                position: relative;
                margin-right: .1rem;
                color: #258FED;
            }
        }

        .passenger-content {
            border-bottom: 1px solid #E5E5E5;
            line-height: .5rem;
            padding: .2rem 0;

            &:last-child {
                border: none;
            }

            span {
                color: #666;
                font-size: .26rem;
            }
        }
    }

    .info-group {
        background: #fff;
        margin-top: .1rem;
        padding: 0 .34rem;

        .group-content {
            position: relative;
            border-bottom: 1px solid #e5e5e5;
            padding: .3rem 0 .3rem 2rem;

            &:last-child {
                border: none;
            }

            .icon-rt {
                position: absolute;
                right: 0;
                top: 50%;
                margin-top: -.16rem;
            }

            .group-title {
                position: absolute;
                left: 0;
                top: .25rem;
                width: 2rem;
                padding-right: .25rem;
                font-size: .32rem;
                text-align: right;

                i {
                    font-size: .35rem;
                    position: absolute;
                    top: .04rem;
                    left: 0;
                    color: #258FED;
                }
            }

            .group-detail {
                span {
                    color: #666;
                    font-size: .24rem;
                    margin-left: .1rem;
                }
            }
        }
    }
</style>
