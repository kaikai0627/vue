<template>
    <div class="container-scroll">
        <home-footer></home-footer>
        <home-swiper :list="swiperList"></home-swiper>
        <home-icons :list="iconsList"></home-icons>
        <home-recommend :list="recommendList"></home-recommend>
    </div>
</template>

<script>
    import HomeFooter from './components/footer'
    import HomeSwiper from './components/swiper'
    import HomeIcons from './components/icons'
    import HomeRecommend from './components/recommend'
    import axios from 'axios'

    export default {
        name: 'Home',
        components: {
            HomeFooter: HomeFooter,
            HomeSwiper: HomeSwiper,
            HomeIcons: HomeIcons,
            HomeRecommend: HomeRecommend
        },
        data() {
            return {
                swiperList: [],
                iconsList: [],
                recommendList: []
            }
        },
        methods: {
            getHomeInfo() {
                axios.get('/api/index.json')
                    .then(this.getHomeInfoSucc)
            },
            getHomeInfoSucc(res) {
                res = res.data
                if (res.ret && res.data) {
                    const data = res.data
                    this.swiperList = data.swiperList
                    this.iconsList = data.iconsList
                    this.recommendList = data.recommendList
                }
            }
        },
        mounted() {
            this.getHomeInfo()
        }
    }
</script>

<style>

</style>
