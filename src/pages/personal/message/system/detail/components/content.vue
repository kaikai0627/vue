<template>
    <div>
        <div class="detail-title text-center">台风云雀预警</div>
        <div class="detail-content">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet aspernatur atque eum id incidunt officiis
            reprehenderit sint sunt. Blanditiis culpa ducimus enim fugiat illum mollitia officia porro quasi voluptas
            voluptates?
        </div>
        <div class="text-right record">
            <div>携程商旅</div>
            <div>2018-11-11</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'DetailContent'
    }
</script>

<style lang="stylus" scoped>
    body {
        background: #fff;
    }

    .detail-title {
        font-size: .34rem;
        padding: .2rem .34rem;
        font-weight: 600;
    }

    .detail-content {
        padding: 0 .34rem;
        line-height: .4rem;
        color: #666;
    }

    .record {
        margin-top: .5rem;
        padding-right: .34rem;
        color: #666;
    }
</style>
