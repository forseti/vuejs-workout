import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'

var instance = axios.create({
  baseURL: 'http://localhost:5000/user',
  timeout: 1000
});

instance.interceptors.request.use((config) => {
	console.log('at request interceptor1:', config);

	if (config.method === 'post')
		config.method = 'put';

	return config;
}, (error) => {
	return Promise.reject(error);
});

instance.interceptors.request.use((config) => {
	console.log('at request interceptor2:', config);
	return config;
}, (error) => {
	return Promise.reject(error);
});


instance.interceptors.response.use((response) => {
	console.log('at response interceptor1:', response);
	
	if (response.data.length > 0)
		response.data[0].email= 'modified.email@example.com'
	
	return response;
}, (error) => {
	return Promise.reject(error);
});

Vue.prototype.$http = instance

new Vue({
  el: '#app',
  render: h => h(App)
})
