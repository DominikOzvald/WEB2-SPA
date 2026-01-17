<template>
  <div class="d-flex justify-content-center">
    <div class="card mb-2 game-info">
      <p v-if="winningText" class="card-title">{{ winningText }}</p>
      <p v-else class="card-title">{{ nextToMove }} is next to Move</p>
    </div>
  </div>
  <div class="d-flex justify-content-center">
    <game-board :key="setGame" @to-move="changeMove" @game-over="handelGameOver"></game-board>
  </div>
  <score-board></score-board>
  <div class="d-flex justify-content-center mt-2">
    <button v-if="winningText" class="btn btn-primary" @click="resetGame">New Round</button>
  </div>
</template>
<script>
import ScoreBoard from '@/components/ScoreBoard.vue'
import { gameScore } from '@/stores/scores'
import { mapActions } from 'pinia'
export default {
  components: { ScoreBoard },
  data() {
    return {
      nextToMove: 'X',
      winningText: '',
      setGame: true,
    }
  },
  methods: {
    ...mapActions(gameScore, ['incDraw', 'incX', 'incO']),
    changeMove(args) {
      this.nextToMove = args.toMove
    },
    handelGameOver(args) {
      switch (args.winner) {
        case 'X':
          this.incX()
          break
        case 'O':
          this.incO()
          break
        case 'draw':
          this.incDraw()
          break

        default:
          break
      }
      this.winningText = args.winner != 'draw' ? `${args.winner} Wins` : "It's a Draw"
    },
    resetGame() {
      this.nextToMove = 'X'
      this.winningText = ''
      this.setGame = !this.setGame
    },
  },
}
</script>
<style scoped>
.game-info {
  width: 600px;
}
</style>
