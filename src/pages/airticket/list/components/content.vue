<template>
  <div>
    <template v-if="list.length >= 1">
      <div ref="item_number">
        <template v-if="taxWhether">
          <div
            class="flight-item"
            v-for="item of flightList"
            :key="item.id"
            v-if="item.tax"
            @click="handToFlight"
          >
            <div class="text-right benefit">
              <span class="pull-left">{{item.type}}</span>
              {{item.sendCoupon}}&nbsp;送{{item.sendIntegrals}}积分
            </div>
            <div class="clearfix">
              <div class="airport-info pull-left">
                <div class="airport-date">{{item.begDate}}</div>
                <div class="airport-city">{{item.begCity}}</div>
              </div>
              <div class="airport-transit text-center pull-left">
                <div>中转</div>
                <i class="icon-arrow-line"></i>
                <div>长沙</div>
              </div>
              <div class="airport-info text-right pull-left">
                <div class="airport-date">{{item.endDate}}</div>
                <div class="airport-city">{{item.endCity}}</div>
              </div>
              <div class="discount pull-left text-center">
                <div class="flight-price">
                  &yen;
                  <span>{{item.price}}</span>
                </div>
                <div>会员价{{item.discount}}折</div>
              </div>
            </div>
            <div class="remark">
              <i class="pf pf_cz"></i>
              {{item.airline}}&nbsp;MU5331&nbsp;330大&nbsp;有餐食
            </div>
          </div>
        </template>
        <template v-else>
          <div
            class="flight-item"
            v-for="item of list"
            :key="item.id"
            v-if="item.tax == false"
            @click="handToFlight"
          >
            <div class="text-right benefit">
              <span class="pull-left">{{item.type}}</span>
              {{item.sendCoupon}}&nbsp;送{{item.sendIntegrals}}积分
            </div>
            <div class="clearfix">
              <div class="airport-info pull-left">
                <div class="airport-date">{{item.begDate}}</div>
                <div class="airport-city">{{item.begCity}}</div>
              </div>
              <div class="airport-transit text-center pull-left">
                <div>中转</div>
                <i class="icon-arrow-line"></i>
                <div>长沙</div>
              </div>
              <div class="airport-info text-right pull-left">
                <div class="airport-date">{{item.endDate}}</div>
                <div class="airport-city">{{item.endCity}}</div>
              </div>
              <div class="discount pull-left text-center">
                <div class="flight-price">
                  &yen;
                  <span>{{item.price}}</span>
                </div>
                <div>往返价{{item.discount}}折</div>
              </div>
            </div>
            <div class="remark">
              <i class="pf pf_cz"></i>
              {{item.airline}}&nbsp;MU5331&nbsp;330大&nbsp;有餐食
            </div>
          </div>
        </template>
      </div>
      <div class="flight-date clearfix" v-if="list.length >= 1">
        筛选合适的航班时间
        <ul class="cut-type text-center pull-right">
          <li class="pull-left active">起飞时间</li>
          <li class="pull-left">降落时间</li>
        </ul>
      </div>
      <div>
        <ul class="chart-list clearfix">
          <li class="chart-item pull-left">
            <div class="chart-progress" style="transform: translateY(.5rem);">
              <div class="chart-price">¥2498</div>
            </div>
          </li>
          <li class="chart-item pull-left">
            <div class="chart-progress" style="transform: translateY(2rem);">
              <div class="chart-price">¥2498</div>
            </div>
          </li>
          <li class="chart-item pull-left">
            <div class="chart-progress" style="transform: translateY(1rem);">
              <div class="chart-price">¥2498</div>
            </div>
          </li>
          <li class="chart-item pull-left">
            <div class="chart-progress" style="transform: translateY(2rem);">
              <div class="chart-price">¥2498</div>
            </div>
          </li>
          <li class="chart-item pull-left">
            <div class="chart-progress" style="transform: translateY(3rem);">
              <div class="chart-price">¥2498</div>
            </div>
          </li>
          <li class="chart-item pull-left">
            <div class="chart-progress" style="transform: translateY(2rem);">
              <div class="chart-price">¥2498</div>
            </div>
          </li>
          <li class="chart-item pull-left">
            <div class="chart-progress" style="transform: translateY(1.5rem);">
              <div class="chart-price">¥2498</div>
            </div>
          </li>
        </ul>
        <table class="time-list">
          <tbody>
            <tr>
              <td>0点</td>
              <td>6点</td>
              <td>9点</td>
              <td>12点</td>
              <td>15点</td>
              <td>18点</td>
              <td>21点</td>
              <td>24点</td>
            </tr>
          </tbody>
        </table>
      </div>
    </template>
    <div class="no-flight text-center" v-else>
      <img src="~images/no_result.png" alt>

      <div>没有找到结果哎~</div>
      <div class="no-btn text-center">
        <button type="button" class="btn skin btn_border_skin_themColors login-btn btn-ellipse">返回首页</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListContent",
  props: {
    list: Array,
    whether: Boolean,
    airlineFiltrate: Array
  },
  data() {
    return {
      taxWhether: true,
      flightList: [],
      filtrateSucceed: [],
      count: null,
      backDate: this.$route.query.backDate || null
    };
  },
  methods: {
    // 选择航班
    handToFlight() {
      if (this.$route.query.backDate) {
        this.$router.push({
          path: "/airtitcket/backList",
          query: {
            backDate: this.backDate
          }
        });
      } else {
        this.$router.push({
          path: "/airtitcket/chooseSpace"
        });
      }
    },
    // 获取航班条数
    _getItemLength() {
      let children = this.$refs.item_number.children;
      this.count = children.length;
      this.$emit("change", this.count);
    }
  },
  watch: {
    // 监听组件传过来的参数
    whether() {
      this.taxWhether = this.whether;
      setTimeout(() => {
        this._getItemLength();
      }, 20);
    },
    list() {
      this.flightList = this.list;
    },
    // 航司筛选
    airlineFiltrate() {
      if (this.airlineFiltrate != "") {
        // 初始化过滤容器
        this.filtrateSucceed = [];
        // 循环过滤条件
        for (let i = 0; i < this.airlineFiltrate.length; i++) {
          // 循环所有数据
          for (let l = 0; l < this.list.length; l++) {
            // 根据过滤条件检测所有数据中符合的数据 推送到新数组中
            if (this.list[l].airline.indexOf(this.airlineFiltrate[i]) > -1) {
              this.filtrateSucceed.push(this.list[l]);
            }
          }
        }
        // 筛选之后的数组赋值给原数组
        this.flightList = this.filtrateSucceed;
      } else {
        this.flightList = this.list;
      }
      setTimeout(() => {
        this._getItemLength();
      }, 20);
    }
  },
  mounted() {
    setTimeout(() => {
      this._getItemLength();
    }, 100);
  }
};
</script>

