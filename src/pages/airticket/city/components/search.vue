<template>
    <div>
        <div class="search-condition">
            <div class="clearfix">
                <div class="search-item pull-left" :class="{active: isActive,active: onActive}">
                    <span class="search-text">出发城市</span>
                    <input type="text"
                           class="search-ipt"
                           placeholder="出发城市"
                           autocomplete="off"
                           @click="checked('1')"
                           v-model="depart"
                           @input="searchCity('1')"
                    />
                </div>
                <div class="exchange text-center pull-left" @click="exchange">
                    <i class="iconfont icon-jiaohuan exchange-icon"></i>
                </div>
                <div class="search-item pull-left" :class="{active: delActive,active: cloneActive}">
                    <span class="search-text" style="right: 0">到达城市</span>
                    <input type="text"
                           class="search-ipt text-right"
                           placeholder="到达城市"
                           autocomplete="off"
                           @click="checked('2')"
                           ref="arrive"
                           v-model="arrive"
                           @input="searchCity('2')"
                    />
                </div>
            </div>
        </div>
        <div ref="search" class="city-search-list" v-show="showList">
            <ul>
                <li class="city-search-item"
                    v-for="item of keywordList"
                    :key="item.id"
                    @click="itemCity(item.name)"
                >
                    <span class="city-info-1">城市</span>
                    <span class="city-info-2">{{item.name}}</span>
                    <span class="city-info-3">中国</span>
                    <span class="city-info-3">TAO</span>
                </li>
                <li v-if="hasNoData">没有查询到结果</li>
            </ul>
        </div>
    </div>
</template>

<script>
    import Bscroll from 'better-scroll'

    export default {
        name: 'CitySearch',
        mounted() {
            this.scroll = new Bscroll(this.$refs.search)
        },
        props: {
            city: String,
            isActive: Boolean,
            delActive: Boolean,
            letterList: Object
        },
        data() {
            return {
                depart: this.$store.state.depart,
                arrive: this.$store.state.arrive,
                onActive: true,
                cloneActive: false,
                keywordList: [],
                showList: false
            }
        },
        computed: {
            hasNoData() {
                return !this.keywordList.length
            }
        },
        watch: {
            city() {
                if (this.onActive) {
                    this.depart = this.city
                } else {
                    this.arrive = this.city
                }
                this.onActive = false
                this.cloneActive = true
            },
            depart() {
                this.$emit('change', this.depart)
            },
            arrive() {
                this.$emit('changes', this.arrive)
            }
        },
        methods: {
            exchange() {
                const depart = this.depart
                const arrive = this.arrive
                this.depart = arrive
                this.arrive = depart
            },
            checked(num) {
                this.onActive = num == '2' ? false : true
                this.cloneActive = num == '1' ? false : true
            },
            itemCity(city) {
                if (this.onActive) {
                    this.depart = city
                } else {
                    this.arrive = city
                }
                this.showList = false
                this.keywordList = []
            },
            searchCity(is) {
                if (this.timer) {
                    clearTimeout(this.timer)
                }
                this.timer = setTimeout(() => {
                    const result = []
                    // this.showList = true
                    if (!this.keywordList.length) {
                        this.keywordList = []
                        this.showList = true
                    } else {
                        this.showList = false
                    }
                    for (let i in this.letterList) {
                        this.letterList[i].forEach((value) => {
                            if (is == 1) {
                                if (value.spell.indexOf(this.depart) > -1 ||
                                    value.name.indexOf(this.depart) > -1) {
                                    if (this.depart != "") {
                                        result.push(value)
                                    }
                                }
                            } else {
                                if (value.spell.indexOf(this.arrive) > -1 ||
                                    value.name.indexOf(this.arrive) > -1) {
                                    if (this.arrive != "") {
                                        result.push(value)
                                    }
                                }
                            }

                        })
                    }
                    this.keywordList = result
                }, 100)
            },
        }
    }
</script>

<style lang="stylus" scoped>
    @import '~styles/varibles.styl'
    .search-condition
        background: #fff
        padding: 0 .34rem .34rem

        .search-item.active
            border-color: $pageThemeColor

    .search-item
        width: 3rem
        height: 1.55rem
        border-bottom: 1px solid #E5E5E5
        position: relative

    .search-text
        position: absolute
        color: #999
        font-size: .22rem
        top: .35rem

    .search-ipt
        width: 100%
        height: 100%
        font-size: .36rem
        padding-top: .7rem

    .city-del
        position: absolute
        right: 0
        top: .92rem
        width: .4rem
        height: .4rem
        line-height: .4rem
        text-align: center
        background: #fff

    .exchange
        width: .8rem
        height: 1.55rem
        padding-top: .85rem

    .exchange-icon
        font-size: .5rem

    .city-search-list
        position: absolute
        z-index: 9
        background: #fff
        width: 100%
        top: 2.5rem
        left: 0
        right: 0
        bottom: 0
        padding: 0 .34rem .1rem
        overflow: hidden

    .city-search-item
        border-bottom: .02rem solid $pageThemeColor
        height: .94rem
        line-height: .94rem
        ellipsis()

    .city-info-1
        background: $pageThemeColor
        font-size: .24rem
        padding: 0 .055rem
        border-radius: 3px
        color: #fff

    .city-info-2
        margin-left: .055rem
        color: $pageThemeColor

    .city-info-3
        margin-left: .15rem
        color: $pageThemeColor

</style>
