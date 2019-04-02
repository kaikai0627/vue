<template>
    <div>
        <search-header></search-header>
        <search-cause></search-cause>
        <search-content></search-content>
    </div>
</template>

<script>
    import SearchHeader from './components/header'
    import SearchCause from './components/cause'
    import SearchContent from './components/content'

    export default {
        name: 'Search',
        components: {
            SearchHeader: SearchHeader,
            SearchCause: SearchCause,
            SearchContent: SearchContent
        }
    }
</script>

<style lang="stylus" type="text/stylus" scoped>

</style>
