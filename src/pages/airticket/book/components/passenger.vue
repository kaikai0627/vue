<template>
    <div class="passenger-wrap">
        <div class="passenger-hd">
            <i class="iconfont icon-ren skin font_skin_themeColor"></i>乘机人&nbsp;仅支持成人票预订
            <button type="button"
                    class="btn skin btn_skin_themColor btn-v-code btn-corner-small"
                    @click="handGoAdd"
            >
                添加
            </button>
        </div>
        <div class="passenger-item" v-for="(item,index) in linkman">
            <div class="item-hd">{{item[0]}}&nbsp;<span>{{item[1]}}</span>
                <span class="pull-right delete-passenger skin font_skin_themeColor" @click="deleteItem(index)">删除</span>
            </div>
            <div class="item-bd">
                <div>
                    <span class="item-title">身份证</span>
                    <a href="javascript:void(0);" style="color: #363636;">{{item[2]}}</a>
                </div>
                <div>
                    <span class="item-title">手机号</span>
                    <a href="javascript:void(0);" style="color: #363636;">{{item[3]}}</a>
                </div>
                <i class="iconfont icon-iconfontyoujiantou skin font_skin_themeColor"></i>
            </div>
        </div>
        <div class="service-charge text-right">基础服务费&nbsp;<span>80</span>元/份</div>
    </div>
</template>

<script>
export default {
    name: 'BookPassenger',
    props: {
        linkmanItem: Array
    },
    data () {
        return {
            linkman: []
        }
    },
    methods: {
        handGoAdd () {
            this.$router.push({path: '/airtitcket/passenger'})
        },
        deleteItem (id) {
            this.linkman.splice(id, 1)
            this.$emit('change', this.linkman)
        }
    },
    watch: {
        linkmanItem () {
            this.linkman = this.linkmanItem
        }
    }
}
</script>

<style lang="stylus" type="text/stylus" scoped>
    .passenger-wrap {
        margin-top: .1rem;
        background: #fff;
        padding: 0 .34rem;

        .passenger-hd {
            position: relative;
            padding: .4rem 0 .4rem .45rem;

            span {
                font-size: .24rem;
                color: #666;
            }

            .btn {
                position: absolute;
                right: 0;
                top: .35rem;
                width: 1.4rem;
            }
        }

        .icon-ren {
            position: absolute;
            left: 0;
            top: .43rem;
        }
    }

    .passenger-item {
        background: #F5F5F5;
        border-radius: .1rem;
        margin-bottom: .1rem;

        .item-hd {
            height: .85rem;
            line-height: .85rem;
            padding: 0 .2rem;
            font-size: .3rem;
            border-bottom: 1px solid #E5E5E5;

            span {
                font-size: .24rem;
                color: #999;
                margin-left: .1rem;
            }

            .delete-passenger {
                color: #248FED;
                font-size: .28rem;
            }
        }

        .item-bd {
            padding: .15rem .2rem;
            line-height: .5rem;
            position: relative;

            .iconfont {
                position: absolute;
                top: 50%;
                right: .2rem;
                -webkit-transform: translate(0, -50%);
                -moz-transform: translate(0, -50%);
                -ms-transform: translate(0, -50%);
                -o-transform: translate(0, -50%);
                transform: translate(0, -50%);
            }

            span {
                color: #363636 !important;
            }

            .item-title {
                width: 1.35rem;
                display: inline-block;
            }
        }

    }

    .service-charge {
        padding: .2rem 0;
        font-size: .24rem;

        span {
            color: #E31415;
            font-size: .3rem;
        }
    }
</style>
