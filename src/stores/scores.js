import { defineStore } from 'pinia'

export const gameScore = defineStore('gameScore', {
  state: () => ({
    x: 0,
    o: 0,
    draws: 0,
  }),
  getters: {
    X: (state) => state.x,
    O: (state) => state.o,
    Draws: (state) => state.draws,
  },
  actions: {
    incX() {
      this.x++
    },
    incO() {
      this.o++
    },
    incDraw() {
      this.draws++
    },
  },
})
