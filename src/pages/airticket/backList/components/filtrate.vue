<template>
    <div class="sort-list clearfix text-center">
        <div class="sort-item pull-left skin font_skin_themeColor_active"
             @click="sortType('0')"
             :class="{active: sortActive === '0'}"
        >
            <div class="iconfont icon-clock sort-icon"></div>
            <div>{{dateText}}</div>
        </div>
        <div class="sort-item pull-left skin font_skin_themeColor_active"
             @click="sortType('1')"
             :class="{active: sortActive === '1'}"
        >
            <div class="iconfont icon-jiage sort-icon"></div>
            <div>{{priceText}}</div>
        </div>
        <div class="sort-item pull-left skin font_skin_themeColor_active"
             @click="sortType"
        >
            <div class="iconfont icon-shaixuan sort-icon"></div>
            <div>筛选</div>
        </div>
        <div class="filtrate-pop" v-show="filtratePop">
            <div class="filtrate-content">
                <div class="filtrate-hd text-center">
                    条件筛选
                    <button type="button" class="btn skin btn_border_skin_themColors btn-v-code pull-right">清除筛选
                    </button>
                </div>
                <div class="filtrate-bd text-left">
                    <div class="filtrate-title">航空公司</div>
                    <div class="filtrate-list clearfix">
                        <label>
                            <input type="checkbox" class="hidden">
                            <i class="my-icon-checkbox"></i>
                            深圳航空
                        </label>
                        <label>
                            <input type="checkbox" class="hidden">
                            <i class="my-icon-checkbox"></i>
                            吉祥航空
                        </label>
                    </div>
                    <div class="filtrate-title">出发时间</div>
                    <div class="filtrate-list clearfix">
                        <label>
                            <input type="checkbox" class="hidden">
                            <i class="my-icon-checkbox"></i>
                            06:00-12:00
                        </label>
                        <label>
                            <input type="checkbox" class="hidden">
                            <i class="my-icon-checkbox"></i>
                            12:00-18:00
                        </label>
                        <label>
                            <input type="checkbox" class="hidden">
                            <i class="my-icon-checkbox"></i>
                            18:00-24:00
                        </label>
                    </div>
                    <div class="filtrate-title">到达时间</div>
                    <div class="filtrate-list clearfix">
                        <label>
                            <input type="checkbox" class="hidden">
                            <i class="my-icon-checkbox"></i>
                            06:00-12:00
                        </label>
                        <label>
                            <input type="checkbox" class="hidden">
                            <i class="my-icon-checkbox"></i>
                            12:00-18:00
                        </label>
                        <label>
                            <input type="checkbox" class="hidden">
                            <i class="my-icon-checkbox"></i>
                            18:00-24:00
                        </label>
                    </div>
                    <div class="filtrate-title">出发机场</div>
                    <div class="filtrate-list clearfix">
                        <label>
                            <input type="checkbox" class="hidden">
                            <i class="my-icon-checkbox"></i>
                            上海虹桥国际机场
                        </label>
                        <label>
                            <input type="checkbox" class="hidden">
                            <i class="my-icon-checkbox"></i>
                            上海浦东国际机场
                        </label>
                    </div>
                    <div class="filtrate-title">出发机场</div>
                    <div class="filtrate-list clearfix">
                        <label>
                            <input type="checkbox" class="hidden">
                            <i class="my-icon-checkbox"></i>
                            上海虹桥国际机场
                        </label>
                        <label>
                            <input type="checkbox" class="hidden">
                            <i class="my-icon-checkbox"></i>
                            上海浦东国际机场
                        </label>
                    </div>
                </div>
                <div class="filtrate-foot clearfix">
                    <button type="button" class="btn pull-left" @click="filtratePopHide">取消</button>
                    <button type="button" class="btn skin btn_skin_themColor pull-left">确认</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'BackFiltrate',
        props: {
            list: Array
        },
        data() {
            return {
                sortActive: "",      //排序被选中
                dateText: "时间",     //时间排序
                priceText: "价格",    //价格排序
                filtratePop: false, //筛选弹框 默认隐藏
                flightList: [],  //航班列表
            }
        },
        watch: {
            //父组件传过来的list存到flightList数组里
            list: function (newVal) {
                this.flightList = newVal;
            }
        },
        methods: {
            // 排序类型 type=1时间排序  =2价格排序
            sortType(type) {
                if (type === "0") {
                    this.sortActive = "0"
                    this.priceText = "价格"
                    if (this.dateText == "时间" || this.dateText == "时间从晚到早") {
                        this.dateText = "时间从早到晚"
                        this.flightList.sort((a, b) => b.begDate < a.begDate ? 1 : -1)
                    } else if (this.dateText === "时间从早到晚") {
                        this.dateText = "时间从晚到早"
                        this.flightList.sort((a, b) => a.begDate < b.begDate ? 1 : -1)
                    }
                } else if (type === "1") {
                    this.sortActive = "1"
                    this.dateText = "时间"
                    if (this.priceText == "价格" || this.priceText == "价格从低到高") {
                        this.priceText = "价格从高到低"
                        this.flightList.sort((a, b) => a.price < b.price ? 1 : -1)
                    } else if (this.priceText === "价格从高到低") {
                        this.priceText = "价格从低到高"
                        this.flightList.sort((a, b) => b.price < a.price ? 1 : -1)
                    }
                } else {
                    this.filtratePop = true
                }
            },
            filtratePopHide() {
                this.filtratePop = false
            }
        }
    }
</script>

<style lang="stylus" type="text/stylus" scoped>
    .sort-list
        position: fixed
        z-index: 1
        background: #fff
        bottom: 0
        left: 0
        border-top: 1px solid #EDEDED
        height: .95rem

        .sort-item
            width: 33.3%
            padding: .15rem 0 .1rem

            .sort-icon
                font-size: .4rem

    .filtrate-pop
        position: fixed
        top: 0
        left: 0
        width: 100%
        height: 100%
        z-index: 99
        background: rgba(0, 0, 0, .5)

        .filtrate-content
            position: absolute
            bottom: 0
            background: #fff
            width: 100%

            .filtrate-hd
                padding: 0 .34rem
                height: .95rem
                line-height: .95rem
                font-size: .34rem
                border-bottom: 1px solid #E7E7E7

                .btn
                    margin-top: .24rem
                    border-radius: .1rem

            .filtrate-bd
                padding: 0 .34rem
                height: 8rem
                overflow-y: auto

                .filtrate-title
                    margin-top: .25rem
                    font-size: .32rem

                .filtrate-list
                    padding: .4rem 0 0 0
                    border-bottom: 1px solid #EDEDED
                    font-size: .3rem

                    label
                        margin-bottom: .3rem
                        width: 50%
                        position: relative
                        display: inline-block

                        .my-icon-checkbox
                            vertical-align: bottom

            .filtrate-foot
                border-top: 1px solid #F7F7F7

                .btn
                    border-radius: 0
                    width: 50%
                    height: 1rem
                    background: #fff
                    font-size: .32rem
                    position: relative
                    top: 1px

                .btn.btn-blue
                    background: #258FED
</style>
