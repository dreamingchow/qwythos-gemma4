import { createApp, h } from 'vue'
import { createRouter, createWebHistory } from './router/index.js'
import * as trans from '../i18n/translations.json'
import App from './components/App.vue'

const router = createRouter({
  base: '/',
  history: createWebHistory(),
  routes: [
    { path: '/', component: () => import('./pages/HomePage.vue') },
    { path: '/about', component: () => import('./pages/AboutPage.vue') },
    { path: '/sponsors', component: () => import('./pages/SponsorsPage.vue') },
    { path: '/models', component: () => import('./pages/ModelsPage.vue') },
    { path: '/models/:id', component: () => import('./pages/SpecPage.vue') },
    { path: '/models/add', component: () => import('./pages/AddModelPage.vue') },
    { path: '/blog', component: () => import('./pages/BlogPage.vue') }
  ]
})

const app = createApp({
  render() {
    return h(App, { t: trans })
  }
})

app.use(router)
router.afterEach((to) => {
  document.title = to.meta.title || 'Gemma 4'
})

app.mount('#app')
