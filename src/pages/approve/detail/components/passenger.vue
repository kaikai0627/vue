<template>
    <div class="passenger-wrap">
        <div class="passenger-item">
            <div class="passenger-title">
                <i class="iconfont icon-ren skin font_skin_themeColor"></i>乘机人
            </div>
            <div class="passenger-sub-title skin font_skin_themeColor">
                旅客1
            </div>
            <div class="passenger-content">
                <div><span>张三/</span>员工&nbsp;男&nbsp;{{underAge}}</div>
                <div>生日：{{birthday}}</div>
                <div>身份证：21231321232101010</div>
                <div>证件有效期：2020-11-11</div>
                <div>手机号：1830201101</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'detailPassenger',
        data() {
            return {
                underAge: "",
                birthday: "1991-11-11"
            }
        },
        methods: {
            getAge() {
                var birthdays = new Date(this.birthday.replace(/-/g, "/"));
                var d = new Date();
                var age =
                    d.getFullYear() - birthdays.getFullYear() - (d.getMonth() < birthdays.getMonth() ||
                    (d.getMonth() == birthdays.getMonth() && d.getDate() < birthdays.getDate())
                    ? 1
                    : 0);
                if (age >= 18) {
                    this.underAge = "成年"
                } else {
                    this.underAge = "未成年"
                }
            }
        },
        mounted() {
            this.getAge()
        }
    }
</script>

<style lang="stylus" scoped>
    .passenger-wrap {
        margin-bottom: .1rem;
        background: #fff;
        line-height: .6rem;
        font-size: .26rem;

        .passenger-item {
            position: relative;
            padding: .35rem 0 0 2.4rem;

            .passenger-title {
                font-size: .32rem;
                position: absolute;
                left: .82rem;
                top: .35rem;

                i {
                    position: absolute;
                    left: -.45rem;
                }
            }

            .passenger-sub-title {
                position: absolute;
                left: .82rem;
                top: .95rem;
                color: #258FED;
            }

            .passenger-content {
                border-bottom: 1px solid #E5E5E5;
                padding-bottom: .25rem;

                span {
                    font-size: .28rem;
                }
            }

            &:last-child .passenger-content {
                border: none;
            }
        }
    }
</style>
