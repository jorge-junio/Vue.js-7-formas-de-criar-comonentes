<template>
    <button @click="click">
        Clicou no ButtonVue {{ count }} vezes
    </button>
</template>

<script>
    export default {
        name: "ButtonVue",
        data() {
            return {
                count: 0,  
            };
        },
        methods: {
            click(){
                this.count++;
            },
        },
    }
</script>

<style>

</style>