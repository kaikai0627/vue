<template>
    <div>
        <div class="main">
            <div class="fill-item">
                <div class="pull-left fill-title">当前密码</div>
                <input type="text" autocomplete="off" placeholder="请输入当前密码">
            </div>
            <div class="fill-item">
                <div class="pull-left fill-title">新密码</div>
                <input type="text" autocomplete="off" placeholder="请输入新密码">
            </div>
            <div class="fill-item">
                <div class="pull-left fill-title">确认新密码</div>
                <input type="text" autocomplete="off" placeholder="请再次输入新密码">
            </div>
        </div>
        <button type="button" class="btn skin btn_skin_themColor login-btn">完成</button>
    </div>
</template>

<script>
    export default {
        name: 'UpdateContent'
    }
</script>

<style lang="stylus" scoped>
    .main {
        margin-top: .1rem;
        padding: 0 .34rem;
        background: #fff;

        .choose-update {
            border-bottom: 1px solid #F0F0F0;
            height: .88rem;
            line-height: .88rem;
            font-size: .32rem;
            padding-right: .35rem;
            position: relative;

            div {
                font-size: .28rem;
                color: #999;
            }

            .icon-rt {
                position: absolute;
                top: 0;
                right: 0;
                color: #999;
            }
        }

        .fill-item {
            border-bottom: 1px solid #F0F0F0;
            height: .88rem;
            line-height: .88rem;
            font-size: .32rem;

            &:last-child {
                border: none;
            }

            .fill-title {
                width: 1.77rem;
            }
        }
    }

    .login-btn {
        display: block;
        margin: 1rem auto;
    }
</style>
