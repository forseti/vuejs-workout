<template>
	<div>
    	<h3>Some User Details</h3>
    	<p>User has loaded ID: {{ $route.params.id }}</p>

<!--     	<router-link 
    		tag="button" 
    		:to="'/user/' + $route.params.id + '/edit'"
    		class="btn btn-primary">Edit User</router-link> -->

<!-- A better and cleaner solution that above. It binds to an object. -->
    	<router-link 
    		tag="button" 
    		:to="link"
    		class="btn btn-primary">Edit User</router-link>
    </div>
</template>

<script type="text/javascript">
	export default {
		data() {
			return {
				link: { 
					name: 'userEdit', 
					params: { 
						id: this.$route.params.id 
					}, 
					query: { 
						locale: 'en', 
						q: 100 
					},
					hash: '#data'
				}
			}
		},
		beforeRouteEnter(to, from, next) {

			/*
				if next() is not called, this component will not be loaded!
				therefore if you use 'this.link' or any particular objects like imported *.vue components before next(), they will not work because the component has not been created yet!
			*/

			// next();

			/*
				However if you really need to access objects/attributes in this component, you may pass a callback to next
			*/ 

			// next((vm) => {

			// })

			/*
				If we want to prevent this component from being created, we have to do the check before next() is called, but you can't access the component's attributes which makes sense because the component has not been created. 
			*/

			if (true) {
				next();
			} else {
				next(false);
			}

			// next()
		}
	}
</script>