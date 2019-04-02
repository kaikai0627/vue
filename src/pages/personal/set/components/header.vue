<template>
    <header>
        <span class="icon-retreat" @click="back"><i class="iconfont icon-iconfontzuojiantou icon-back"></i></span>
        个人设置
    </header>
</template>

<script>
    export default {
        name: 'SetHeader',
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
