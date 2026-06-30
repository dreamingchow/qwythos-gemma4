import { createRouter as createVueRouter, createWebHistory } from 'vue-router'

export function createRouter({ base = '/', history, routes = [] }) {
  return createVueRouter({
    history: typeof history === 'object' ? history : createWebHistory(base),
    routes
  })
}
