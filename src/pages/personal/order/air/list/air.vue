<template>
    <div>
        <air-header></air-header>
        <air-type></air-type>
        <air-list></air-list>
    </div>
</template>

<script>
    import AirHeader from "./components/header"
    import AirType from "./components/type"
    import AirList from "./components/list"
    export default {
        name: 'Air',
        components: {
            AirHeader,
            AirType,
            AirList
        }
    }
</script>

<style lang="stylus" type="text/stylus" scoped>

</style>
