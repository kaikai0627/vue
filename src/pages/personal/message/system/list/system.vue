<template>
    <div>
        <system-header></system-header>
        <system-content></system-content>
    </div>
</template>

<script>
    import SystemHeader from "./components/header"
    import SystemContent from "./components/content"
    export default {
        name: 'System',
        components: {
            SystemHeader,
            SystemContent
        }
    }
</script>

<style lang="stylus" type="text/stylus" scoped>

</style>
