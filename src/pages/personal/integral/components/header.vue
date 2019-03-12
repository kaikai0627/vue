<template>
    <header>
        <span class="icon-retreat" @click="back"><i class="iconfont icon-iconfontzuojiantou icon-back"></i></span>
        5元优惠券红包
    </header>
</template>

<script>
    export default {
        name: 'CouponHeader',
        methods: {
            back () {
                window.history.go(-1)
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import '~styles/header.styl'
</style>
