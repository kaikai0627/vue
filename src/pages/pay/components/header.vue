<template>
    <header>
        <span class="icon-retreat" @click="back"><i class="iconfont icon-iconfontzuojiantou icon-back"></i></span>
        收银台
        <router-link class="iconfont icon-wode1 header-rt" to="/"></router-link>
    </header>
</template>

<script>
    export default {
        name: 'PayHeader',
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
