<template>
    <div>
        <succeed-header></succeed-header>
        <succeed-content></succeed-content>
    </div>
</template>

<script>
    import SucceedHeader from "./components/header"
    import SucceedContent from "./components/content"
    export default {
        name: 'Succeed',
        components: {
            SucceedHeader,
            SucceedContent
        }
    }
</script>

<style lang="stylus" scoped>

</style>
