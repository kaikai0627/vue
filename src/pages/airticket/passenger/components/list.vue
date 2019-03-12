<template>
    <div class="main">
        <div class="search-passenger">
            <input type="text" placeholder="请输入关键字">
            <i class="iconfont icon-sousuo icon-search"></i>
        </div>
        <div class="passenger-list">
            <div class="passenger-item">
                <div class="passenger-hd">
                    <i class="iconfont icon-ren skin font_skin_themeColor"></i>
                    张三<span class="eng-name">ZHANG/SAN</span><span class="passenger-type pull-right skin font_skin_themeColor">员工</span>
                </div>
                <div class="passenger-bd">
                    <label class="passenger-chose">
                        <i class="checkbox-icon"
                           :class="{checked: isChecked}"
                           @click="isChecked = !isChecked"
                        >
                        </i>
                    </label>
                    <div class="passenger-text">WPS&nbsp;Heavy&nbsp;Division&nbsp;-&nbsp;General</div>
                    <div>身份证&nbsp;32122202020202101</div>
                    <div>手机号&nbsp;1832291918</div>
                </div>
            </div>
            <div class="text-center">没有更多数据...</div>
        </div>
        <div class="passenger-operation clearfix">
            <button type="button" class="pull-left" @click="cancelAdd">取消</button>
            <button type="button" class="pull-left skin btn_skin_themColor">完成</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'LinkmanList',
        data () {
            return {
                isChecked: false
            }
        },
        methods: {
            cancelAdd () {
                this.$router.push({path:"/airtitcket/book"})
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .main {
        padding-bottom: 1.3rem;

        .search-passenger {
            position: relative;
            margin: .2rem .34rem;
            background: #fff;
            height: .83rem;

            input {
                height: 100%;
                width: 100%;
                padding: 0 1rem 0 .3rem;
            }

            .icon-sousuo {
                position: absolute;
                top: 50%;
                right: .3rem;
                margin-top: -.14rem;
            }
        }

        .passenger-list {
            padding: 0 .34rem;

            .passenger-item {
                background: #fff;
                border-radius: .1rem;
                margin-bottom: .1rem;

                .passenger-hd {
                    height: .88rem;
                    line-height: .88rem;
                    padding-left: .9rem;
                    padding-right: .3rem;
                    position: relative;
                    font-size: .3rem;
                    border-bottom: 1px solid #E5E5E5;

                    .icon-ren {
                        position: absolute;
                        left: .3rem;
                        font-size: .3rem;
                    }

                    .eng-name {
                        font-size: .26rem;
                        color: #666;
                        margin-left: .1rem;
                    }

                    .passenger-type {
                        font-size: .28rem;
                    }
                }

                .passenger-bd {
                    padding: .35rem 0 .35rem .95rem;
                    position: relative;
                    line-height: .4rem;

                    .passenger-chose {
                        position: absolute;
                        left: .3rem;
                        top: 50%;
                        margin-top: -.22rem;
                    }

                    .passenger-text {
                        font-size: .24rem;
                    }
                }
            }
        }

        .passenger-operation {
            position: fixed;
            bottom: 0;
            left: 0;
            z-index: 1;
            width: 100%;

            button {
                width: 50%;
                height: .98rem;
                font-size: .36rem;
                border: none;
                outline: none;

                &:first-child {
                    background: #fff;
                }

                &:last-child {
                    background: #258FED;
                    color: #fff;
                }
            }
        }
    }
</style>
