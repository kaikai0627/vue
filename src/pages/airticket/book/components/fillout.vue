<template>
    <div>
        <div class="insurance-advertising"></div>
        <div class="insurance">
            <i class="iconfont icon-baoxian skin font_skin_themeColor"></i>
            航空意外险
            <span class="compensate">最高赔付20万
                <span class="insurance-price">¥<span>{{costList.insurancePrice}}</span></span>
                元/份
            </span>
            <label>
                <!--<input type="checkbox" id="id" class=""/>-->
                <!--<i class="my-icon-checkbox"></i>-->
                <i class="checkbox-icon"
                   :class="{checked: isChecked}"
                   @click="isChecked = !isChecked"
                >
                </i>
            </label>
        </div>
        <div class="linkman">
            <div class="linkman-item">
                <div class="linkman-hd area-code pull-left">
                    <input type="text" value="+86" readonly="">
                    <i class="iconfont icon-iconfontyoujiantou"></i>
                </div>
                <div class="linkman-bd pull-left">
                    <input type="text" placeholder="请输入手机号码" autocomplete="off">
                </div>
            </div>
            <div class="linkman-item">
                <div class="linkman-hd pull-left">
                    联系邮箱
                </div>
                <div class="linkman-bd pull-left">
                    <input type="text" placeholder="请输入您的联系邮箱" autocomplete="off">
                </div>
            </div>
        </div>
        <div class="evection-wrap">
            <div class="evection-item clearfix">
                <div class="pull-left evection-title">支付方式</div>
                <input type="text" class="text-right pull-right" v-model="selectedText1"
                       @click="selectShow1 = true" readonly/>
                <i class="iconfont icon-iconfontyoujiantou"></i>
            </div>
        </div>
        <div class="evection-wrap">
            <div class="evection-item clearfix">
                <div class="pull-left evection-title">一次授权人</div>
                <input type="text" class="text-right pull-right" v-model="selectedText2"
                       @click="selectShow2 = true" readonly/>
                <i class="iconfont icon-iconfontyoujiantou"></i>
            </div>
            <div class="evection-item clearfix">
                <div class="pull-left evection-title">一次授权人</div>
                <input type="text" class="text-right pull-right" v-model="selectedText3"
                       @click="selectShow3 = true" readonly/>
                <i class="iconfont icon-iconfontyoujiantou"></i>
            </div>
        </div>
        <div class="explain">
            <div class="explain-title">出差说明</div>
            <textarea placeholder="请输入您的出差说明" onblur="setFocus(this)"></textarea>
        </div>
        <div class="choose-pop text-center" v-show="selectShow1" @click="selectShow1 = false">
            <div class="choose-content" @click.stop>
                <div class="choose-item skin font_skin_themeColor_active"
                     v-for="item of payList"
                     @click="chooseItem($event, item.id, 0)"
                     :class="{active: checked1 == item.id}"
                >
                    {{item.text}}
                </div>
            </div>
        </div>
        <div class="choose-pop text-center" v-show="selectShow2" @click="selectShow2 = false">
            <div class="choose-content" @click.stop>
                <div class="choose-item skin font_skin_themeColor_active"
                     v-for="item of chooseList"
                     @click="chooseItem($event, item.id, 1)"
                     :class="{active: checked2 == item.id}"
                >
                    {{item.text}}
                </div>
            </div>
        </div>

        <div class="choose-pop text-center" v-show="selectShow3" @click="selectShow3 = false">
            <div class="choose-content" @click.stop>
                <div class="choose-item skin font_skin_themeColor_active"
                     v-for="item of towChooseList"
                     @click="chooseItem($event, item.id, 2)"
                     :class="{active: checked3 == item.id}"
                >
                    {{item.text}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'BookFillout',
        props: {
            costList: Object
        },
        data() {
            return {
                isChecked: false,
                selectShow1: false,
                selectShow2: false,
                selectShow3: false,
                payList: [{
                    text: "钱包授信支付",
                    id: 0
                }, {
                    text: "支付宝",
                    id: 1
                }, {
                    text: "微信",
                    id: 2,
                }],
                chooseList: [{
                    text: "张三",
                    id: 0
                }, {
                    text: "李四",
                    id: 1
                }, {
                    text: "王五",
                    id: 2,
                }],
                towChooseList: [{
                    text: "赵",
                    id: 0
                }, {
                    text: "钱",
                    id: 1
                }, {
                    text: "孙",
                    id: 2,
                }],
                selectedText1: '钱包授信支付',
                selectedText2: '张三',
                selectedText3: '赵',
                checked1: 0,
                checked2: 0,
                checked3: 0
            }
        },
        methods: {
            chooseItem(e, is, item) {
                if (item == 0) {
                    this.checked1 = is
                    this.selectShow1 = false
                    this.selectedText1 = e.target.innerText
                } else if (item == 1) {
                    this.checked2 = is
                    this.selectShow2 = false
                    this.selectedText2 = e.target.innerText
                } else {
                    this.checked3 = is
                    this.selectShow3 = false
                    this.selectedText3 = e.target.innerText
                }
            }
        }
    }
