<script setup>
import { ref } from 'vue'
import PublicLayout from '@/components/layout/PublicLayout.vue'
import { Mail, Lock, User, ArrowRight } from 'lucide-vue-next'

const isLogin = ref(true)
const toggleAuth = () => (isLogin.value = !isLogin.value)
</script>

<template>
  <PublicLayout>
    <div class="min-h-[80vh] flex items-center justify-center px-4 py-12 bg-slate-50/50">
      <div class="w-full max-w-md fade-in-up">
        <div
          class="bg-white rounded-3xl shadow-xl shadow-blue-900/5 border border-slate-100 overflow-hidden"
        >
          <div class="p-8 md:p-10">
            <div class="text-center mb-10">
              <h2 class="text-3xl font-bold text-slate-900">
                {{ isLogin ? 'Welcome Back' : 'Join the Study' }}
              </h2>
              <p class="text-slate-500 mt-2">
                {{
                  isLogin
                    ? 'Enter your details to access your dashboard'
                    : 'Create an account to start your AI journey'
                }}
              </p>
            </div>

            <form @submit.prevent class="space-y-5">
              <div v-if="!isLogin" class="space-y-2">
                <label class="text-sm font-semibold text-slate-700 ml-1">Full Name</label>
                <div class="relative group">
                  <User
                    class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-blue-600 transition-colors"
                  />
                  <input
                    type="text"
                    placeholder="John Doe"
                    class="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl focus:bg-white focus:ring-4 focus:ring-blue-100 focus:border-blue-600 outline-none transition-all"
                  />
                </div>
              </div>

              <div class="space-y-2">
                <label class="text-sm font-semibold text-slate-700 ml-1">Email Address</label>
                <div class="relative group">
                  <Mail
                    class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-blue-600 transition-colors"
                  />
                  <input
                    type="email"
                    placeholder="name@university.edu"
                    class="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl focus:bg-white focus:ring-4 focus:ring-blue-100 focus:border-blue-600 outline-none transition-all"
                  />
                </div>
              </div>

              <div class="space-y-2">
                <label class="text-sm font-semibold text-slate-700 ml-1">Password</label>
                <div class="relative group">
                  <Lock
                    class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-blue-600 transition-colors"
                  />
                  <input
                    type="password"
                    placeholder="••••••••"
                    class="w-full pl-12 pr-4 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl focus:bg-white focus:ring-4 focus:ring-blue-100 focus:border-blue-600 outline-none transition-all"
                  />
                </div>
              </div>

              <button
                class="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-2xl shadow-lg shadow-blue-200 flex items-center justify-center gap-2 group transition-all active:scale-[0.98]"
              >
                {{ isLogin ? 'Sign In' : 'Create Account' }}
                <ArrowRight class="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>

            <div class="mt-8 text-center text-sm">
              <span class="text-slate-500">{{
                isLogin ? "Don't have an account?" : 'Already have an account?'
              }}</span>
              <button
                @click="toggleAuth"
                class="ml-2 font-bold text-blue-600 hover:text-blue-700 transition-colors"
              >
                {{ isLogin ? 'Register Now' : 'Log In' }}
              </button>
            </div>
          </div>
        </div>

        <p class="text-center text-slate-400 text-xs mt-8 px-6">
          Your data is encrypted and used strictly for research purposes. By continuing, you agree
          to our Terms of Participation.
        </p>
      </div>
    </div>
  </PublicLayout>
</template>
