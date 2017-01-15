import Vue from 'vue';
import Vuex from 'vuex';
import counter from "./modules/counter.js"

// import * as actions from './actions.js'
/* if we use types we can shorten import like so: */
import actions from './actions.js'

// import * as mutations from './mutations.js'
/* if we use types we can shorten import like so: */
import mutations from './mutations.js'


import * as getters from './getters.js'


Vue.use(Vuex);

export const store = new Vuex.Store({
	state: {
		value: 0
	},

	/* old style */
	// getters: getters,
	// actions: actions,
	// mutations: mutations,
	/* or ES6 style */
	getters,
	actions,
	mutations,

	// Instead of modifying 'counter' directly, we can use mutations to change the 'counter'
	// However mutations are synchronous. Running async operations here will not work!

	// mutations: {
	// 	decrement: (state) => {
	// 		state.counter--;
	// 	},
	// 	increment: (state) => {
	// 		state.counter++;
	// 	}
	// },




	modules: {
		counter

		// counter: counter
	}
});