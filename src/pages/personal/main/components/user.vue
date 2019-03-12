<template>
    <div class="personal-info text-center">
        <div>欢迎您，张三</div>
        <div>ID:<span>1832829191</span></div>
    </div>
</template>

<script>
    export default {
        name: 'IndexUser'
    }
</script>

<style lang="stylus" scoped>
    .personal-info {
        background: url("./personal-bg.png") left top no-repeat;
        background-size: 100% 100%;
        height: 3.4rem;
        padding: 1.1rem 0;
        color: #fff;
        line-height: .4rem;
    }
</style>
