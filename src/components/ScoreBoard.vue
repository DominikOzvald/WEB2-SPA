<template>
  <div class="d-flex justify-content-center mt-2">
    <div class="card ms-1 me-1">
      <p class="card-title">X: {{ X }}</p>
    </div>
    <div class="card ms-1 me-1">
      <p class="card-title">Draw: {{ Draws }}</p>
    </div>
    <div class="card ms-1 me-1">
      <p class="card-title">O: {{ O }}</p>
    </div>
  </div>
</template>
<script>
import { gameScore } from '@/stores/scores'
import { mapState } from 'pinia'
export default {
  computed: {
    ...mapState(gameScore, ['Draws', 'O', 'X']),
  },
}
</script>
<style scoped>
p {
  width: 200px;
}
</style>
