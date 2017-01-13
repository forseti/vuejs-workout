<template>
	<ul class="nav nav-pills">
  		<router-link to="/" tag="li" active-class="active" exact><a>Home</a></router-link></li>


<!-- to be used with route /user/:id -->
<!--   		<router-link to="/user/10" tag="li" active-class="active"><a>User</a></router-link></li> -->
  		<!-- notice that Loaded ID: ? only changed one time without 'watch' and 'computed' because router only load object once -->
<!--   		<router-link to="/user/20" tag="li" active-class="active"><a>User</a></router-link></li> -->


  		<router-link to="/user" tag="li" active-class="active"><a>User</a></router-link></li>
	</ul>
</template>