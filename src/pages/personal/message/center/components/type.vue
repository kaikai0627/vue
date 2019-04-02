<template>
    <div class="main">
        <div class="messages-list">
            <div class="messages-item">
                <i class="messages-icon"></i>
                审批消息
                <span class="pull-right">14:53</span>
                <i class="iconfont icon-iconfontyoujiantou icon-rt"></i>
            </div>
            <div class="messages-item">
                <i class="messages-icon icon-02"></i>
                航班信息
                <i class="iconfont icon-iconfontyoujiantou icon-rt"></i>
            </div>
            <div class="messages-item">
                <i class="messages-icon icon-03"></i>
                航班动态
                <i class="iconfont icon-iconfontyoujiantou icon-rt"></i>
            </div>
            <div class="messages-item">
                <i class="messages-icon icon-04"></i>
                行程管家
                <span class="pull-right">5月1日</span>
                <i class="iconfont icon-iconfontyoujiantou icon-rt"></i>
            </div>
            <div class="messages-item">
                <i class="messages-icon icon-05"></i>
                订单通知
                <span class="pull-right">5月1日</span>
                <i class="iconfont icon-iconfontyoujiantou icon-rt"></i>
            </div>
            <div class="messages-item" @click="goSystem">
                <i class="messages-icon icon-06"></i>
                系统消息
                <i class="iconfont icon-iconfontyoujiantou icon-rt"></i>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'messageType',
        methods: {
            goSystem () {
                this.$router.push({path: "/personal/message/system/list"})
            }
        }
    }
</script>

<style lang="stylus" type="text/stylus" scoped>
    .messages-list {
        padding: 0 .34rem;
        background: #fff;

        .messages-item {
            height: 1.1rem;
            line-height: 1.1rem;
            border-bottom: 1px solid #e5e5e5;
            padding: 0 .5rem 0 .75rem;
            position: relative;

            span {
                color: #999;
            }

            .messages-icon {
                display: inline-block;
                position: absolute;
                left: 0;
                top: .3rem;
                width: .5rem;
                height: .5rem;
                background: url("icon-07.png") no-repeat;
                background-size: .5rem;
            }

            .icon-02 {
                background-position-y: -1.09rem;
            }

            .icon-03 {
                background-position-y: -2.19rem;
            }

            .icon-04 {
                background-position-y: -3.29rem;
            }

            .icon-05 {
                background-position-y: -4.39rem;
            }

            .icon-06 {
                background-position-y: -5.49rem;
            }

            .icon-rt {
                font-size: .32rem;
                position: absolute;
                right: 0;
                top: 0;
                color: #999;
            }
        }
    }
</style>
