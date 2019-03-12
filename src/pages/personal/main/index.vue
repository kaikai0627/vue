<template>
    <div class="main">
        <index-header></index-header>
        <index-user></index-user>
        <index-order></index-order>
        <index-property></index-property>
        <index-entrance @change="handShowPop"></index-entrance>
        <index-footer></index-footer>
        <index-pop :showPop="showPop" @change="handHidePop"></index-pop>
    </div>
</template>

<script>
    import IndexHeader from "./components/header"
    import IndexUser from "./components/user"
    import IndexOrder from "./components/order"
    import IndexProperty from "./components/property"
    import IndexEntrance from "./components/entrance"
    import IndexFooter from "./components/footer"
    import IndexPop from "./components/pop"

    export default {
        name: 'Index',
        data () {
            return {
                showPop: false
            }
        },
        components: {
            IndexHeader,
            IndexUser,
            IndexOrder,
            IndexProperty,
            IndexEntrance,
            IndexFooter,
            IndexPop
        },
        methods: {
            handShowPop (is) {
                this.showPop = is
            },
            handHidePop (is) {
                this.showPop = is
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .main {
        padding-bottom: 1rem
    }
</style>
