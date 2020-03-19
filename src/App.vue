<template>
	<div id="app">
		<super-header :isAuthenticated="hasSignedIn"
			@signOut="hasSignedIn = false" />
		<Content :isAuthenticated="hasSignedIn"
			@signIn="hasSignedIn = true"
			@signOut="hasSignedIn = false" />
		footer
	</div>
</template>

<script>
import Content from './components/Content.vue'
import Header from './components/Header'

export default {
	name: 'App',
	components: {
		Content: Content,
		'super-header': Header
	},
	data: () => ({
		hasSignedIn: false
	})
}
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	/* text-align: center; */
	color: #2c3e50;
	/* margin-top: 60px; */
}
body {
	margin: 0px;
}
</style>
