<template>
    <div>
        <div class="flight-info">
            北京-上海&nbsp;<span class="amount">共25个航班信息</span>
            <span class="standard pull-right" @click="handClickShow">差旅标准</span>
        </div>
        <div class="flight-date clearfix">
            <span class="btn skin btn_skin_themColor btn-normal btn-corner-small">去程</span>&nbsp;&nbsp;已选：08月24日(周四)07:20-09:20深航
        </div>
        <div class="standard-pop" @click="handClickHide" v-show="standardPop">
            <div class="standard-content" @click.stop>
                <div>1.准许预定经济舱位最低价</div>
                <div>2.如最低价不合适可更换舱位</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'BackInfo',
        data() {
            return {
                standardPop: false
            }
        },
        methods: {
            handClickShow() {
                this.standardPop = true
            },
            handClickHide() {
                this.standardPop = false
            }
        }
    }
</script>

<style lang="stylus" type="text/stylus" scoped>
    .flight-info {
        background-color: #fff;
        padding: 0 .34rem;
        height: .8rem;
        line-height: .8rem;
        font-size: .3rem;

        .amount {
            color: #666;
        }

        .standard {
            color: #248FED;
            font-size: .28rem;
        }
    }

    .flight-date {
        padding: .2rem .34rem;
        line-height: .57rem;
        width: 100%;
        color: #363636;
    }

    .standard-pop {
        background: rgba(0, 0, 0, .5);
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 9;

        .standard-content {
            background: #fff;
            position: absolute;
            width: 5rem;
            top: 50%;
            left: 50%;
            -webkit-transform: translate(-50%, -50%);
            -moz-transform: translate(-50%, -50%);
            -ms-transform: translate(-50%, -50%);
            -o-transform: translate(-50%, -50%);
            transform: translate(-50%, -50%);
            padding: .5rem;
            line-height: .5rem;
            font-size: .3rem;
            border-radius: .1rem;
        }
    }
</style>
