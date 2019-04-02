<template>
    <div class="content" ref="wrapper">
        <div class="city-list">
            <div class="city-tit">热门城市</div>
            <div class="clearfix">
                <div class="item-city pull-left"
                     v-for="item of hotList"
                     :key="item.id"
                     @click="handCityClick"
                >
                    <span class="city">{{item.name}}</span>
                </div>
            </div>
            <div class="city-tit">试试城市首字母检索</div>
            <div class="screen-alphabet clearfix" v-show="show">
                <div class="item-city pull-left">
                    <span class="city">{{letter}}</span>
                </div>
                <div class="item-city pull-left" @click="hideCheck">
                    <span class="city">A-Z</span>
                </div>
            </div>
            <div class="clearfix" v-show="hide">
                <div class="item-city pull-left"
                     v-for="(item, key) of letterList"
                     :key="key"
                >
                    <span class="city" @click="checkedLetter(key)">{{key}}</span>
                </div>
            </div>
            <div class="clearfix"
                 v-for="(item, key) of letterList"
                 :key="key"
                 v-show="key == keyShow"
            >
                <div class="item-city pull-left"
                     v-for="innerItem of item"
                     :key="innerItem.id"
                     @click="handCityClick"
                >
                    <span class="city">{{innerItem.name}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import Bscroll from 'better-scroll'

  export default {
    name: 'List',
    mounted () {
      this.scroll = new Bscroll(this.$refs.wrapper)
    },
    props: {
      hotList: Array,
      letterList: Object
    },
    data () {
      return {
        letter: '',
        show: false,
        hide: true,
        keyShow: '',
        departA: this.depart
      }
    },
    methods: {
      checkedLetter (index) {
        this.letter = index
        this.show = true
        this.hide = false
        this.keyShow = index
      },
      hideCheck () {
        this.hide = true
        this.show = false
        this.letter = ''
        this.keyShow = ''
      },
      handCityClick (e) {
        this.$emit('chang', e.target.innerText)
      }
    }
  }
</script>

<style lang="stylus" type="text/stylus" scoped>
    @import '~styles/varibles.styl'
    .content
        position: fixed
        top: 3rem
        left: 0
        right: 0
        bottom: 0
        background: #fff
        margin: 0 .34rem
        overflow: hidden

    .city-list
        padding: .1rem

    .city-tit
        margin: .15rem 0 .15rem 0
        color: $pageThemeColor

    .item-city
        width: 25%
        padding: .055rem .055rem

    .city
        display: block
        height: .54rem
        line-height: .54rem
        border: .02rem solid $pageThemeColor
        color: $pageThemeColor
        text-align: center
        -webkit-border-radius: .1rem
        -moz-border-radius: .1rem
        border-radius: .1rem
        ellipsis()

    .screen-alphabet
        .item-city
            width: 33.3%

</style>
