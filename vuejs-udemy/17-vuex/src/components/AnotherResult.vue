<template>
	<div>    	
		<p>Counter is: {{ doubleCounter }}</p>
    	<p>Number of Click(s) is: {{ stringCounter }}</p>
    	<p>Another computed property: {{ anotherComputedProp }}
<!--     	<p>Counter is: {{ counter }}</p>
    	<p>Number of Click(s) is: {{ clicks }}</p> -->

    </div>
</template>

<script>
    import { mapGetters } from 'vuex';
	import * as types from '../store/types.js'
    
    export default {
        // props: ['counter']

        computed: {
        	// A better way is to use '...' an operator from ES6
        	// '...' will tell ES6 to map key-value properties from mapGetters as computed properties
        	// However this will not work because we use babel compiler to convert ES6 to ES5
        	// We need 'dev' only dependency plugin: babel-preset-stage-2
        	// The command is:
        	// $ npm install --save-dev babel-preset-stage-2

        	/* witout types */
        	// ...mapGetters([
        	// 	"doubleCounter",
        	// 	"stringCounter"
        	// ]),

        	...mapGetters({
        		doubleCounter: types.DOUBLE_COUNTER,
        		stringCounter: types.CLICK_COUNTER
        	}),

        	anotherComputedProp() {
        		return "another-Computed-Prop";
        	}
    	}

        /* This solution is better compared to the one below */
        /* However, we cannot create other computed properties
           because computed is occupied by mapGetters */
        // computed: mapGetters([
        // 	"doubleCounter",
        // 	"stringCounter"
        // ])

        /* This solution can become troublesome if there are a lot of getters to be displayed here. */
        // computed: {
        //     counter() {
        //         return this.$store.getters.doubleCounter;
        //     },
        //     clicks() {
        //         return this.$store.getters.stringCounter;
        //     }
        // }
    }
</script>