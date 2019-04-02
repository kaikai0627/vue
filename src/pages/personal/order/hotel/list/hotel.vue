<template>
    <div>
        <hotel-header></hotel-header>
        <hotel-type></hotel-type>
        <hotel-list></hotel-list>
    </div>
</template>

<script>
    import HotelHeader from "./components/header"
    import HotelType from "./components/type"
    import HotelList from "./components/list"
    export default {
        name: 'Hotel',
        components: {
            HotelHeader,
            HotelType,
            HotelList
        }
    }
</script>

<style lang="stylus" type="text/stylus" scoped>

</style>
