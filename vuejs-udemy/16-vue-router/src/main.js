import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { routes } from './routes'

Vue.use(VueRouter);


console.log(routes);

const router = new VueRouter({
	routes: routes,
	mode: 'history',
	scrollBehavior(to, from, savedPosition) {
		if (savedPosition) {
			return savedPosition;
		}
		if (to.hash) {
			return { selector: to.hash };
		}
		return { x: 0, y: 0 }
		// return { x: 0, y: 700 }
	}
})

router.beforeEach((to, from, next) => {
	console.log('global beforeEach');

	/* 
		to continue, we must use next(). 
		next() can be use for redirection, for example next("/user") or next({ name: User }).
	*/
	next(); 
});

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
});
