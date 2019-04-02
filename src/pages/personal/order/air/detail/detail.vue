<template>
    <div class="main">
        <detail-header></detail-header>
        <detail-state></detail-state>
        <detail-info></detail-info>
        <detail-group></detail-group>
        <detail-footer></detail-footer>
    </div>
</template>

<script>
    import DetailHeader from "./components/header"
    import DetailState from "./components/state"
    import DetailInfo from "./components/info"
    import DetailGroup from "./components/group"
    import DetailFooter from "./components/footer"

    export default {
        name: 'Detail',
        components: {
            DetailHeader,
            DetailState,
            DetailInfo,
            DetailGroup,
            DetailFooter
        }
    }
</script>

<style lang="stylus" type="text/stylus" scoped>
    .main {
        padding-bottom: 1.15rem;
    }
</style>
