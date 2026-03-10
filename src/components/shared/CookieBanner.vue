<script setup>
import { ref, onMounted } from 'vue'
import { Cookie } from 'lucide-vue-next'

const showBanner = ref(false)

// When the component loads, check the browser's memory
onMounted(() => {
  const consent = localStorage.getItem('ai_career_cookie_consent')

  // If there is no record of their choice, show the banner after a 1-second delay
  if (!consent) {
    setTimeout(() => {
      showBanner.value = true
    }, 1000)
  }
})

// Function to save the "Accept" choice
const acceptCookies = () => {
  localStorage.setItem('ai_career_cookie_consent', 'accepted')
  showBanner.value = false
}

// Function to save the "Reject" choice
const rejectCookies = () => {
  localStorage.setItem('ai_career_cookie_consent', 'rejected')
  showBanner.value = false
}
</script>

<template>
  <transition name="slide-up">
    <div
      v-if="showBanner"
      class="fixed bottom-0 inset-x-0 z-[100] pb-4 sm:pb-6 px-4 sm:px-6 lg:px-8 pointer-events-none"
    >
      <div
        class="max-w-4xl mx-auto bg-slate-900 rounded-2xl shadow-2xl border border-slate-700 p-6 pointer-events-auto flex flex-col md:flex-row items-center justify-between gap-6"
      >
        <div class="flex items-start gap-4">
          <div class="bg-blue-600/20 p-3 rounded-full shrink-0 mt-1">
            <Cookie class="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h3 class="text-white font-bold text-lg">We value your privacy</h3>
            <p class="text-slate-400 text-sm mt-1 leading-relaxed">
              We use cookies to save your module progress and improve your learning experience. By
              clicking "Accept All", you consent to our use of non-essential cookies in accordance
              with data privacy guidelines.
            </p>
          </div>
        </div>

        <div class="flex items-center gap-3 shrink-0 w-full md:w-auto mt-4 md:mt-0">
          <button
            @click="rejectCookies"
            class="flex-1 md:flex-none px-6 py-2.5 rounded-xl font-semibold text-slate-300 hover:text-white hover:bg-slate-800 transition-colors border border-slate-700"
          >
            Reject
          </button>
          <button
            @click="acceptCookies"
            class="flex-1 md:flex-none px-6 py-2.5 rounded-xl font-bold bg-blue-600 hover:bg-blue-500 text-white shadow-lg shadow-blue-900/20 transition-all"
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  </transition>
</template>

<style scoped>
/* Pro-grade fluid animation for the banner appearing */
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}
.slide-up-enter-from,
.slide-up-leave-to {
  transform: translateY(150%);
  opacity: 0;
}
</style>
