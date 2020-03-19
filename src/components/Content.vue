<template>
    <div class="component">
        <div>
            {{ countMessage }}
        </div>
        <div>
            <button @click="count += 1">Increase the count</button>
            <button @click="increaseCount">Increase the count</button>
        </div>
        <div>
			<!-- {{ isAuthenticated }} -->
			<button v-if="isAuthenticated"
				@click="$emit('signOut')">Sign out</button>
			<button v-else
				@click="$emit('signIn')">Sign in</button>
                <!-- v-show="!isAuthenticated" -->
		</div>
    </div>
</template>

<script>
export default {
    name: '',
    props: {
        isAuthenticated: Boolean(false)
    },
    data: () => ({
        count: 1
    }),
    computed: {
        /*function*/ countMessage() {
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
