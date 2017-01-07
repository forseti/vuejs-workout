<template>
    <div class="container">
        <app-header :quoteCount="quotes.length" :maxQuotes='maxQuotes'></app-header>
        <app-new-quote @quoteAdded='addQuote'></app-new-quote>
    	<app-quote-grid :quotes='quotes' @quoteRemoved='removeQuote'></app-quote-grid>

        <div class="row">
    	   <div class="col-sm-12 text-center alert alert-info" role="alert">
                Info: Click on a quote to delete it
            </div>
    	</div>
    </div>
</template>

<script>
    import Header from './components/Header.vue';
    import NewQuote from './components/NewQuote.vue';
	import QuoteGrid from './components/QuoteGrid.vue';

    export default {

        data() {
        	return {
        		quotes: [
        			'Just a quote to see something'
        		],
        		maxQuotes: 10
        	}
        },
        components: {
            appNewQuote: NewQuote,
        	appQuoteGrid: QuoteGrid,
            appHeader: Header
        },
        methods: {
            addQuote(quote) {
                if (this.quotes.length < this.maxQuotes)
                    this.quotes.push(quote);
                else
                    alert('Maximum quotes is 10');
            },
            removeQuote(index) {
                if (index > -1)
                    this.quotes.splice(index, 1);
            }
        }
    };
</script>

<style>
</style>