</script>

<style lang="stylus" type="text/stylus" scoped>
    .insurance-advertising {
        height: 1.2rem;
        background: url("./bg-05.png") no-repeat;
        background-size: 100%;
    }

    .insurance {
        padding: .35rem .34rem .35rem .79rem;
        position: relative;

        .icon-baoxian {
            font-size: .3rem;
            position: absolute;
            left: .34rem;
            top: .42rem;
        }

        .compensate {
            color: #666;
            font-size: .24rem;
        }

        .insurance-price {
            color: #E31414;

            span {
                font-size: .34rem;
            }
        }

        label {
            position: absolute;
            right: .34rem;
            top: .35rem;
        }
    }

    .linkman {
        margin: 0 0 .2rem;
        overflow: hidden;

        .linkman-item {
            background: #fff;
            height: 1.2rem;
            line-height: .6rem;
            padding: .3rem 0;
            border-bottom: 1px solid #DCDCDC;

            &:last-child {
                border: none;
            }

            input {
                height: .6rem;
                width: 100%;
            }

            .linkman-hd {
                width: 2rem;
                position: relative;
                padding-left: .4rem;

                .iconfont {
                    position: absolute;
                    right: .5rem;
                    top: 50%;
                    -webkit-transform: translate(0, -50%);
                    -moz-transform: translate(0, -50%);
                    -ms-transform: translate(0, -50%);
                    -o-transform: translate(0, -50%);
                    transform: translate(0, -50%);
                    color: #999;
                }
            }

            .area-code::after {
                content: '';
                display: inline-block;
                height: 100%;
                border-left: 1px solid #DCDCDC;
                position: absolute;
                right: .2rem;
                top: 0;
            }
        }
    }

    .evection-wrap {
        margin-bottom: .1rem;
        padding: 0 .34rem;
        background: #fff;

        .evection-item {
            height: .8rem;
            line-height: .8rem;
            position: relative;
            border-bottom: 1px solid #DCDCDC;

            &:last-child {
                border-bottom: none;
            }

            .iconfont {
                position: absolute;
                right: 0;
                color: #999;
            }

            .evection-title {
                width: 1.75rem;
                font-size: .3rem;
            }

            input {
                background: transparent;
                width: 5.05rem;
                height: .8rem;
                position: relative;
                z-index: 1;
                color: #666;
                font-size: .24rem;
                padding-right: .4rem;
            }

            .icon-gray-rt {
                right: 0;
            }
        }
    }

    .explain {
        background-color: #fff;
        padding: 0 .34rem .5rem;

        .explain-title {
            padding: .28rem 0;
            font-size: .3rem;
        }

        textarea {
            border: none;
            height: 3.45rem;
            width: 100%;
            background: #F5F5F5;
            padding: .3rem .25rem;
        }
    }

    div.choose-content {
        bottom: .98rem;
    }

</style>
