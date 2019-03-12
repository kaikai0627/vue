<template>
    <div>
        <cause-header></cause-header>
        <cause-content></cause-content>
    </div>
</template>

<script>
    import CauseHeader from './components/header'
    import CauseContent from './components/content'
    export default {
        name: 'Cause',
        components: {
            CauseHeader,
            CauseContent
        }
    }
</script>

<style lang="stylus" scoped>

</style>
