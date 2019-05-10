<template>
    <div class="main">
        <airList-header></airList-header>
        <airList-info :list="airList"
                      :count="count"
                      :startDate="startDate"
                      @change="changeTax"
        >
        </airList-info>
        <airList-content :list="airList"
                         :whether="whether"
                         :airlineFiltrate="airlineFiltrate"
                         @change="itemLength"
        >
        </airList-content>
        <airList-filtrate :list="airList"
                          @change="handChangList"
                          @filtrate="checkedCondition"
        >
        </airList-filtrate>
    </div>
</template>

<script>
import AirListHeader from './components/header'
import AirListInfo from './components/info'
import AirListContent from './components/content'
import AirListFiltrate from './components/filtrate'
import Qs from 'qs'

export default {
    name: 'ListAirList',
    components: {
        AirListHeader,
        AirListInfo,
        AirListContent,
        AirListFiltrate

    },
    data () {
        return {
            airList: [],
            key: this.$route.query.key,     //航班查询key
            orgCity: this.$route.query.orgCity, //出发地三字码
            dstCity: this.$route.query.dstCity, //到达地三字码
            flightNo: this.$route.query.flightNo,//航班号
            whether: true,  //显示含税价 不含税价
            airlineFiltrate: [],    //航司筛选
            count: null,
            startDate: this.$route.query.goDate || null
        }
    },
    methods: {
        // getListInfo() {

        //get方式请求
        // this.$axios.get('http://v.juhe.cn/toutiao/index', {
        //     params: {
        //         type: "top",
        //         key: '8dd280617a879a39f082162f9cb2d80b'
        //     }
        // }).then((res) => {
        //     console.log(res)
        // })

        //post方式请求 需要使用Qs
        // const data = Qs.stringify({
        //     "key":"05de018312d598e5bfe9e7471fd9a03f",
        //     "orgCity": "CAN",
        //     "dstCity": "SHA",
        // });
        // this.$axios.post('http://op.juhe.cn/flight/df/fs', data).then((res) => {
        //     console.log(res)
        // })
        // },
        getListInfo () {
            console.log(this.$route.query)
            this.$axios.get('/api/airList.json')
                    .then(this.getListInfoSucc)
        },
        getListInfoSucc (res) {
            res = res.data
            if (res.ret && res.data) {
                const data = res.data
                this.airList = data.airList
            }
        },
        handChangList (sortList) {
            this.airList = sortList
        },
        // 税收
        changeTax (is) {
            this.whether = is
        },
        // 航班筛选 选中的数组传给子组件航班结果集做处理
        checkedCondition (airline) {
            this.airlineFiltrate = airline
            console.log(airline)
            console.log(this.airlineFiltrate)
        },
        itemLength (number) {
            this.count = number
        }
    },
    mounted () {
        this.getListInfo()
    }
}
</script>

<style lang="stylus" type="text/stylus" scoped>
    .main {
        padding-bottom 1.2rem;
    }
</style>
