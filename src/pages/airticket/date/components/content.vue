<template>
    <div>
        <div class="layer-header">
            <!-- 星期 -->
            <ul class="weekdays">
                <li>一</li>
                <li>二</li>
                <li>三</li>
                <li>四</li>
                <li>五</li>
                <li style="color:red">六</li>
                <li style="color:red">日</li>
            </ul>
            <!-- 年份 月份 -->
            <!--<div class="year-month">-->
            <!--{{ currentYear }}年{{ currentMonth }}月-->
            <!--</div>-->
        </div>
        <!--循环days 渲染12个月日历-->
        <div class="days" v-for="(list,index) in days">
            <div class="year-month">{{viewYear[index]}}年{{viewMonth[index]}}月</div>
            <!--
                循环list 把每一天渲染到day-item上 ,
                只显示本月的day ,
                selectedGoDay给去程选中的day添加active ,
                selectedBackDay给回程选中的day添加active
             -->
            <div class="day-item" v-for="(dayobject,id) in list"
                 v-if="dayobject.day.getMonth()+1 == viewMonth[index]"
                 :class="{active: selectedGoDay == ((dayobject.day.getFullYear().toString())+
                 ((dayobject.day.getMonth() + 1).toString())+
                 (dayobject.day.getDate().toString())) ||
                  selectedBackDay ==
                    ((dayobject.day.getFullYear().toString())+
                    ((dayobject.day.getMonth() + 1).toString())+
                    (dayobject.day.getDate().toString()))}"
            >
                <!-- 今天 , 默认给今天添加active -->
                <span :class="{today_active: todayActive == true}"
                      v-if="dayobject.day.getFullYear() == new Date().getFullYear()
                            && dayobject.day.getMonth() == new Date().getMonth()
                            && dayobject.day.getDate() == new Date().getDate()"
                      @click="selectedDate(dayobject.day.getFullYear(),
                              dayobject.day.getMonth() + 1,
                              dayobject.day.getDate())"
                >
                    今天
                </span>
                <!-- 整月的day 添加click选择日期 传入参数年 月 日 进行处理 -->
                <span v-else>
                    <span v-if="dayobject.day > new Date()"
                          @click="selectedDate(dayobject.day.getFullYear(),
                          dayobject.day.getMonth() + 1,dayobject.day.getDate())"
                    >
                        {{ dayobject.day.getDate() }}
                    </span>
                    <!-- 给今天之前的日期添加样式字体灰色 不可点击 -->
                    <span v-else class="history-day">
                        {{ dayobject.day.getDate() }}
                    </span>
                </span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'DateContent',
    data: function () {
        return {
            currentDay: 1,  // 天
            currentMonth: 1,    //月份
            currentYear: 1970,  //年份
            currentWeek: 1, // 星期
            days: [],      //大数组 里面包含12个小数组 存放12个月的日历
            viewYear: [], // 放置12个月的年份
            viewMonth: [],  // 放置12个月的月份
            selectedGoDay: localStorage.storeGoSelectedDay || null,     //已选择去程是某天
            selectedBackDay: localStorage.storeBackSelectedDay || null, //已选择返程是某天
            todayActive: localStorage.storeDefalutDay || true           //第一次进时storage为空 默认选中今天
        }
    },
    // 页面加载成功 调用12次日历方法 每次把月份加1
    created () {
        let that = this
        let date = new Date()
        let year, month
        for (var i = 0; i < 12; i++) {
            var add = 1
            // 循环第一次时使用当前月份 不用加1
            if (i == 0) {
                add = 0
            }
            // 月份加1
            date.setMonth(date.getMonth() + add)
            // 获取年
            year = date.getFullYear()
            // 获取月
            month = date.getMonth() + 1
            that.initData(that.formatDate(year, month, 1), i)
        }
    },
    methods: {
        initData: function (cur, id) {
            let that = this
            let leftcount = 0 //存放剩余数量
            let date = new Date(cur) // 参数2019-04-04字符串转换成日期格式
            that.days[id] = new Array() // 向days数组中创建子数组 存放每个月的日历
            that.viewYear.push(cur.slice(0, 4)) // 截取日期年份
            that.viewMonth.push(date.getMonth() + 1) // 截取日期月份
            that.currentDay = date.getDate()
            that.currentYear = date.getFullYear()
            that.currentMonth = date.getMonth() + 1
            that.currentWeek = date.getDay() // 1...6,0
            if (that.currentWeek == 0) {
                that.currentWeek = 7
            }
            let str = that.formatDate(that.currentYear, that.currentMonth, that.currentDay)
            // that.days[id].length = 0  // 今天是周日，放在第一行第7个位置，前面6个
            //初始化本周
            for (let i = that.currentWeek - 1; i >= 0; i--) {
                let d = new Date(str)
                d.setDate(d.getDate() - i)
                let dayobject = {} //用一个对象包装Date对象  以便为以后预定功能添加属性
                dayobject.day = d
                that.days[id].push(dayobject) //将日期放入data 中的days数组 供页面渲染使用
            }                    //其他周
            for (let i = 1; i <= 35 - that.currentWeek; i++) {
                let d = new Date(str)
                d.setDate(d.getDate() + i)
                let dayobject = {}
                dayobject.day = d
                that.days[id].push(dayobject)
            }
        },
        // 返回 类似 yyyy-mm-dd 格式的字符串
        formatDate: function (year, month, day) {
            let y = year
            let m = month
            if (m < 10) m = '0' + m
            let d = day
            if (d < 10) d = '0' + d
            return y + '-' + m + '-' + d
        },
        // 选择时间
        selectedDate (year, month, day) {
            let date = this.formatDate(year, month, day)
            var chooseDay = year.toString() + month.toString() + day.toString() //保存已选择天 格式为201947
            if (month < 10) { // 月数不足两位 前面补0
                month = '0' + month
            }
            if (day < 10) { // 天数不足两位 前面补0
                day = '0' + day
            }
            let compare = year + month + day  //保存已选择天 格式为20190407
            // 1代表是返程 0代表去程
            if (this.$route.query.type == 1) {
                if (Number(compare) < Number(localStorage.storeCopyGoSelectedDay)) {
                    alert('返程日期不可小于去程日期')
                } else {
                    this.$router.push({
                        path: '/airtitcket/search',
                        query: {
                            backDate: date
                        }
                    })
                    // 选择返程是某天 并存到cookie中
                    this.selectedBackDay = chooseDay
                    try {
                        localStorage.storeBackSelectedDay = chooseDay
                        localStorage.storeCopyBackSelectedDay = compare
                    } catch (e) {
                    }
                }
            } else {
                if (Number(compare) > Number(localStorage.storeCopyBackSelectedDay)) {
                    alert('去程日期不可大于返程日期')
                } else {
                    this.$router.push({
                        path: '/airtitcket/search',
                        query: {
                            goDate: date
                        }
                    })
                    // 选择去程是某天 并存到cookie中
                    this.selectedGoDay = chooseDay
                    this.todayActive = false
                    try {
                        localStorage.storeGoSelectedDay = chooseDay
                        localStorage.storeCopyGoSelectedDay = compare
                        localStorage.storeDefalutDay = false
                    } catch (e) {
                    }
                }
            }

        }
    }
}
</script>

