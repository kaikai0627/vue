<template>
    <div>
        <div class="choose-title">请选择您所需要的舱位</div>
        <div class="space-list">
            <div class="space-item">
                <div class="space-bd clearfix">
                    <div class="space-01 pull-left">
                        <div class="space-title">经济舱</div>
                        <div class="space-discount">2.0折</div>
                    </div>
                    <div class="space-02 pull-left text-center">
                        <div class="space-price">¥<span>7568</span></div>
                        <div>余票2张</div>
                    </div>
                    <div class="space-03 pull-left text-right">
                        <button type="button" class="btn skin btn_skin_themColor"
                                @click="handGo"
                        >
                            预订
                        </button>
                    </div>
                </div>
                <div class="sub-ps clearfix">
                    <span class="pull-left skin font_skin_themeColor">退改规则</span>
                    <span class="pull-right">机场接送+迪士尼门票&nbsp;送1000积分</span>
                </div>
            </div>
            <div class="space-item">
                <div class="space-bd clearfix">
                    <div class="space-01 pull-left">
                        <div class="space-title">经济舱</div>
                        <div class="space-discount">2.0折</div>
                    </div>
                    <div class="space-02 pull-left text-center">
                        <div class="space-price">¥<span>7568</span></div>
                        <div>余票2张</div>
                    </div>
                    <div class="space-03 pull-left text-right">
                        <button type="button" class="btn skin btn_skin_themColor"
                                @click="handGo"
                        >
                            预订
                        </button>
                    </div>
                </div>
                <div class="sub-ps clearfix">
                    <span class="pull-left skin font_skin_themeColor">退改规则</span>
                    <span class="pull-right">机场接送+迪士尼门票&nbsp;送1000积分</span>
                </div>
            </div>
            <div class="space-item">
                <div class="space-bd clearfix">
                    <div class="space-01 pull-left">
                        <div class="space-title">经济舱</div>
                        <div class="space-discount">2.0折</div>
                    </div>
                    <div class="space-02 pull-left text-center">
                        <div class="space-price">¥<span>7568</span></div>
                        <div>余票2张</div>
                    </div>
                    <div class="space-03 pull-left text-right">
                        <button type="button" class="btn skin btn_skin_themColor"
                            @click="handGo"
                        >
                            预订
                        </button>
                    </div>
                </div>
                <div class="sub-ps clearfix">
                    <span class="pull-left skin font_skin_themeColor">退改规则</span>
                    <span class="pull-right">机场接送+迪士尼门票&nbsp;送1000积分</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'SpaceChoose',
        methods: {
            handGo () {
                this.$router.push({path: '/airtitcket/backList'})
            }
        }
    }
</script>

<style lang="stylus" type="text/stylus" scoped>
    @import '~styles/varibles.styl'
    .choose-title {
        padding: .3rem $normElDest;
        font-size: .26rem;
    }

    .space-item {
        margin-bottom: .1rem;
        background: #fff;
        padding: 0 .34rem;
    }

    .space-bd {
        padding: .2rem 0;
    }

    .space-01 {
        width: 2.9rem;
    }

    .space-title {
        font-size: .4rem;
    }

    .space-discount {
        color: #666;
        font-size: .28rem;
        padding-left: .2rem;
    }

    .space-02 {
        width: 2.2rem;
    }

    .space-price {
        color: #FF0202;
        font-size: .3rem;
    }

    .space-price {
        font-size: .4rem;
    }

    .space-03 {
        width: 1.71rem;
    }

    .space-03 .btn {
        width: 1.35rem;
        height: .8rem;
        font-size: .32rem;
    }

    .sub-ps {
        height: .7rem;
        line-height: .7rem;
        border-top: 1px solid #E7E7E7;
    }

    .sub-ps span:first-child {
        color: $borderThemeColor;
    }
</style>
