<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Http</h1>

                <div class="form-group">
                	<label>Username</label>
                	<input class="form-control" type="text" v-model="user.username" />
                </div>

                <div class="form-group">
                	<label>Mail</label>
                	<input class="form-control" type="text" v-model="user.email" />
                </div>


            	<button class="btn btn-primary" @click="submit">Submit</button>

            	<hr>


            	<button class="btn btn-primary" @click="fetchData">Get Data</button>
                
                <hr>

            	<ul>
            		<li class="list-group-item" v-for="u in users">{{ u.id }} - {{ u.username }} - {{ u.email }}</li>
            	</ul>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
    	data() {
    		return {
    			user: {
    				username: '',
    				email: ''
    			},
    			users: []
    		}
    	},
    	methods: {
    		submit() {
    			console.log(this.user);
    			this.$http.post('', this.user)
    			.then((response) => {
				    console.log(response);
				})
				.catch((error) => {
				    console.log(error);
				});
    		},
    		fetchData() {
    			console.log(this.user);
    			this.$http.get('')
    			.then((response) => {
				    this.users = response.data;
				})
				.catch((error) => {
				    console.log(error);
				});
    		}
    	}
    }
</script>

<style>
</style>
