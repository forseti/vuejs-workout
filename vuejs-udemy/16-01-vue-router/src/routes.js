import Home from './components/Home.vue';
import User from './components/user/User.vue';

import UserStart from './components/user/UserStart.vue'
import UserEdit from './components/user/UserEdit.vue'
import UserDetail from './components/user/UserDetail.vue'

import Header from './components/Header.vue';

export const routes = [
	{ path: '', 
		/* component is useful for displaying component without using router-link */
		// component: Home, 

		/* components is used for router-link */
		components: {
			'header-top' : Header,
			'header-bottom' : Header,
			default: Home
		},
		name: 'home' },
	/* To be used with <router-link /> that points to /user/10 and /user/20 */
	// { path: '/user/:id', component: User } 

	{ path: '/user', 
	 // component: User, 
	  components: {
			'header-top' : Header,
			'header-bottom' : Header,

			/* it's possible to link User to another router-view! */
			// 'user-bottom': User,

			default: User
	  },
	  children: [
		{ path: '', component: UserStart },
		{ path: ':id', component: UserDetail },
		{ path: ':id/edit', component: UserEdit, name: 'userEdit' },
	]},
	// { path: '/redirect-me', redirect: '/user' },
	{ path: '/redirect-me', redirect: { name: 'home' } },
	{ path: '*', redirect: "/" }
]