<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                <h1>Http</h1>
            </div>

            <button class="btn btn-primary" @click="testAxios">Test Axios</button>
        </div>
    </div>
</template>

<script>
    export default {
    	methods: {
    		testAxios() {
    			this.$http.get('http://apiv3.iucnredlist.org/api/v3/version')
    			.then(function (response) {
				    console.log(response);
				})
				.catch(function (error) {
				    console.log(error);
				});
    		}
    	}
    }
</script>

<style>
</style>
