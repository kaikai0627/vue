<template>
    <div>
        <integral-header></integral-header>
        <integral-content></integral-content>
    </div>
</template>

<script>
    import IntegralHeader from "./components/header"
    import IntegralContent from "./components/content"
    export default {
        name: 'Integral',
        components: {
            IntegralHeader,
            IntegralContent
        },
    }
</script>

<style lang="stylus" type="text/stylus" scoped>

</style>
