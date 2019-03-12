<template>
    <div class="contact-pop" v-show="showPop" @click="handClickHide">
        <div class="contact-content text-center" @click.stop>
            <div class="contact-item"><a href="tel:5634234324">境内：5634234324</a></div>
            <div class="contact-item"><a href="tel:5634234324">香港(中国)：40040040</a></div>
            <div class="contact-item"><a href="tel:5634234324">境外：40040040</a></div>
            <div class="contact-item" @click="handClickHide">取消</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'IndexPop',
        props: {
            showPop: Boolean
        },
        methods: {
            handClickHide () {
                this.$emit("change", false)
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .contact-pop {
        background: rgba(0, 0, 0, .5);
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 10;

        .contact-content {
            background-color: #fff;
            position: absolute;
            width: 100%;
            bottom: 0;

            .contact-item {
                padding: 0 .34rem;
                height: 1.15rem;
                line-height: 1.15rem;

                a {
                    display: block;
                    border-bottom: 1px solid #E5E5E5;
                    color: #363636;
                }

                &:last-child {
                    border-top: .1rem solid #ABABAB;
                }
            }
        }
    }
</style>
