<template>
    <div class="component">
        <div class="tabs">
            <div class="titles">
                <button
                    :class="counterSelectedClass"
                    @click="selectedTab = 'counter'">Counter</button>
                <button
                    :class="counter2SelectedClass"
                    @click="selectedTab = 'counter2'">Counter</button>
                <button
                    :class="authSelectedClass"
                    @click="selectedTab = 'authentication'">Authentication</button>
            </div>
            <div class="content">

                <Counter v-if="selectedTab == 'counter'" />

                <Counter v-show="selectedTab == 'counter2'" />

                <div v-show="selectedTab == 'authentication'">
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
import Counter from './Counter'

export default {
    name: '',
    props: {
        isAuthenticated: Boolean(false)
    },
    data: () => ({
        selectedTab: 'counter'
    }),
    computed: {
        counterSelectedClass() {
            if( this.selectedTab == 'counter' )
                return 'selected';
            return '';
        },
        counter2SelectedClass() {
            if( this.selectedTab == 'counter2' )
                return 'selected';
            return '';
        },
        authSelectedClass() {
            if( this.selectedTab == 'authentication' )
                return 'selected';
            return '';
        }
    },
    components: { Counter }
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
