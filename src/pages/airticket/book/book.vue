<template>
    <div class="main">
        <book-header></book-header>
        <book-info :costList="costList"></book-info>
        <book-passenger @change="changeLinkman"
                        :linkmanItem="linkmanItem"
        >
        </book-passenger>
        <book-fillout :costList="costList"></book-fillout>
        <book-footer :totalPrice="totalPrice"
                     :costList="costList"
                     :numberPeople="numberPeople"
        >
        </book-footer>
    </div>
</template>

<script>
import BookHeader from './components/header'
import BookInfo from './components/info'
import BookPassenger from './components/passenger'
import BookFillout from './components/fillout'
import BookFooter from './components/footer'

export default {
    name: 'Book',
    components: {
        BookHeader,
        BookInfo,
        BookPassenger,
        BookFillout,
        BookFooter
    },
    data () {
        return {
            linkmanItem: [],    //乘机人列表
            linkmanDelete: [],  //删除后的乘机人列表
            costList: {     //费用
                'airPrice': 599,
                'constructionPrice': 50,
                'servePrice': 80,
                'insurancePrice': 20
            },
            totalPrice: null,       //总价
            numberPeople: null,      //人数
        }
    },
    methods: {
        // 删除乘机人之后重新计算价格
        changeLinkman (item) {
            this.countPrice(item.length)
        },
        loadLinkman () {
            if (this.$route.query.linkman) {
                let linkman = []
                // 未删除时接收乘机人列表传递过来的参数 保存为数组 ['目前接收的是str','str','str']
                linkman = this.$route.query.linkman
                // console.log(linkman)
                // 创建新数组 保存乘机人信息
                var linkmanList = []
                // 接收到的乘机人信息为字符串格式 循环数组['str','str','str'] 把数组中的每一项字符串分割为子数组[[],[],[]]
                for (let i = 0; i < linkman.length; i++) {
                    linkmanList.push(linkman[i].split(','))
                }
                //  处理之后的乘机人信息格式为[[],[],[]] 复制给data 传递给子组件 做view渲染
                this.linkmanItem = linkmanList
                this.countPrice(linkman.length)
            }
        },
        // 计算总价
        countPrice (how) {
            let total = (this.costList.airPrice +
                    this.costList.constructionPrice +
                    this.costList.servePrice +
                    this.costList.insurancePrice
            ) * how
            this.numberPeople = how
            this.totalPrice = total
        }
    },
    mounted () {
        this.loadLinkman()
    }
}
</script>

<style lang="stylus" type="text/stylus" scoped>
    .main {
        padding-bottom: 1.3rem;
    }
</style>
