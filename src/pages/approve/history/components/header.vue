<template>
    <header>
        <span class="icon-retreat" @click="back"><i class="iconfont icon-iconfontzuojiantou icon-back"></i></span>
        审批历史
    </header>
</template>

<script>
    export default {
        name: 'SucceedHeader',
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
