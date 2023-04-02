import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from "vue-i18n"


import App from './App.vue'
import router from './router'

import './assets/main.css'

// detect locale and load messages
let locale = navigator.language || navigator.languages[0] || "en";
locale = locale.slice(0, 2);
document.querySelector("html")?.setAttribute("lang", locale);
const messages = await import(`./locales/${locale}.json`);
const i18n = createI18n({
  locale: locale,
  messages: { [locale]: messages.default },
});


const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)
app.provide("i18n", i18n)
app.mount('#app')

