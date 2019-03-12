<template>
    <div class="main">
        <airList-header></airList-header>
        <airList-info :list="airList"></airList-info>
        <airList-content :list="airList"></airList-content>
        <airList-filtrate :list="airList"
                          @chang="handChangList"
        >
        </airList-filtrate>
    </div>
</template>

<script>
    import AirListHeader from './components/header'
    import AirListInfo from './components/info'
    import AirListContent from './components/content'
    import AirListFiltrate from './components/filtrate'

    export default {
        name: 'ListAirList',
        components: {
            AirListHeader,
            AirListInfo,
            AirListContent,
            AirListFiltrate

        },
        data() {
            return {
                airList: [],
                key: this.$route.query.key,     //航班查询key
                orgCity: this.$route.query.orgCity, //出发地三字码
                dstCity: this.$route.query.dstCity, //到达地三字码
                flightNo: this.$route.query.flightNo,//航班号
            }
        },
        methods: {
            getListInfo () {
                console.log(this.key)
                console.log(this.orgCity)
                console.log(this.dstCity)
                console.log(this.flightNo)
                this.$axios.get('/api/airList.json')
                    .then(this.getListInfoSucc)
            },
            getListInfoSucc(res) {
                res = res.data
                if (res.ret && res.data) {
                    const data = res.data
                    this.airList = data.airList
                }
            },
            handChangList(sortList) {
                this.airList = sortList
                console.log(sortList)
            }
        },
        mounted() {
            this.getListInfo()
        }
    }
</script>

<style lang="stylus" scoped>
    .main {
        padding-bottom 1.2rem;
    }
</style>
