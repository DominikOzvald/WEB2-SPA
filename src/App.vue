<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <ul class="nav nav-tabs">
      <li class="nav-item">
        <RouterLink class="nav-link" to="/">Home</RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink class="nav-link" to="/color-picker">Color Picker</RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink class="nav-link" to="/tic-tac-toe">Tic-Tac-Toe</RouterLink>
      </li>
    </ul>
  </header>
  <div class="mt-2 ms-2 me-2"><RouterView></RouterView></div>
</template>

<style scoped>
header {
  padding-top: 1em;
}
</style>
