<template>
    <div>
        <space-header></space-header>
        <space-line></space-line>
        <space-choose></space-choose>
    </div>
</template>

<script>
    import SpaceHeader from './components/header'
    import SpaceLine from './components/line'
    import SpaceChoose from './components/choose'
    export default {
        name: 'Space',
        components: {
            SpaceHeader,
            SpaceLine,
            SpaceChoose
        }
    }
</script>

<style lang="stylus" type="text/stylus" scoped>

</style>
