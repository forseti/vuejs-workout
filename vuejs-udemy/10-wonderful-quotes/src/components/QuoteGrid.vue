<template>
	<div class="row">
		<app-quote v-for="(quote, index) in quotes" :index='index' @click.native='removeQuote(index)'>{{ quote }}</app-quote>
	</div>
</template>

<script>
	import Quote from './Quote.vue'

	export default {
		props: [ 'quotes' ],
		components: {
			appQuote: Quote
		},
		methods: {
			removeQuote(index) {
				this.$emit('quoteRemoved', index);
	        }
	    }
	}
</script>
<style></style>