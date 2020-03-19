<template>
    <div class="component">
        <div class="tabs">
            <div class="titles">
                <button
                    :class="counterSelectedClass"
                    @click="selectedTab = 'counter'">Counter</button>
                <button
                    :class="authSelectedClass"
                    @click="selectedTab = 'authentication'">Authentication</button>
            </div>
            <div class="content">

                <div v-show="selectedTab == 'counter'">
                    <div>
                        {{ countMessage }}
                    </div>
                    <div>
                        <button @click="count += 1">Increase the count</button>
                        <button @click="increaseCount">Increase the count</button>
                    </div>
                </div>

                <div v-show="selectedTab != 'counter'">
                    <!-- {{ isAuthenticated }} -->
                    <button v-if="isAuthenticated"
                    @click="$emit('signOut')">Sign out</button>
                    <button v-else
                    @click="$emit('signIn')">Sign in</button>
                    <!-- v-show="!isAuthenticated" -->
                </div>

            </div>
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
        count: 1,
        selectedTab: 'counter'
    }),
    computed: {
        /*function*/ countMessage() {
            return `The count is ${this.count}.`;
        },
        counterSelectedClass() {
            if( this.selectedTab == 'counter' )
                return 'selected';
            return '';
        },
        authSelectedClass() {
            if( this.selectedTab == 'authentication' )
                return 'selected';
            return '';
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
    padding: 1em;
}
.component > div {
    /* background-color: red; */
    margin-bottom: 1em;
}
.component > div:last-child {
    margin-bottom: 0px;
}

.tabs {

}
.tabs > .titles {
    display: flex;
}
.tabs > .titles > button {
    margin-right: 2px;
    border: 1px solid black;
    background-color: lightgray;
}
.tabs > .content {
    background-color: lightgray;
    padding: 1em;
}
/* !important är FEL, gör selektorn mer specifik i stället */
.tabs button.selected {
    background-color: gray;
}
</style>
