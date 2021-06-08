import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import Watch from '@/views/Watch'
import Rate from '@/views/Rate'

Vue.use(VueRouter)

const routes = [
	{ path: '/', name: Home, component: Home },
	{ path: '/watch', name: Watch, component: Watch },
	{ path: '/rate' , name: Rate, component: Rate}
]

const router = new VueRouter({
	mode: "history",
	routes
})
export default router;