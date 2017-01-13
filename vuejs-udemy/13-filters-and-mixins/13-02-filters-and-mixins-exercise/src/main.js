import Vue from 'vue'
import App from './App.vue'

Vue.filter('appendCount', function(text) {
	var words = text.trim().split(/\s+/);

	for (var i = 0; i < words.length; i++) {
		words[i] += " (" + words[i].length + ")"
	}

    return words.join(" ");
});

Vue.mixin({
    created() {
        console.log('Global Mixin - Created Hook');
    }
});

new Vue({
  el: '#app',
  render: h => h(App)
})
