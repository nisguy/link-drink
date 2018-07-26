<template>
    <div>
        <app-drink :list="popularDrinks"></app-drink>
    </div>
</template>

<script>
    export default {
        name: "popularBrands",
        data () {
            return {
                popularDrinks: [
                    {title: '4th Street', span: 'RED', imageUrl: 'Top sellers/4th-Street-Red.jpeg'},
                    ]
    }
</script>

<style scoped>

</style>