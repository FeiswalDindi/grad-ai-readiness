<script setup>
import { ref } from 'vue'
import { useRouter, RouterLink } from 'vue-router'
import { GraduationCap, ArrowRight, ArrowLeft, Loader2, ShieldCheck, Home } from 'lucide-vue-next'

const router = useRouter()
const isLoading = ref(false)
const isTutorLoading = ref(false)

const goBack = () => {
  const fromPath = router.options.history.state.back
  if (fromPath && (fromPath.includes('signup') || fromPath.includes('login'))) {
    router.push('/')
  } else {
    router.back()
  }
}

const handleLogin = () => {
  isLoading.value = true
  setTimeout(() => {
    isLoading.value = false
    router.push('/dashboard')
  }, 1200)
}

const handleTutorDemo = () => {
  isTutorLoading.value = true
  setTimeout(() => {
    isTutorLoading.value = false
    router.push('/tutor/dashboard')
  }, 1200)
}
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

      <div class="relative z-10 max-w-lg">
        <RouterLink to="/" class="flex items-center gap-3 mb-12 group inline-flex text-white">
          <div
            class="bg-blue-600 p-2.5 rounded-xl shadow-lg group-hover:bg-blue-500 transition-colors"
          >
            <GraduationCap class="h-7 w-7 text-white" />
          </div>
          <span class="font-bold text-3xl tracking-tight">AI Career Ready</span>
        </RouterLink>

        <h1 class="text-4xl font-extrabold text-white mb-6 leading-tight">
          Empowering the next generation of AI-ready professionals.
        </h1>

        <div class="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
          <p class="text-slate-300 italic mb-4">
            "This platform changed how I view AI workflows. I feel much more prepared for my
            post-grad job hunt."
          </p>
          <div class="flex items-center gap-3">
            <div
              class="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold"
            >
              JD
            </div>
            <div>
              <p class="text-white font-bold text-sm">Stephen</p>
              <p class="text-slate-500 text-xs">Computer Science Cohort '26</p>
            </div>
          </div>
        </div>
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
        <h2 class="text-3xl font-extrabold text-slate-900 mb-2">Welcome back</h2>
        <p class="text-slate-500 mb-8 font-medium">Please enter your details to sign in.</p>

        <div class="space-y-3 mb-8">
          <button
            class="w-full flex items-center justify-center gap-3 py-3 px-4 border border-slate-200 rounded-xl hover:bg-slate-50 font-semibold text-slate-700 transition-colors"
          >
            <svg class="w-5 h-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>
            Continue with Google
          </button>
          <button
            class="w-full flex items-center justify-center gap-3 py-3 px-4 border border-slate-200 rounded-xl hover:bg-slate-50 font-semibold text-slate-700 transition-colors"
          >
            <svg class="w-5 h-5" viewBox="0 0 21 21" xmlns="http://www.w3.org/2000/svg">
              <rect x="1" y="1" width="9" height="9" fill="#f25022" />
              <rect x="11" y="1" width="9" height="9" fill="#7fba00" />
              <rect x="1" y="11" width="9" height="9" fill="#00a4ef" />
              <rect x="11" y="11" width="9" height="9" fill="#ffb900" />
            </svg>
            Continue with Microsoft
          </button>
        </div>

        <div class="flex items-center gap-4 mb-8">
          <div class="h-px bg-slate-100 flex-1"></div>
          <span class="text-[10px] font-black text-slate-300 uppercase tracking-widest">OR</span>
          <div class="h-px bg-slate-100 flex-1"></div>
        </div>

        <form @submit.prevent="handleLogin" class="space-y-5">
          <div class="space-y-2 text-left">
            <label class="text-sm font-bold text-slate-700">Email Address</label>
            <input
              type="email"
              required
              placeholder="name@university.edu"
              class="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white outline-none transition-all font-medium"
            />
          </div>
          <div class="space-y-2 text-left">
            <div class="flex justify-between items-center">
              <label class="text-sm font-bold text-slate-700">Password</label>
              <a href="#" class="text-xs font-bold text-blue-600 hover:underline">Forgot?</a>
            </div>
            <input
              type="password"
              required
              placeholder="••••••••"
              class="w-full px-4 py-3.5 bg-slate-50 border border-slate-200 rounded-xl focus:bg-white outline-none transition-all font-medium"
            />
          </div>

          <button
            type="submit"
            :disabled="isLoading || isTutorLoading"
            class="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 rounded-xl shadow-lg flex items-center justify-center gap-2 transition-all"
          >
            <Loader2 v-if="isLoading" class="w-5 h-5 animate-spin" />
            <span v-else>Sign In to Dashboard</span>
          </button>
        </form>

        <div class="flex items-center gap-4 my-8">
          <div class="h-px bg-slate-100 flex-1"></div>
          <span class="text-[10px] font-black text-slate-300 uppercase tracking-widest"
            >Demonstration Only</span
          >
          <div class="h-px bg-slate-100 flex-1"></div>
        </div>

        <button
          @click="handleTutorDemo"
          :disabled="isLoading || isTutorLoading"
          class="w-full bg-blue-50 border-2 border-blue-100 text-blue-700 font-bold py-3.5 rounded-xl hover:bg-blue-100 transition-all flex items-center justify-center gap-2 group"
        >
          <Loader2 v-if="isTutorLoading" class="w-5 h-5 animate-spin" />
          <template v-else>
            <ShieldCheck class="w-5 h-5 text-blue-500 group-hover:scale-110 transition-transform" />
            Login as Instructor
          </template>
        </button>

        <p class="text-center mt-8 text-slate-500 font-medium">
          Don't have an account?
          <RouterLink to="/signup" replace class="text-blue-600 font-bold hover:underline ml-1"
            >Sign up</RouterLink
          >
        </p>
      </div>
    </div>
  </div>
</template>
