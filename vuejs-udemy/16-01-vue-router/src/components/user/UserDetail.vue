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
    		:to="{ name: 'userEdit', params: { id: $route.params.id }, query: { locale: 'en', q: 100 } }"
    		class="btn btn-primary">Edit User</router-link>
    </div>
</template>