<style lang="stylus" type="text/stylus" scoped>

    #calendar {
        width: 98%;
        border: 2px solid #A4A7B0;
        height: 335px;
        margin-left: 0.5%;
    }

    .layer-header {
        position: fixed;
        top: .88rem;
        left: 0;
        width: 100%;
        background: #fff;
        text-align: center;
    }

    .weekdays {
        height: .6rem;
        overflow: hidden;
    }

    .weekdays li {
        float: left
        width: 14.2%;
        line-height: .6rem;
    }

    .year-month {
        background: #f8f8f8;
        line-height: .7rem;
        height: .7rem;
        text-align: center;
        margin-bottom: .16rem;
    }

    .choose-year {
        padding: 0 20px;
        font-size: 16px;
        font-weight: 200;
    }

    .choose-month {
        text-align: center;
        font-size: 16px;
        font-weight: 200;
    }

    .arrow {
        width: 3%;
        height: 25px;
    }

    .days {
        padding-bottom: .16rem;
        overflow: hidden;
    }

    .day-item {
        float: left;
        width: 14.2%;
        height: 1.04rem;
        line-height: 1.04rem;
        text-align: center;
        font-size: .32rem;
        font-weight: 200;
        color: #333;
    }

    .day-item.active, .today_active {
        background: #0086F6
        color: #fff;
        border-radius 3px;
    }

    .day-item span {
        display: block;

    }

    .history-day {
        color: #d0d0d0;
    }


</style>
