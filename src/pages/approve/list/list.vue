<template>
    <div>
        <list-header></list-header>
        <list-content></list-content>
    </div>
</template>

<script>
    import ListHeader from "./components/header"
    import ListContent from "./components/content"
    export default {
        name: 'List',
        components: {
            ListHeader,
            ListContent
        }
    }
</script>

<style lang="stylus" scoped>

</style>
