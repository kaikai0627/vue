<template>
    <header>
        <router-link class="icon-retreat" to="/">
            <i class="iconfont icon-iconfontzuojiantou icon-back"></i>
        </router-link>
        出差审批
        <router-link to="/personal/history" class="header-rt">审批历史</router-link>
    </header>
</template>

<script>
    export default {
        name: 'ListHeader'
    }
</script>

<style lang="stylus" type="text/stylus" scoped>
    @import '~styles/header.styl'
</style>
