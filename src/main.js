import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia()) // 👈 留着这个，以后用Pinia不用再配了
app.use(router)

app.mount('#app')