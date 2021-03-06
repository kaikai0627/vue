import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/home'
import Search from '@/pages/airticket/search/search'
import Date from '@/pages/airticket/date/date'
import City from '@/pages/airticket/city/city'
import List from '@/pages/airticket/list/airList'
import Login from '@/pages/user/login/login'
import Space from '@/pages/airticket/chooseSpace/space'
import BackList from '@/pages/airticket/backList/backList'
import Cause from '@/pages/airticket/cause/cause'
import Book from '@/pages/airticket/book/book'
import Passenger from '@/pages/airticket/passenger/passenger'
import Pay from '@/pages/pay/pay'
import Main from '@/pages/personal/main/index'
import Air from '@/pages/personal/order/air/list/air'
import Hotel from '@/pages/personal/order/hotel/list/hotel'
import AirDetail from '@/pages/personal/order/air/detail/detail'
import HotelDetail from '@/pages/personal/order/hotel/detail/detail'
import Coupon from '@/pages/personal/coupon/coupon'
import Integral from '@/pages/personal/integral/integral'
import Set from '@/pages/personal/set/set'
import PwdUpdate from '@/pages/personal/pwd/update'
import Message from '@/pages/personal/message/center/center'
import systemNewsList from '@/pages/personal/message/system/list/system'
import systemNewsDetail from '@/pages/personal/message/system/detail/detail'
import ApproveList from '@/pages/approve/list/list'
import ApproveDetail from '@/pages/approve/detail/detail'
import ApproveSucceed from '@/pages/approve/succeed/succeed'
import ApproveHistory from '@/pages/approve/history/history'

Vue.use(Router)

export default new Router({
    mode: 'hash',
    routes: [{
        path: '/',
        name: 'Home',
        meta:{
            index:0,
            title: '首页'
        },
        component: Home
    }, {
        path: '/airtitcket/search',
        meta:{
            index:1,
            title: '航班查询'
        },
        name: 'Search',
        component: Search
    }, {
        path: '/airtitcket/date',
        meta:{
            index:2,
            title: '选择时间'
        },
        name: 'Date',
        component: Date
    }, {
        path: '/airtitcket/city',
        meta:{
            index:2,
            title: '选择城市'
        },
        name: 'City',
        component: City
    }, {
        path: '/airtitcket/list',
        meta:{
            index:2,
            title: '航班集合'
        },
        name: 'List',
        component: List
    }, {
        path: '/user/login',
        meta:{
            index:1,
            title: '登录'
        },
        name: 'Login',
        component: Login
    }, {
        path: '/airtitcket/chooseSpace',
        meta:{
            index:3,
            title: '选择舱位'
        },
        name: 'Space',
        component: Space
    }, {
        path: '/airtitcket/backList',
        meta:{
            index:4,
            title: '回程航班集合'
        },
        name: 'BackList',
        component: BackList
    }, {
        path: '/airtitcket/cause',
        meta:{
            index:5,
            title: '选择原因'
        },
        name: 'Cause',
        component: Cause
    }, {
        path: '/airtitcket/book',
        meta:{
            index:6,
            title: '填写资料'
        },
        name: 'Book',
        component: Book
    }, {
        path: '/airtitcket/passenger',
        meta:{
            index:7,
            title: '乘机人列表'
        },
        name: 'Passenger',
        component: Passenger
    }, {
        path: '/pay',
        meta:{index:8},
        name: 'Pay',
        component: Pay
    }, {
        path: '/personal/main',
        meta:{
            index:3,
            title: '个人中心'
        },
        name: 'Main',
        component: Main
    }, {
        path: '/personal/order/air',
        meta:{
            index:4,
            title: '机票订单'
        },
        name: 'Air',
        component: Air
    }, {
        path: '/personal/order/hotel',
        meta:{
            index:5,
            title: '酒店订单'
        },
        name: 'Hotel',
        component: Hotel
    }, {
        path: '/personal/order/Air/detail',
        meta:{
            index:5,
            title: '机票详情'
        },
        name: 'AirDetail',
        component: AirDetail
    }, {
        path: '/personal/order/hotel/detail',
        meta:{
            index:6,
            title: '酒店详情'
        },
        name: 'HotelDetail',
        component: HotelDetail
    }, {
        path: '/personal/coupon',
        meta:{
            index:4,
            title: '优惠券'
        },
        name: 'Coupon',
        component: Coupon
    }, {
        path: '/personal/integral',
        meta:{
            index:5,
            title: '积分'
        },
        name: 'Integral',
        component: Integral
    }, {
        path: '/personal/set',
        meta:{
            index:4,
            title: '设置'
        },
        name: 'Set',
        component: Set
    }, {
        path: '/personal/pwdUpdate',
        meta:{
            index:5,
            title: '修改密码'
        },
        name: 'PwdUpdate',
        component: PwdUpdate
    }, {
        path: '/personal/message/center',
        meta:{
            index:1,
            title: '消息中心'
        },
        name: 'Message',
        component: Message
    }, {
        path: '/personal/message/system/list',
        meta:{
            index:2,
            title: '系统消息'
        },
        name: 'systemNewsList',
        component: systemNewsList
    }, {
        path: '/personal/message/system/detail',
        meta:{
            index:3,
            title: '系统消息详情'
        },
        name: 'systemNewsDetail',
        component: systemNewsDetail
    }, {
        path: '/personal/approve/list',
        meta:{
            index:2,
            title: '出差审批'
        },
        name: 'ApproveList',
        component: ApproveList
    }, {
        path: '/personal/approve/detail',
        meta:{
            index:4,
            title: '差旅详情'
        },
        name: 'ApproveDetail',
        component: ApproveDetail
    }, {
        path: '/personal/approve/succeed',
        meta:{
            index:5,
            title: '授权成功'
        },
        name: 'ApproveSucceed',
        component: ApproveSucceed
    }, {
        path: '/personal/history',
        meta:{
            index:3,
            title: '审批历史'
        },
        name: 'ApproveHistory',
        component: ApproveHistory
    }]
})
