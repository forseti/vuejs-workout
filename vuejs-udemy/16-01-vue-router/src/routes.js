import Home from './components/Home.vue';
import Header from './components/Header.vue';


/* These imports are eagerly loaded */
// import User from './components/user/User.vue';
// import UserStart from './components/user/UserStart.vue'
// import UserEdit from './components/user/UserEdit.vue'
// import UserDetail from './components/user/UserDetail.vue'

/* in production, lazy load is preferrable */

// const User = resolve => {
// 	require.ensure(['./components/user/User.vue'], () => {
// 		resolve(require('./components/user/User.vue'))
// 	})
// } 

// const UserStart = resolve => {
// 	require.ensure(['./components/user/UserStart.vue'], () => {
// 		resolve(require('./components/user/UserStart.vue'))
// 	})
// } 

// const UserDetail = resolve => {
// 	require.ensure(['./components/user/UserDetail.vue'], () => {
// 		resolve(require('./components/user/UserDetail.vue'))
// 	})
// } 

// const UserEdit = resolve => {
// 	require.ensure(['./components/user/UserEdit.vue'], () => {
// 		resolve(require('./components/user/UserEdit.vue'))
// 	})
// } 

/* You can group them together under the same group name */
const User = resolve => {
	require.ensure(['./components/user/User.vue'], () => {
		resolve(require('./components/user/User.vue'))
	}, "user")
} 

const UserStart = resolve => {
	require.ensure(['./components/user/UserStart.vue'], () => {
		resolve(require('./components/user/UserStart.vue'))
	}, "user")
} 

const UserDetail = resolve => {
	require.ensure(['./components/user/UserDetail.vue'], () => {
		resolve(require('./components/user/UserDetail.vue'))
	}, "user")
} 

const UserEdit = resolve => {
	require.ensure(['./components/user/UserEdit.vue'], () => {
		resolve(require('./components/user/UserEdit.vue'))
	}, "user"

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
		{ path: ':id/edit', component: UserEdit, name: 'userEdit', beforeEnter: (to, from, next) => {
			console.log('inside route setup - UserEdit route');
			next();
		} },
	]},
	// { path: '/redirect-me', redirect: '/user' },
	{ path: '/redirect-me', redirect: { name: 'home' } },
	{ path: '*', redirect: "/" }
]