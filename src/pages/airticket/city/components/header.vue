<template>
    <header>
        <span class="icon-retreat" @click="back"><i class="iconfont icon-iconfontzuojiantou icon-back"></i></span>
        选择城市
        <span class="header-rt" @click="seletdCity">完成</span>
    </header>
</template>

<script>
    export default {
        name: 'CityHeader',
        props: {
            depart: String,
            arrive: String
        },
        methods: {
            seletdCity() {
                this.$store.commit('changeCity', this.depart)
                this.$store.commit('changeCity1', this.arrive)
                this.$router.push('/airtitcket/search')
            },
            back() {
                window.history.go(-1)
            }
        }
    }
</script>

<style lang="stylus" type="text/stylus" scoped>
    @import '~styles/header.styl'
</style>
