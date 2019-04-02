<template>
    <footer>
        <ul class="cut-page text-center clearfix">
            <li class="pull-left" @click="goHome">
                <div class="cut-icon cut-icon-01"></div>
                <div class="cut-title">首页</div>
            </li>
            <li class="pull-left">
                <div class="cut-icon cut-icon-02"></div>
                <div class="cut-title">日程</div>
            </li>
            <li class="pull-left">
                <div class="cut-icon cut-icon-03"></div>
                <div class="cut-title">联系客服</div>
            </li>
            <!--空:1.0版本  v-green:2.0版本  v-red:3.0版本  v-blue:4.0版本-->
            <li class="pull-left active">
                <div class="cut-icon cut-icon-04"></div>
                <div class="cut-title skin font_skin_themeColor">我的</div>
            </li>
        </ul>
    </footer>
</template>

<script>
    export default {
        name: 'IndexFooter',
        methods: {
            goHome () {
                this.$router.push({path: "/"})
            }
        }
    }
</script>

<style lang="stylus" type="text/stylus" scoped>
    footer {
        position: fixed;
        bottom: 0;
        width: 100%;
        background-color: #fff;
        border-top: 1px solid #EBEBEB;

        .cut-page {
            color: #666;
            display: block;

            li {
                width: 25%;
                padding-top: .18rem;

                &.active {
                    color: #248FED;

                    .cut-icon {
                        background-position-y: -3.93rem;
                    }
                }

                .cut-icon {
                    display: inline-block;
                    width: .4rem;
                    height: .42rem;
                    background: url("./icon-01.png") no-repeat;
                    background-position-y: -3.23rem;
                    background-size: 2.93rem;
                    font-size: .4rem;
                }

                .cut-icon-01 {
                    background-position-x: -.13rem;
                }

                .cut-icon-02 {
                    background-position-x: -.85rem;
                }

                .cut-icon-03 {
                    background-position-x: -1.54rem;
                }

                .cut-icon-04 {
                    background-position-x: -2.24rem;
                }

                .cut-title {
                    font-size: .22rem;
                    margin-top: .01rem;
                    margin-bottom: .02rem;
                }
            }
        }
    }
</style>
