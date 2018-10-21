// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import Layout from './components/layout'
import VueRouter from 'vue-router'
import IndexPage from './pages/index'
import DetailPage from './pages/detail'
import VueResource from 'vue-resource'
import DetailAnaPage from './pages/detail/analysis'
import DetailCouPage from './pages/detail/count'
import DetailForPage from './pages/detail/forecast'
import DetailPubPage from './pages/detail/publish'
import OrderListPage from './pages/orderList'
Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(VueResource)
	/* eslint-disable no-new */
let router = new VueRouter({
	mode: 'history',
	routes: [{
		path: '/',
		component: IndexPage,
		
	},
	   {
			path: '/orderList',
			component: OrderListPage
		},
	
	   {
		path: '/detail',
		redirect:'/detail/count',
		component: DetailPage,
		children: [{
				path: 'analysis',
				component: DetailAnaPage
			}, {
				path: 'count',
				component: DetailCouPage
			}, {
				path: 'forecast',
				component: DetailForPage
			}, {
				path: 'publish',
				component: DetailPubPage
			}

		]
	}]
})

new Vue({
	el: '#app',
	router,
	components: {
		Layout
	},
	template: '<Layout/>',

})