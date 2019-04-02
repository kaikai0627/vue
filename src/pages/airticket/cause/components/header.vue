<template>
    <header>
        <span class="icon-retreat" @click="back"><i class="iconfont icon-iconfontzuojiantou icon-back"></i></span>
        商旅平台
    </header>
</template>

<script>
    export default {
        name: 'CauseHeader',
        methods: {
            back () {
                window.history.go(-1)
            }
        }
    }
</script>

<style lang="stylus" type="text/stylus" scoped>
    @import '~styles/header.styl'

</style>
