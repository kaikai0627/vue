<template>
    <div class="special-ticket">
        <div class="item-ticket border-1px clearfix"
             v-for="item of list"
             v-if="list.length != 0"
             :key="item.id"
        >
            <div class="img-inner pull-left">
                <div class="tj">{{item.desc}}</div>
                <img :src="item.airImg" alt="">
            </div>
            <div class="pull-left ticket-item">
                <div class="ticket-tit">
                    {{item.depart}}-{{item.arrive}}
                </div>
                <div class="ticket-date">{{item.date}}({{item.week}})</div>
                <div class="ticket-price">¥<b>{{item.price}}</b></div>
            </div>
        </div>
        <div class="no-flight text-center" v-if="list.length == 1">
            <img src="../../../assets/img/no_result.png" alt="">

            <div>没有找到结果哎~</div>
            <div class="no-btn text-center">
                <button type="button" class="btn login-btn btn-ellipse">返回首页
                </button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'HomeRecommend',
        props: {
            list: Array
        }
    }
</script>

<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    @import '~styles/borderkk.styl'

    .special-ticket
        background: #fff
        padding-bottom: 1.2rem

        .item-ticket
            padding: .1rem
            border-1px(#F1F1F1, top)

            .img-inner
                position: relative
                width: 2rem
                height: 1.65rem

                img
                    display: block
                    width: 100%
                    height: 100%
                    border: none

                .tj
                    position: absolute
                    top: 0
                    left: 0
                    background: rgba(0, 0, 0, .5)
                    color: #fff
                    padding: .02rem .05rem
                    font-size: .28rem

            .ticket-item
                padding-left: .135rem
                height: 1.65rem
                position: relative

                .ticket-tit
                    color: #333
                    margin-bottom: .135rem
                    font-size: .32rem

                .ticket-date
                    color: #5C5C5C

                .ticket-price
                    color: #FF6666
                    position: absolute
                    bottom: 0
                    left: .135rem

                    b
                        font-size: .32rem

        .no-flight
            margin-bottom: 0

    .login-btn
        border: 1px solid $pageThemeColor
        color: $pageThemeColor
        background-color: transparent

</style>
