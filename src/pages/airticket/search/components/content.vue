<template>
    <div class="search-content">
        <div class="search-form">
            <div class="clearfix">
                <div class="search-item pull-left" @click="toCity(0)">
                    <span class="search-city">出发城市</span>
                    <input type="text"
                           :value="depart"
                           class="search-ipt"
                           autocomplete="off"
                           readonly
                    />
                    <input type="hidden" :value="departCode"/>
                </div>
                <div class="exchange text-center pull-left" @click="exchange">
                    <i class="iconfont icon-jiaohuan exchange-icon"></i>
                </div>
                <div class="search-item pull-left" @click="toCity(1)">
                    <span class="search-city" style="right: 0;">到达城市</span>
                    <input type="text"
                           :value="arrive"
                           autocomplete="off"
                           class="search-ipt text-right"
                           readonly>
                    <input type="hidden" :value="arriveCode"/>
                </div>
            </div>
        </div>
        <div class="search-form">
            <div class="clearfix">
                <div class="search-item pull-left" style="border: none;">
                    <span class="search-city">去程</span>
                    <input type="text" value="08月24日" class="search-ipt" autocomplete="off" readonly>
                    <input type="hidden" :value="goDate">
                </div>
                <div class="exchange text-center pull-left"></div>
                <div class="search-item pull-left" style="border: none;">
                    <span class="search-city" style="right: 0;">回程</span>
                    <input type="text" value="09月1日" autocomplete="off" class="search-ipt text-right" readonly>
                </div>
            </div>
        </div>
        <div class="choose-space" @click="openChoose">
            <input type="text" id="space" class="choose-ipt" v-model="space" readonly>
            <i class="iconfont icon-iconfontxiajiantou icon-select"></i>
        </div>
        <div class="search-cz text-center">
            <button type="button" class="btn login-btn" @click="submitFlight">
                搜索
            </button>
        </div>
        <div class="choose-pop" v-show="chooseContent" @click="closeChoose">
            <div class="choose-content">
                <div @click="cutChoose('0',$event)" class="choose-item"
                     :class="{active:isActive == 0}"
                >
                    不限舱位
                </div>
                <div @click="cutChoose('1',$event)" class="choose-item"
                     :class="{active:isActive == 1}"
                >
                    经济舱
                </div>
                <div @click="cutChoose('2',$event)" class="choose-item"
                     :class="{active:isActive == 2}"
                >
                    公务舱/头等舱
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'SearchContent',
        data() {
            return {
                depart: this.$store.state.depart,
                arrive: this.$store.state.arrive,
                departCode: 'CAN',
                arriveCode: 'SHA',
                goDate: '2019-03-20',
                chooseContent: false,
                item: true,
                isActive: 0,
                space: '不限舱位'
            }
        },
        methods: {
            // 交换出发到达城市的值
            exchange() {
                const depart = this.depart
                const arrive = this.arrive
                this.depart = arrive
                this.arrive = depart
            },
            //选择舱位弹框
            openChoose() {
                this.chooseContent = true
            },
            closeChoose() {
                this.chooseContent = false
            },
            // 选择舱位
            cutChoose(index, e) {
                this.isActive = index
                this.chooseContent = false
                this.space = e.target.innerText
            },
            // 跳转城市列表
            toCity (is) {
                this.$router.push({
                    path: '/airtitcket/city',
                    query: {
                        type: is
                    }
                })
            },
            // 跳转航班查询结果
            toList() {
            },
            //航班查询
            submitFlight() {
                // this.$axios({
                //     url: 'http://apitest.lantutong.com/api/b2r/demosticair/searchDomesticFlight.htm',
                //     method: 'post',
                //     headers: {
                //         'Content-Type': 'application/json;charset=utf-8'
                //     },
                //     data: JSON.stringify({
                //         func: 'query',
                //         param: {
                //             "userName": "test188",
                //             "key": "39FDDEA928F05F6EF76",
                //             "departCityCode": this.departCode,
                //             "arrivalCityCode": this.arriveCode,
                //             "departDate": this.goDate,
                //             "sign": this.$md5(
                //                 "userName",
                //                 "key",
                //                 "departCityCode",
                //                 "arrivalCityCode",
                //                 "departDate"
                //             )
                //         }
                //     })
                // }).then((res) => {
                //     alert(res)
                // })

                this.$router.push({path: '/airtitcket/list'})

            }
        }
    }
</script>

<style lang="stylus" type="text/stylus" scoped>
    @import '~styles/varibles.styl'
    .search-form
        padding: 0 .34rem
        background: #fff

        .search-item
            width: 3rem
            height: 1.55rem
            border-bottom: 1px solid #E5E5E5
            position: relative

            .search-city
                position: absolute
                color: #999
                font-size: .22rem
                top: .35rem

            .search-ipt
                width: 100%
                height: 100%
                font-size: .36rem
                padding-top: .6rem

        .exchange
            width: .8rem
            height: 1.55rem
            padding-top: .85rem

            .exchange-icon
                font-size: .5rem

    .choose-space
        height: .8rem
        line-height: .8rem
        margin-top: .1rem
        position: relative
        padding: 0 .34rem
        background: #fff

        .choose-ipt
            height: 100%
            width: 100%

        .icon-select
            position: absolute
            right: .34rem
            top: 0

    .choose-pop
        background: rgba(0, 0, 0, .5)
        position: fixed
        top: 0
        left: 0
        width: 100%
        height: 100%
        z-index: 9
        text-align: center

        .choose-content
            background: #fff
            width: 100%
            max-height: 6.4rem
            overflow-y: auto
            position: absolute
            bottom: 0
            left: 50%
            -webkit-transform: translate(-50%, 0)
            -moz-transform: translate(-50%, 0)
            -ms-transform: translate(-50%, 0)
            -o-transform: translate(-50%, 0)
            transform: translate(-50%, 0)

            .choose-item
                padding: .2rem .3rem

            .choose-item.active
                color: #258FED

    .search-cz
        margin: .6rem 0 1rem

        .login-btn
            background-color: $pageThemeColor
            color: #fff

</style>
