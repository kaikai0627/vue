<template>
    <div>
        <back-header></back-header>
        <back-info></back-info>
        <back-content :list="airList"></back-content>
        <back-filtrate :list="airList"></back-filtrate>
    </div>
</template>

<script>
    import BackHeader from './components/header'
    import BackInfo from './components/info'
    import BackContent from './components/content'
    import BackFiltrate from './components/filtrate'
    import axios from 'axios'

    export default {
        name: 'BackList',
        components: {
            BackHeader,
            BackInfo,
            BackContent,
            BackFiltrate,
            axios
        },
        data () {
            return {
                airList: [],
            }
        },
        methods: {
            getListInfo () {
                this.$axios.get('/api/airList.json')
                    .then(this.getListInfoSucc)
            },
            getListInfoSucc (res) {
                res = res.data
                if(res.ret && res.data){
                    const data = res.data
                    this.airList = data.airList
                }
            }
        },
        mounted() {
            this.getListInfo()
        }
    }
</script>

<style lang="stylus" type="text/stylus" scoped>

</style>
