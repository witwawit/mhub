import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home'
// import Watch from '@/components/Watch'

Vue.use(VueRouter)

const routes = [
	{ path: '/', name: Home, component:  Home},
	// { path: '/watch', name: Watch, component:  Watch}
]

const router = new VueRouter({
	routes
})
export default router;