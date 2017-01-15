import * as types from './types.js'


// We can also get payload from components
/* without using types */
// export const updateValue = (state, payload) => {
// 	state.value = payload;
// };

/* using types */
export default {
	[ types.UPDATE_VALUE ]: (state, payload) => {
		state.value = payload;
	}
};