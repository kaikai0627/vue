<template>
    <div>
        <detail-header></detail-header>
        <detail-content></detail-content>
    </div>
</template>

<script>
    import DetailHeader from "./components/header"
    import DetailContent from "./components/content"
    export default {
        name: 'Detail',
        components: {
            DetailHeader,
            DetailContent
        }
    }
</script>

<style lang="stylus" type="text/stylus" scoped>

</style>
