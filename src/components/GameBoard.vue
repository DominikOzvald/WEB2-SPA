<template>
  <div class="board">
    <div class="d-flex" v-for="(row, index) in board" v-bind:key="row">
      <img v-if="board[index][0]" :src="board[index][0]" class="field-slot" />
      <div v-else class="field-slot empty" @click="makeMove(index, 0)"></div>
      <img v-if="board[index][1]" :src="board[index][1]" class="field-slot" />
      <div v-else class="field-slot empty" @click="makeMove(index, 1)"></div>
      <img v-if="board[index][2]" :src="board[index][2]" class="field-slot" />
      <div v-else class="field-slot empty" @click="makeMove(index, 2)"></div>
    </div>
  </div>
</template>

<script>
export default {
  emits: ['toMove', 'gameOver'],
  data() {
    return {
      board: [
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
      ],
      xToMove: true,
      isOver: false,
      moveCount: 0,
    }
  },
  watch: {
    xToMove(nextToMove) {
      this.$emit('toMove', { toMove: nextToMove ? 'X' : 'O' })
      let winner = ''
      for (let i = 0; i < 3; i++) {
        if (
          (this.board[i][1] == this.board[i][0] &&
            this.board[i][1] == this.board[i][2] &&
            this.board[i][0] != '') ||
          (this.board[1][i] == this.board[0][i] &&
            this.board[1][i] == this.board[2][i] &&
            this.board[0][i] != '')
        ) {
          this.isOver = true
          winner = this.xToMove ? 'O' : 'X'
        }
      }
      if (
        ((this.board[1][1] == this.board[0][0] && this.board[1][1] == this.board[2][2]) ||
          (this.board[1][1] == this.board[0][2] && this.board[1][1] == this.board[2][0])) &&
        this.board[1][1] != ''
      ) {
        this.isOver = true
        winner = this.xToMove ? 'O' : 'X'
      }
      if (this.moveCount >= 9 && !winner) {
        this.isOver = true
        winner = 'draw'
      }
      if (winner) this.$emit('gameOver', { winner: winner })
    },
  },
  methods: {
    makeMove(i, j) {
      if (!this.isOver) {
        this.moveCount += 1
        this.board[i][j] = this.xToMove ? '/tic-tac-toe-cross.jpg' : '/tic-tac-toe-circle.jpg'
        this.xToMove = !this.xToMove
      }
    },
  },
}
</script>

<style scooped>
.board {
  width: 600px;
  height: 600px;
  box-shadow:
    0 4px 8px 0 rgba(0, 0, 0, 0.2),
    0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.field-slot {
  width: 200px;
  height: 200px;
  border: 1px solid black;
}

.empty {
  cursor: pointer;
}
</style>