<style lang="stylus" type="text/stylus" scoped>
.flight-item {
  margin-bottom: 0.1rem;
  background: #fff;
  padding: 0 0.34rem;

  .benefit {
    color: #FF5656;
    margin-bottom: 0.15rem;
    line-height: 0.5rem;

    span {
      padding: 0 0.22rem;
      height: 0.39rem;
      line-height: 0.44rem;
      color: #fff;
      background: #FF6058;
    }
  }

  .airport-info {
    width: 1.85rem;
    margin-top: 0.2rem;

    .airport-date {
      font-size: 0.4rem;
    }

    .airport-city {
      color: #999;
      margin-top: 0.12rem;
    }
  }

  .airport-transit {
    width: 1.35rem;
    position: relative;
    line-height: 0.55rem;

    div {
      height: 0.55rem;
      width: 100%;
    }

    .icon-arrow-line {
      width: 1.35rem;
      position: absolute;
      left: 0;
      top: 46%;
    }

    .icon-arrow-line:before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      width: 1.35rem;
      height: 1px;
      background: #ccc;
    }

    .icon-arrow-line:after {
      content: '';
      position: absolute;
      right: -1px;
      bottom: -1px;
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 0.1rem 0.1rem 0.1rem 0;
      border-color: transparent transparent #ccc;
    }

    .discount {
      width: 1.76rem;
      padding-left: 0.1rem;

      .flight-price {
        color: #FF0202;
        font-size: 0.3rem;
        width: 1.76rem;
        margin: 0;

        span {
          font-size: 0.4rem;
        }
      }

      div {
        margin-right: -0.1rem;
      }
    }
  }
}

.remark {
  padding: 0.23rem 0 0.3rem 0.4rem;
  border-top: 0.01rem solid #E5E5E5;
  margin-top: 0.25rem;
  position: relative;

  i {
    position: absolute;
    left: 0;
    top: 0.25rem;
  }

  span {
    color: #248FED;
  }
}

.flight-date {
  padding: 0.2rem 0.34rem;
  line-height: 0.57rem;
  width: 100%;
  color: #363636;
}

.cut-type {
  border: 1px solid #258FED;
  border-radius: 0.05rem;
  overflow: hidden;

  li {
    background: #fff;
    color: #258FED;
    padding: 0.07rem 0.25rem;
    line-height: normal;
    height: 0.52rem;
  }

  li.active {
    color: #fff;
    background: #258FED;
    font-size: 0.26rem;
  }
}

.chart-list {
  padding: 0 0.34rem;
  margin-left: -0.06rem;

  .chart-item {
    width: 0.81rem;
    height: 3rem;
    background: #fff;
    border: 1px solid #E5E5E5;
    overflow: hidden;
    margin-left: 0.16rem;
    border-radius: 0.1rem;
    color: #248FED;

    .chart-progress {
      background: #258FED;
      height: 100%;
      width: 100%;
      position: relative;
      -webkit-transition: -webkit-transform 1s ease;
      transition: -webkit-transform 1s ease;
      transition: transform 1s ease, -webkit-transform 1s ease;

      .chart-price {
        position: absolute;
        top: -0.3rem;
        left: 0;
        width: 100%;
        text-align: center;
        font-size: 0.24rem;
      }
    }
  }
}

.time-list {
  width: 100%;
  margin-left: 0.2rem;

  td {
    width: 12.5%;
    font-size: 0.22rem;
    color: #248FED;
  }
}
</style>
