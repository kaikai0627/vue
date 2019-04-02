<template>
    <div>
        <linkman-header></linkman-header>
        <linkman-list :linkmanContent="linkmanContent"></linkman-list>
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
    },
    data () {
        return {
            linkmanContent: []
        }
    },
    methods: {
        getListPassenger () {
            var that = this
            this.$axios.get('/api/passengerList.json')
                    .then(function (res) {
                        var data = res.data
                        if (data.ret && data.data) {
                            data = data.data
                            that.linkmanContent = data.passenger
                        }
                    })
                    .catch(function (error) {
                        console.log(error)
                    })
        }
    },
    mounted () {
        this.getListPassenger()
    }
}
</script>

<style lang="stylus" type="text/stylus" scoped>

</style>
