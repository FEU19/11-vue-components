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
        isAuthenticated: Boolean(false)
    },
    data: () => ({
    }),
    computed: {
        authMessage() {
            if( this.isAuthenticated ) {
                return 'Welcome David';  // maybe show a menu
            } else {
                return 'Sign in';  // should be a link or a button
            }
        }
    },
    methods: {
        handleSignOut() {
            // this.isAuthenticated = false;  <- not ok
            this.$emit('signOut');  // no need to send data with the event
        }
    }
}
</script>

<style scoped>
header {
    display: block;
    background-color: #A4A4A4;
    color: #1C1C1C;
    padding: 1em;
    display: flex;
    justify-content: space-between;
}
</style>
