import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import Watch from '@/views/Watch'

Vue.use(VueRouter)

const routes = [
	{ path: '/', name: Home, component: Home },
	{ path: '/watch', name: Watch, component: Watch }
]

const router = new VueRouter({
	mode: "history",
	routes
})
export default router;