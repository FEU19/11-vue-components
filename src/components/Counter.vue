<template>
    <div>
        <div>
            {{ countMessage }}
        </div>
        <div>
            <button @click="count += 1">Increase the count</button>
            <button @click="increaseCount">Increase the count</button>
        </div>
    </div>

</template>

<script>
export default {
    props: {},
    data: () => ({
        count: 1
    }),
    computed: {
        countMessage() {
            return `The count is ${this.count}.`;
        }
    },
    methods: {
        increaseCount() {
            this.count += 2;
        }
    }
}
</script>

<style scoped>
.component {

}
</style>
