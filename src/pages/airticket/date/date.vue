<template>
    <div class="main">
        <date-header></date-header>
        <date-content></date-content>
    </div>
</template>

<script>
import DateHeader from './components/header'
import DateContent from './components/content'
export default {
    name: 'Date',
    components: {
        DateHeader,
        DateContent
    }
}
</script>

<style lang="stylus" type="text/stylus" scoped>
.main {
    background: #fff;
    padding-top: 2.18rem;
}
</style>
