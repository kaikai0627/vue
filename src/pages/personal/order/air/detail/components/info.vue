<template>
    <div class="flight-info">
        <div class="flight-hd text-center">国际航班起降均为当地时间、日期</div>
        <div class="flight-item">
            <div class="depart"><span class="text-center">去程</span>9月17日&nbsp;周日&nbsp;上海-芝加哥</div>
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
        <div class="flight-item">
            <div class="depart"><span class="text-center">返程</span>9月17日&nbsp;周日&nbsp;上海-芝加哥</div>
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
        <div class="sign text-right">
            <span>退改签</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'DetailInfo'
    }
</script>

<style lang="stylus" type="text/stylus" scoped>
    .flight-info {
        margin-top: .1rem;
        background: #fff;
        padding: 0 .34rem;

        .flight-hd {
            color: #2A7AD3;
            font-size: .26rem;
            padding: .25rem 0 0;
        }

        .flight-item {
            padding-top: .25rem;

            .depart {
                span {
                    display: inline-block;
                    background: #258FED;
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

                    &:before {
                        content: '';
                        position: absolute;
                        left: 0;
                        top: 0;
                        width: 2rem;
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
        }

        .sign {
            color: #2A7AD3;
            padding: .25rem 0;
            border-top: 1px solid #E5E5E5;
            margin-top: .1rem;
        }
    }
</style>
