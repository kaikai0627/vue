<template>
    <div class="flight-voyage">
        <div class="describe text-right">
            <span class="rank skin btn_skin_themColor pull-left">第1程</span>
            <span class="skin font_skin_themeColor">有餐盒</span>
            <span class="skin font_skin_themeColor">机型73D</span>
            <span class="skin font_skin_themeColor">有托运行李</span>
        </div>
        <div class="clearfix">
            <div class="flight-info pull-left">
                <div class="flight-date">07:00</div>
                <div class="flight-city">虹桥国际机场T1</div>
            </div>
            <div class="flight-arrow pull-left">
                <i class="icon-arrow-line"></i>
            </div>
            <div class="flight-info pull-left text-right">
                <div class="flight-date">07:00</div>
                <div class="flight-city">虹桥国际机场T1</div>
            </div>
        </div>
        <div class="remark"><i class="pf pf_cz"></i>东方航空&nbsp;MU5331&nbsp;2018.09.03&nbsp;共享航班FM444</div>
        <div class="flight-transit">
            <span>澳门中转停留7h40m</span>
        </div>
        <div class="describe text-right">
            <span class="rank skin btn_skin_themColor pull-left">第1程</span>
            <span class="skin font_skin_themeColor">有餐盒</span>
            <span class="skin font_skin_themeColor">机型73D</span>
            <span class="skin font_skin_themeColor">有托运行李</span>
        </div>
        <div class="clearfix">
            <div class="flight-info pull-left">
                <div class="flight-date">07:00</div>
                <div class="flight-city">虹桥国际机场T1</div>
            </div>
            <div class="flight-arrow pull-left">
                <i class="icon-arrow-line"></i>
            </div>
            <div class="flight-info pull-left text-right">
                <div class="flight-date">07:00</div>
                <div class="flight-city">虹桥国际机场T1</div>
            </div>
        </div>
        <div class="remark"><i class="pf pf_cz"></i>东方航空&nbsp;MU5331&nbsp;2018.09.03&nbsp;共享航班FM444</div>
    </div>
</template>

<script>
    export default {
        name: 'SpaceLine'
    }
</script>

<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    .flight-voyage {
        background: #fff;
        padding: 0 $normElDest;

        .describe {
            padding: .33rem 0;
        }

        .rank {
            display: inline-block;
            padding: .02rem .35rem;
            color: #fff;
        }

        .flight-info {
            width: 2.45rem;

            .flight-date {
                font-size: .42rem;
            }

            .flight-city {
                color: #999;
            }

        }

        .flight-arrow {
            width: 1.9rem;
            position: relative;
            height: .6rem;

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
                    background: #525252;
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
                    border-color: transparent transparent #525252;
                }
            }

        }

        .remark {
            border-top: 1px solid #F1F1F1;
            padding: .23rem 0 .3rem;
            margin-top: .25rem;
        }

        .flight-transit {
            color: #F94F4F;
            position: relative;
            width: 5rem;
            margin: .2rem auto;
            border-top: 1px solid #F94F4F;

            span {
                position: absolute;
                top: 50%;
                left: 50%;
                -webkit-transform: translate(-50%, -50%);
                -moz-transform: translate(-50%, -50%);
                -ms-transform: translate(-50%, -50%);
                -o-transform: translate(-50%, -50%);
                transform: translate(-50%, -50%);
                padding: 0 .2rem;
                background: #fff;
                white-space: nowrap;
            }
        }

    }
</style>
