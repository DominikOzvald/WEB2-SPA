import ColorPickerView from '@/views/ColorPickerView.vue'
import HomeView from '@/views/HomeView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import TicTacToeView from '@/views/TicTacToeView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/color-picker',
      name: 'color-picker',
      component: ColorPickerView,
    },
    {
      path: '/tic-tac-toe',
      name: 'tic-tac-toe',
      component: TicTacToeView,
    },
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/:catchAll(.*)*',
      name: 'NotFound',
      component: NotFoundView,
    },
  ],
})

export default router
