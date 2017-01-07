import Vue from 'vue'
import App from './App.vue'

Vue.mixin({
	created() {
		console.log("global mixin's created hook");
	}
})

Vue.filter('to-lowercase', (value) => {
	return value.toLowerCase();
});

new Vue({
  el: '#app',
  render: h => h(App)
})
