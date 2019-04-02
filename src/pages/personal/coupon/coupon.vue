<template>
    <div>
        <coupon-header></coupon-header>
        <coupon-get></coupon-get>
        <coupon-list></coupon-list>
    </div>
</template>

<script>
    import CouponHeader from "./components/header"
    import CouponGet from "./components/get"
    import CouponList from "./components/list"
    export default {
        name: 'Coupon',
        components: {
            CouponHeader,
            CouponGet,
            CouponList
        }
    }
</script>

<style lang="stylus" type="text/stylus" scoped>

</style>
