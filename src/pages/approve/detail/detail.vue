<template>
    <div>
        <detail-header></detail-header>
        <detail-info></detail-info>
        <detail-cause></detail-cause>
        <detail-passenger></detail-passenger>
        <detail-item></detail-item>
        <button type="button" class="btn skin btn_skin_themColor login-btn"
            @click="impower"
        >
            授权
        </button>
    </div>
</template>

<script>
    import DetailHeader from "./components/header"
    import DetailInfo from "./components/info"
    import DetailCause from "./components/cause"
    import DetailPassenger from "./components/passenger"
    import DetailItem from "./components/item"

    export default {
        name: 'Detail',
        components: {
            DetailHeader,
            DetailInfo,
            DetailCause,
            DetailPassenger,
            DetailItem
        },
        methods: {
            impower () {
                this.$router.push({path: "/personal/approve/succeed"})
            }
        }
    }
</script>

<style lang="stylus" type="text/stylus" scoped>
    .btn {
        width: 100%;
        border-radius: 0;
        margin-top: .2rem;
    }
</style>
