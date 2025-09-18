import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import KtPublicComment from '@ktlib/public-comment-pc'

const app = createApp(App)

app.use(KtPublicComment)
app.use(router)

app.mount('#app')
