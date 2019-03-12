<template>
    <header>
        <span class="icon-retreat" @click="back">
            <i class="iconfont icon-iconfontzuojiantou icon-back"></i>
        </span>
        机票订单详情
        <router-link class="header-rt" to="/"><i class="iconfont icon-shouye"></i></router-link>
    </header>
</template>

<script>
    export default {
        name: 'DetailHeader',
        methods: {
            back() {
                window.history.go(-1)
            }
        }
    }
</script>

<style lang="stylus" scoped>
    @import '~styles/header.styl'
    .header-rt {
        i {
            font-size .4rem
        }
    }
</style>

