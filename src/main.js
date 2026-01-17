import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import ColorBox from './components/ColorBox.vue'
import GameBoard from './components/GameBoard.vue'
import ScoreBoard from './components/ScoreBoard.vue'
import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('color-box', ColorBox)
app.component('game-board', GameBoard)
app.component('score-board', ScoreBoard)
app.mount('#app')
