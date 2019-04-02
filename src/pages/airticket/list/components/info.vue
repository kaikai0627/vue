<template>
    <div>
        <div class="flight-info">
            上海-深圳&nbsp;<span class="amount">共{{list.length}}个航班信息</span>
            <span class="standard pull-right" @click="handStandardShow">差旅标准</span>
        </div>
        <div class="flight-date clearfix">
            出发日期：2018年8月24日
            <ul class="tax text-center pull-right">
                <li class="pull-left" :class="{ active: isActive}" @click="taxCut(true)">含税价</li>
                <li class="pull-left" :class="{ active: hasActive}" @click="taxCut(false)">不含税</li>
            </ul>
        </div>
        <div class="standard-pop" v-if="standard" @click="handStandardHide">
            <div class="standard-content" @click.stop>
                <div>1.准许预定经济舱位最低价</div>
                <div>2.如最低价不合适可更换舱位</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ListInfo',
    props: {
        list: Array
    },
    data () {
        return {
            standard: false,
            isActive: true,
            hasActive: false
        }
    },
    methods: {
        handStandardShow () {
            this.standard = true
        },
        handStandardHide () {
            this.standard = false
        },
        taxCut (is) {
            if(is) {
                this.isActive = true
                this.hasActive = false
            } else {
                this.isActive = false
                this.hasActive = true
            }
            this.$emit('change', is)
        }
    }
}
</script>

<style lang="stylus" type="text/stylus" scoped>
    .flight-info
        background-color: #fff
        padding: 0 .34rem
        height: .8rem
        line-height: .8rem
        font-size: .3rem

        .amount
            color: #666

        .standard
            color: #248FED
            font-size: .28rem

    .flight-date
        padding: .2rem .34rem
        line-height: .57rem
        width: 100%
        color: #363636

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

        .tax
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

    .standard-pop
        background: rgba(0, 0, 0, .5)
        position: fixed
        top: 0
        left: 0
        width: 100%
        height: 100%
        z-index: 9

        .standard-content
            background: #fff
            position: absolute
            width: 5rem
            top: 50%
            left: 50%
            -webkit-transform: translate(-50%, -50%)
            -moz-transform: translate(-50%, -50%)
            -ms-transform: translate(-50%, -50%)
            -o-transform: translate(-50%, -50%)
            transform: translate(-50%, -50%)
            padding: .5rem
            line-height: .5rem
            font-size: .3rem
            border-radius: .1rem
</style>
