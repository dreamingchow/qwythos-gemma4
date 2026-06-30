import { createRouter, createWebHistory } from 'vue-router'

export function createRouter({ base = '/', history, routes = [] }) {
  return createRouter({
    history: typeof history === 'object' ? history : createWebHistory(base),
    routes
  })
}
