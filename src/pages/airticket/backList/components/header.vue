<template>
    <header>
        <span class="icon-retreat" @click="back"><i class="iconfont icon-iconfontzuojiantou icon-back"></i></span>
        选返程：深圳&nbsp;→&nbsp;上海
    </header>
</template>

<script>
    export default {
        name: 'BackHeader',
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
