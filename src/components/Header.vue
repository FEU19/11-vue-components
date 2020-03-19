<template>
    <header>
        <div>
            [Logo] This is the header
        </div>
        <div>
            {{ authMessage }}
            <button
                v-show="isAuthenticated"
                @click="handleSignOut">Sign out</button>
        </div>
    </header>
</template>

<script>
export default {
    props: {
        // When declaring props, always use a "constructor function" such as Boolean, String, Number, Object, Array, Function
        isAuthenticated: Boolean(false)
        // You can ignore data types and declare props as an array of strings instead. Example:
        // props: ['prop1', 'prop2']
    },
    // No data properties, so "data" in not required
    data: () => ({
    }),
    computed: {
        // Computed properties act as regular properties, but read only, that update automatically when their dependencies change.
        authMessage() {
            if( this.isAuthenticated ) {
                return 'Welcome David';  // maybe show a menu
            } else {
                return 'Sign in';  // should be a link or a button
            }
        }
    },
    methods: {
        // This method has very little code. We could call $emit directly in the template, but having a separate method makes it easy for us to debug by using console.log.
        handleSignOut() {
            // this.isAuthenticated = false;  <- not ok
            this.$emit('signOut');  // no need to send data with the event
        }
    }
}
</script>

<style scoped>
/* Scoped CSS will only take effect on elements in this components' template. */
header {
    display: block;
    background-color: #A4A4A4;
    color: #1C1C1C;
    padding: 1em;
    display: flex;
    justify-content: space-between;
}
</style>
