<template>
    <ul class="cut-nav text-center clearfix">
        <li class="pull-left skin font_skin_themeColor_active border_skin_theColor_active"
            @click="cutOrder(0)"
        >
            <span class="border_color">机票</span>
        </li>
        <li class="pull-left skin font_skin_themeColor_active border_skin_theColor_active active"
            @click="cutOrder(1)"
        >
            <span class="border_color">酒店</span>
        </li>
        <li class="pull-left skin font_skin_themeColor_active border_skin_theColor_active"
            @click="cutOrder(2)"
        >
            <span class="border_color">火车票</span>
        </li>
    </ul>
</template>

<script>
    export default {
        name: 'HotelType',
        methods: {
            cutOrder(is) {
                if (is == 0) {
                    this.$router.push({path: "/personal/order/air"})
                } else if (is == 1) {
                    this.$router.push({path: "/personal/order/hotel"})
                } else {
                    alert("敬请期待！")
                }
            }
        }
    }
</script>

<style lang="stylus" type="text/stylus" scoped>
    .cut-nav {
        height: .85rem;
        line-height: .85rem;
        background: #fff;
        padding: 0 .34rem;

        li {
            width: 33.3%;

            span {
                color: #666;
                border-bottom: 2px solid transparent;
                display: inline-block;
                height: 100%;
                padding: 0 .2rem;
            }

            &.active {
                span {
                    color: #258FED;
                    border-color: #258FED;
                }
            }
        }
    }


</style>
