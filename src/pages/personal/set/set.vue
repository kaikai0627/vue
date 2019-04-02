<template>
    <div>
        <set-header></set-header>
        <set-content></set-content>
    </div>
</template>

<script>
    import SetHeader from "./components/header"
    import SetContent from "./components/content"
    export default {
        name: 'Set',
        components: {
            SetHeader,
            SetContent
        }
    }
</script>

<style lang="stylus" type="text/stylus" scoped>

</style>
