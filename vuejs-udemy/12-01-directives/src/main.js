import Vue from 'vue'
import App from './App.vue'

Vue.directive('highlight-no-value', {
	bind(el, binding, vnode) {
		el.style.backgroundColor = 'green';
	}
});

Vue.directive('highlight-with-value', {
	bind(el, binding, vnode) {
		el.style.backgroundColor = binding.value;
	}
});

Vue.directive('highlight-with-arg', {
	bind(el, binding, vnode) {
		if (binding.arg == 'background') 
			el.style.backgroundColor = binding.value;

		else if (binding.arg == 'text')
			el.style.color = binding.value;
	}
});

Vue.directive('highlight-with-modifier', {
	bind(el, binding, vnode) {
		var delay = 0;

		if (binding.modifiers['delayed']) {
			delay = 3000;
		}

		setTimeout(() => {
			if (binding.arg == 'background') 
				el.style.backgroundColor = binding.value;

			else if (binding.arg == 'text')
				el.style.color = binding.value;
		}, delay);
	}
});

new Vue({
  el: '#app',
  render: h => h(App)
})
