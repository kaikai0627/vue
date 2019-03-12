<template>
    <div>
        <div class="cause-title text-center">预定原航班原因说明</div>
        <div class="cause-text">根据贵公司差旅政策规定，您未选择最低价舱位航班出，故请您选择原因</div>
        <div class="choose-cause">
            <input type="text" v-model="space" @click="choosePop = true" readonly>
            <i class="iconfont icon-iconfontxiajiantou"></i>
        </div>
        <div class="text-center">
            <button type="button" @click="toBook" class="btn skin btn_skin_themColor login-btn">
                继续预订
            </button>
        </div>
        <div class="choose-pop" @click="hideClick" v-show="choosePop">
            <div class="choose-content" @click.stop>
                <div class="choose-item skin font_skin_themeColor_active"
                     :class="{active: selected == 0}" @click="chooseItem(0,$event)"
                >
                    不限舱位
                </div>
                <div class="choose-item skin font_skin_themeColor_active"
                     :class="{active: selected == 1}" @click="chooseItem(1,$event)"
                >
                    经济舱
                </div>
                <div class="choose-item skin font_skin_themeColor_active"
                     :class="{active: selected == 2}" @click="chooseItem(2,$event)"
                >
                    公务舱/头等舱
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'CauseContent',
        data() {
            return {
                selected: 0,
                choosePop: false,
                space: '不限舱位'
            }
        },
        methods: {
            chooseItem(index, e) {
                this.selected = index
                this.space = e.target.innerText
                this.choosePop = false
            },
            hideClick() {
                this.choosePop = false
            },
            toBook() {
                this.$router.push({path: '/airtitcket/book'})
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .cause-title {
        font-size: .32rem;
        margin: .2rem 0;
        padding: 0 .34rem;
    }

    .cause-text {
        color: #666;
        text-indent: .35rem;
        padding: 0 .34rem;
    }

    .choose-cause {
        height: .75rem;
        width: 6.8rem;
        margin: .4rem auto 2.8rem;
        position: relative;
        border: 1px solid #E8E8E8;

        input {
            height: 100%;
            width: 100%;
            background: transparent;
            padding-left: .2rem;
        }

        .iconfont {
            position: absolute;
            right: .34rem;
            top: .22rem;
            color: #999;
        }
    }
</style>
