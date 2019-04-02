<template>
    <div class="menu-order">
        <div class="order-hd">我的订单</div>
        <div class="text-center clearfix">
            <div class="menu-item pull-left" @click="goOrder(1)">
                <i></i>
                <div class="menu-title">酒店</div>
            </div>
            <div class="menu-item pull-left" @click="goOrder(2)">
                <i class="menu-icon-2"></i>

                <div class="menu-title">火车</div>
            </div>
            <div class="menu-item pull-left" @click="goOrder(0)">
                <i class="menu-icon-3"></i>

                <div class="menu-title">机票</div>
            </div>
            <div class="menu-item pull-left" @click="goOrder(3)">
                <i class="menu-icon-4"></i>

                <div class="menu-title">更多</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'IndexOrder',
        methods: {
            goOrder (is) {
                if (is == 0) {
                    this.$router.push({path: "/personal/order/air"})
                } else if(is == 1) {
                    this.$router.push({path: "/personal/order/hotel"})
                } else {
                    alert("敬请期待！")
                }
            }
        }
    }
</script>

<style lang="stylus" type="text/stylus" scoped>
    .menu-order {
        background: #fff;
        padding: 0 .4rem;
        margin-bottom: .1rem;

        .order-hd {
            font-size: .3rem;
            padding: .25rem 0 .2rem;
            border-bottom: 1px solid #E5E5E5;
        }

        .menu-item {
            width: 25%;
            padding: 30px 0;

            i {
                display: inline-block;
                width: .7rem;
                height: .65rem;
                background: url("./icon-05.png") .06rem -1.71rem no-repeat;
                background-size: 3.44rem;
            }

            .menu-icon-2 {
                background-position-x: -1.28rem;
            }

            .menu-icon-3 {
                background-position-x: -2.7rem;
            }

            .menu-icon-4 {
                background-position: .03rem -2.64rem;
            }
        }
    }
</style>
