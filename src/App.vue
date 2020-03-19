<template>
	<div id="app">
		<!-- The root component (App) should have as little content as possible. Try to put everything in child components. -->
		<!-- App is the "owner" of the authentication (whether user is signed in or not) state. We pass it to the child components. -->
		<super-header :isAuthenticated="hasSignedIn"
			@signOut="hasSignedIn = false" />
		<Content :isAuthenticated="hasSignedIn"
			@signIn="hasSignedIn = true"
			@signOut="hasSignedIn = false" />
		<Footer />
	</div>
</template>

<script>
// All our components must be IMPORTED and REGISTERED
import Content from './components/Content.vue'
import Header from './components/Header'
import Footer from './components/Footer'

export default {
	name: 'App',
	components: {
		// we can change the name the component uses in the template
		Content: Content,
		'super-header': Header,
		Footer
	},
	data: () => ({
		hasSignedIn: false
	})
}
</script>

<style>
/* This CSS is global, since it is not scoped */
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
}
body {
	margin: 0px;
}
</style>
