<template>
    <div>
        <h1>dadasnd,san</h1>
        <h2>{{item}}</h2>
    </div>
</template>
<script>
export default {
    name: 'Home',
    asyncData({store, router}) {
        return store.dispatch('fetchItem')
    },
    computed: {
        item() {
            return this.$store.item
        }
    },
    beforeCreate() {
        console.log(1111)
    },
    created() {
        console.log(2222)
    },
    beforeMount() {
        console.log(3333)
    },
    mounted() {
        console.log(console.log(4444))
    }
}
</script>
<style scoped>

</style>


