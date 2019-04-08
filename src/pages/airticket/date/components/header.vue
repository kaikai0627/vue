<template>
    <header>
        <span class="icon-retreat" @click="back"><i class="iconfont icon-iconfontzuojiantou icon-back"></i></span>
        {{dateTitle}}
    </header>
</template>

<script>
export default {
    name: 'DateHeader',
    data () {
        return {
            dateTitle: '选择出发时间'
        }
    },
    methods: {
        back () {
            window.history.go(-1)
        }
    },
    mounted () {
        if (this.$route.query.type == 1) {
            this.dateTitle = '选择返程时间'
        }
    }
}
</script>

<style lang="stylus" type="text/stylus" scoped>
    @import '~styles/header.styl'
    header {
        position: fixed;
        top: 0;
        left: 0;
        width:100%;
        z-index 9;
    }
</style>
