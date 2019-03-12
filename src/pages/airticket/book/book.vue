<template>
    <div class="main">
        <book-header></book-header>
        <book-info></book-info>
        <book-passenger></book-passenger>
        <book-fillout></book-fillout>
        <book-footer></book-footer>
    </div>
</template>

<script>
    import BookHeader from './components/header'
    import BookInfo from './components/info'
    import BookPassenger from './components/passenger'
    import BookFillout from './components/fillout'
    import BookFooter from './components/footer'

    export default {
        name: 'Book',
        components: {
            BookHeader,
            BookInfo,
            BookPassenger,
            BookFillout,
            BookFooter
        }
    }
</script>

<style lang="stylus" scoped>
    .main {
        padding-bottom: 1.3rem;
    }
</style>
