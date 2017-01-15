import * as types from './types.js'

// Actions allow us to run async operations
/* without using types */
// export const updateValue = ({ commit }, payload) => {
// 	commit('updateValue', payload);
// };

/* using types */
export default {
	[types.UPDATE_VALUE]: ({ commit }, payload) => {
		commit('updateValue', payload);
	}
}