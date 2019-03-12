<template>
    <div>
        <center-header></center-header>
        <center-type></center-type>
    </div>
</template>

<script>
    import CenterHeader from "./components/header"
    import CenterType from "./components/type"
    export default {
        name: 'Center',
        components: {
            CenterHeader,
            CenterType
        }
    }
</script>

<style lang="stylus" scoped>

</style>
