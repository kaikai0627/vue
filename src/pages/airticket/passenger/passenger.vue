<template>
    <div>
        <linkman-header></linkman-header>
        <linkman-list></linkman-list>
    </div>
</template>

<script>
    import LinkmanHeader from './components/header'
    import LinkmanList from './components/list'
    export default {
        name: 'Linkman',
        components: {
            LinkmanHeader,
            LinkmanList
        }
    }
</script>

<style lang="stylus" scoped>

</style>
