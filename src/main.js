import './assets/main.css'

import { createApp, nextTick } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

function initScrollReveal() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-visible')
        }
      })
    },
    {
      threshold: 0.15,
    },
  )

  document.querySelectorAll('.reveal').forEach((el) => {
    observer.observe(el)
  })
}

// Run after Vue renders
nextTick(() => {
  initScrollReveal()
})

// Run again after page navigation
router.afterEach(() => {
  nextTick(() => {
    initScrollReveal()
  })
})
