<script setup>
import { ref, computed } from 'vue'
import { useRouter, RouterLink } from 'vue-router'
import { GraduationCap, ArrowRight, ArrowLeft, Loader2, Home } from 'lucide-vue-next'

const router = useRouter()
const isLoading = ref(false)
const password = ref('')

const goBack = () => {
  const fromPath = router.options.history.state.back
  if (fromPath && (fromPath.includes('login') || fromPath.includes('signup'))) {
    router.push('/')
  } else {
    router.back()
  }
}

const handleSignup = () => {
  isLoading.value = true
  setTimeout(() => {
    isLoading.value = false
    router.push('/dashboard')
  }, 1200)
}

const passwordScore = computed(() => {
  let score = 0
  if (password.value.length >= 8) score++
  if (/[A-Z]/.test(password.value)) score++
  if (/[0-9]/.test(password.value)) score++
  if (/[^A-Za-z0-9]/.test(password.value)) score++
  return score
})

const strengthText = computed(() => {
  if (password.value.length === 0) return 'Enter a password'
  if (passwordScore.value <= 1) return 'Weak'
  if (passwordScore.value === 2) return 'Fair'
  if (passwordScore.value === 3) return 'Good'
  return 'Strong'
})

const strengthColor = computed(() => {
  if (passwordScore.value <= 1) return 'bg-red-500'
  if (passwordScore.value === 2) return 'bg-orange-500'
  if (passwordScore.value === 3) return 'bg-yellow-500'
  return 'bg-emerald-500'
})
</script>

<template>
  <div class="min-h-screen flex bg-white font-sans text-slate-900">
    <div
      class="hidden lg:flex lg:w-1/2 bg-slate-900 relative overflow-hidden items-center justify-center p-12"
    >
      <div
        class="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-blue-900/40 via-slate-900 to-slate-900"
      ></div>
      <div
        class="absolute bottom-0 right-0 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"
      ></div>

      <div class="relative z-10 max-w-lg text-white">
        <RouterLink to="/" class="flex items-center gap-3 mb-12 inline-flex">
          <div class="bg-blue-600 p-2.5 rounded-xl shadow-lg">
            <GraduationCap class="h-7 w-7 text-white" />
          </div>
          <span class="font-bold text-3xl tracking-tight">AI Career Ready</span>
        </RouterLink>
        <h1 class="text-4xl font-extrabold mb-6 leading-tight">
          Start your journey to AI fluency today.
        </h1>
        <p class="text-lg text-slate-400">
          Join our comprehensive study to receive your AI Readiness Certificate.
        </p>
      </div>
    </div>

    <div
      class="w-full lg:w-1/2 flex items-center justify-center p-8 sm:p-12 lg:p-24 bg-white relative"
    >
      <div
        class="absolute top-6 left-6 right-6 sm:top-8 sm:left-8 sm:right-8 flex justify-between items-center"
      >
        <RouterLink
          to="/"
          class="flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-blue-600 transition-colors"
        >
          <Home class="w-4 h-4" /> Home
        </RouterLink>
        <button
          @click="goBack"
          class="flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-slate-600 transition-colors"
        >
          <ArrowLeft class="w-4 h-4" /> Go back
        </button>
      </div>

      <div class="w-full max-w-md fade-in-up mt-12">
        <h2 class="text-3xl font-extrabold text-slate-900 mb-2">Create an account</h2>
        <p class="text-slate-500 mb-8 font-medium">Join the research cohort.</p>

        <form @submit.prevent="handleSignup" class="space-y-5">
          <div class="space-y-2 text-left">
            <label class="text-sm font-bold text-slate-700">Full Name</label>
            <input
              type="text"
              required
              placeholder="John Doe"
              class="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white outline-none transition-all font-medium"
            />
          </div>
          <div class="space-y-2 text-left">
            <label class="text-sm font-bold text-slate-700">University Email</label>
            <input
              type="email"
              required
              placeholder="name@university.edu"
              class="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white outline-none transition-all font-medium"
            />
          </div>

          <div class="space-y-2 text-left">
            <label class="text-sm font-bold text-slate-700">Password</label>
            <input
              type="password"
              required
              v-model="password"
              placeholder="Create a password"
              class="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white outline-none transition-all font-medium"
            />

            <div v-if="password.length > 0" class="mt-2">
              <div class="flex gap-1.5 h-1.5 mb-1.5">
                <div
                  v-for="i in 4"
                  :key="i"
                  class="flex-1 rounded-full transition-colors"
                  :class="passwordScore >= i ? strengthColor : 'bg-slate-200'"
                ></div>
              </div>
              <p
                class="text-[10px] font-black uppercase tracking-wider"
                :class="passwordScore >= 3 ? 'text-emerald-500' : 'text-slate-400'"
              >
                Strength: {{ strengthText }}
              </p>
            </div>
          </div>

          <button
            type="submit"
            :disabled="isLoading || passwordScore < 2"
            class="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-lg transition-all disabled:opacity-50 mt-6"
          >
            <Loader2 v-if="isLoading" class="w-5 h-5 animate-spin mx-auto" />
            <span v-else>Create Account</span>
          </button>
        </form>

        <p class="text-center mt-10 text-slate-500 font-medium">
          Already have an account?
          <RouterLink to="/login" replace class="text-blue-600 font-bold hover:underline ml-1"
            >Log in</RouterLink
          >
        </p>
      </div>
    </div>
  </div>
</template>
