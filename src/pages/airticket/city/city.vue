<template>
    <div class="main">
        <city-header :depart="depart"
                     :arrive="arrive"
                     @chang="handChang"
        >
        </city-header>
        <city-search :city="city"
                     :letterList="cities"
                     :isActive="isActive"
                     :delActive="delActive"
                     ref="childSearch"
                     @change="departCity"
                     @changes="arriveCity"
        >
        </city-search>
        <city-list :hotList="hotCities"
                   :letterList="cities"
                   @chang="handListChang"
        >
        </city-list>
    </div>
</template>

<script>
    import axios from 'axios'
    import CityHeader from './components/header'
    import CitySearch from './components/search'
    import CityList from './components/list'

    export default {
        name: 'City',
        components: {
            CityHeader: CityHeader,
            CitySearch: CitySearch,
            CityList: CityList
        },
        data() {
            return {
                hotCities: [],
                cities: {},
                city: '',
                isActive: true,
                delActive: false,
                depart: '',
                arrive: ''
            }
        },
        methods: {
            getCityInfo() {
                axios.get('/api/city.json')
                    .then(this.getCityInfoSucc)
            },
            getCityInfoSucc(res) {
                res = res.data
                if (res.ret && res.data) {
                    const data = res.data
                    this.hotCities = data.hotCities
                    this.cities = data.cities
                }
            },
            handListChang(city) {
                this.city = city
                this.isActive = false
                this.delActive = true
                this.$refs.childSearch.$refs.arrive.focus()//通过ref获取子组件的input
                // this.$store.commit("changeCity",city)
            },
            handChang(city) {
                alert(city)
                this.city = city
            },
            departCity(depart) {
                this.depart = depart
            },
            arriveCity(arrive) {
                this.arrive = arrive
            }
        },
        mounted() {
            this.getCityInfo()
        }
    }
</script>

<style lang="stylus" scoped>
    .main
        position: fixed
        top: 0
        left: 0
        right: 0
        bottom: 0
        overflow: hidden
</style>
