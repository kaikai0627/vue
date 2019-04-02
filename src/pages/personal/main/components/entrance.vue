<template>
    <div>
        <div class="entrance">
            <div class="entrance-item" @click="goIntegral">
                <i class="icon-ico"></i>
                <span>我的账户积分&nbsp;&nbsp;1000分</span>
                <span class="pull-right entrance-hint">兑换积分</span>
                <i class="icon-rt"></i>
            </div>
        </div>
        <div class="entrance">
            <div class="entrance-item" @click="goSet">
                <i class="icon-ico icon-ico-2"></i>
                <span>设置</span>
                <i class="icon-rt"></i>
            </div>
        </div>
        <div class="entrance" @click="handClickShow">
            <div class="entrance-item">
                <i class="icon-ico icon-ico-3"></i>
                <span>联系客服电话</span>
                <i class="icon-rt"></i>
            </div>
        </div>
        <div class="entrance">
            <div class="entrance-item">
                <i class="icon-ico icon-ico-4"></i>
                <span>联系在线电话</span>
                <i class="icon-rt"></i>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'IndexEntrance',
        methods: {
            handClickShow () {
                this.$emit("change", true)
            },
            goIntegral () {
                this.$router.push({path: "/personal/integral"})
            },
            goSet () {
                this.$router.push({path: "/personal/set"})
            }
        }
    }
</script>

<style lang="stylus" type="text/stylus" scoped>
    .entrance {
        height: .8rem;
        line-height: .8rem;
        padding: 0 .34rem;
        background: #fff;
        margin-bottom: .1rem;
    }

    .entrance-item {
        position: relative;
        padding: 0 .35rem 0 .37rem;
        font-size: .3rem;
    }

    .icon-ico {
        position: absolute;
        left: 0;
        top: .27rem;
        display: inline-block;
        width: .25rem;
        height: .25rem;
        background: url("./icon-05.png") 0 -.66rem no-repeat;
        background-size: 3.44rem;
    }

    .entrance-hint {
        color: #248FED;
    }

    .icon-rt {
        display: inline-block;
        width: .16rem;
        height: .3rem;
        background: url("./icon-05.png") -3.27rem -.66rem no-repeat;
        background-size: 3.44rem;
        position: absolute;
        top: 50%;
        right: 0;
        margin-top: -.15rem;
    }

    .icon-ico-2 {
        background-position-x: -.79rem;
    }

    .icon-ico-3 {
        background-position-x: -1.74rem;
    }

    .icon-ico-4 {
        background-position-x: -2.58rem;
    }

    .contact-pop {
        background: rgba(0, 0, 0, .5);
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 10;

        .contact-content {
            background-color: #fff;
            position: absolute;
            width: 100%;
            bottom: 0;

            .contact-item {
                padding: 0 .34rem;
                height: 1.15rem;
                line-height: 1.15rem;

                a {
                    display: block;
                    border-bottom: 1px solid #E5E5E5;
                    color: #363636;
                }

                &:last-child {
                    border-top: .1rem solid #ABABAB;
                }
            }
        }
    }
</style>
