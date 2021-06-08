import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import Watch from '@/views/Watch'
import Rate from '@/views/Rate'

Vue.use(VueRouter)

const routes = [
	{ path: '/', name: "home", component: Home },
	{ path: '/watch', name: "watch", component: Watch },
	{ path: '/rate', name: "rate", component: Rate }
]

const router = new VueRouter({
	mode: "history",
	routes,
	scrollBehavior() {
		return { x: 0, y: 0 }
	}
})
export default router;