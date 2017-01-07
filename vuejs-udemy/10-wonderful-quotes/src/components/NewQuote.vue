<template>
	<div class="row">
		<form>
			<div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3 form-group">
				<label for="comment">Quote</label>
				<textarea class="form-control" rows="3" v-model='quote'></textarea>
			</div>

			<div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3 form-group">
				<button type="button" class="btn btn-primary" @click.prevent='addQuote'>Add Quote</button>
			</div>
		</form>
	</div>
</template>

<script>
   	import { eventBus } from '../main.js';
	export default {
		data() {
			return {
				quote: ''
			}
		},
        methods: {
        	addQuote() {
        		if (this.quote) {
        			this.$emit('quoteAdded', this.quote);
        			this.quote = '';
        		}
        	}
        }
	}
</script>
<style></style>