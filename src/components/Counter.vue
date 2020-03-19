<template>
    <div>
        <div>
            <!-- countMessage is a computed property, that is automatically updated every time "count" changes -->
            {{ countMessage }}
        </div>
        <div>
            <!-- Two ways to modify the "count" property: directly in template or using a function. -->
            <button @click="count += 1">Increase the count</button>
            <button @click="increaseCount">Increase the count</button>
        </div>
    </div>

</template>

<script>
export default {
    props: {},  // props is not required, since it is empty
    data: () => ({
        // Remember that data should always be a FUNCTION that returns an object. Otherwise we could not have multiple components with different state.
        count: 1
    }),
    computed: {
        countMessage() {
            return `The count is ${this.count}.`;
        }
    },
    methods: {
        // Having a separate method rather that updating the prop directly in the template, makes it easier to debug using console.log.
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
