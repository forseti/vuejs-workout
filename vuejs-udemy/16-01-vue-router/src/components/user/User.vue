<template>
	<div>
    	<h1>The User Page</h1>
    	<hr>
<!--     	<p>Loaded ID: {{ id }}</p> -->
    	<button class="btn btn-primary" @click="navigateHome">Home</button>
    	<hr>
    	<router-view></router-view>
    </div>
</template>

<script type="text/javascript">
	export default {
		// data() {
		// 	return {
		// 		id: this.$route.params.id
		// 	}
		// },
		// watch: {
		// 	'$route'(to, from) {
		// 		this.id = to.params.id
		// 	}
		// },
		/* We can use computed, but we have less options unlike watch where we have two params (to, from)*/ 
		//
		// computed: {
		// 	id() {
		// 		return this.$route.params.id
		// 	}
		// },
		methods: {
			navigateHome() {
				// this.$router.push('/');
				// this.$router.push({ path: '/' });
				this.$router.push({ name: 'home' });
			}
		}
	}
</script>