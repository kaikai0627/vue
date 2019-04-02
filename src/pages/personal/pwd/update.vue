<template>
    <div>
        <update-header></update-header>
        <update-content></update-content>
    </div>
</template>

<script>
    import UpdateHeader from "./components/header"
    import UpdateContent from "./components/content"
    export default {
        name: 'Update',
        components: {
            UpdateHeader,
            UpdateContent
        }
    }
</script>

<style lang="stylus" type="text/stylus" scoped>

</style>
