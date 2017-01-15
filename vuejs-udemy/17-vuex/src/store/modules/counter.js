import * as types from '../types.js'

const state = {
	counter: 0
};

const getters = {
	/* normal approach */
	// doubleCounter: (state) => {
	// 	return state.counter * 2;
	// },
	// stringCounter: (state) => {
	// 	return state.counter + " Click(s)";
	// }            

	/* using types which always force uniqueness */
	[ types.DOUBLE_COUNTER ]: (state) => {
		return state.counter * 2;
	},
	[ types.CLICK_COUNTER ]: (state) => {
		return state.counter + " Click(s)";
	}            
}

// We can also get payload from components
const mutations = {
	decrement: (state, payload) => {
		console.log(payload);
		state.counter -= payload;
	},
	increment: (state, payload) => {
		console.log(payload);
		state.counter += payload;
	}
}

const actions = {
	// decrement: (context) => {
	// 	context.commit('decrement');
	// },

	// // You can subtract just 'commit' function from 'context' using {} in ES6
	// increment: ({ commit }) => {
	// 	commit('increment');
	// },

	// asyncDecrement: ({ commit }) => {
	// 	setTimeout(() => {
	// 		commit('decrement');
	// 	}, 1000);
	// },

	// asyncIncrement: ({ commit }) => {
	// 	setTimeout(() => {
	// 		commit('increment');
	// 	}, 1000);
	// }

	// We can also pass payload from components
	decrement: (context, payload) => {
		context.commit('decrement', payload);
	},

	// You can subtract just 'commit' function from 'context' using {} in ES6
	increment: ({ commit }, payload) => {
		commit('increment', payload);
	},

	asyncDecrement: ({ commit }, payload) => {
		setTimeout(() => {
			commit('decrement', payload.by);
		}, payload.duration);
	},

	asyncIncrement: ({ commit }, payload) => {
		setTimeout(() => {
			commit('increment', payload.by);
		}, payload.duration);
	}
}

/* this way of registering is good */
// export default {
// 	state: state,
// 	getters: getters,
// 	mutations: mutations,
// 	actions: actions
// }

/* but we can also use ES6 shorthand */
export default {
	state,
	getters,
	mutations,
	actions
}