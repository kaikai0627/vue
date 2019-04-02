<template>
    <div class="text-wrap">
        <div class="text-title">
            未提前3天预订的原因
        </div>
        <textarea placeholder="出差日程刚确认完毕"></textarea>

        <div class="text-title">
            出发目的
        </div>
        <textarea placeholder="拜访亲戚"></textarea>
    </div>
</template>

<script>
    export default {
        name: 'DetailCause'
    }
</script>

<style lang="stylus" type="text/stylus" scoped>
    .text-wrap {
        background: #fff;
        margin: .1rem 0;
        padding: 0 .34rem .3rem;

        .text-title {
            padding: .3rem 0 .3rem;
        }

        textarea {
            background: #F5F5F5;
            border: none;
            padding: .25rem;
            font-size: .24rem;
            width: 100%;
            height: 1rem;
            border-radius: .1rem;
        }
    }
</style>
