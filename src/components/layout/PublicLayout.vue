<script setup>
import { GraduationCap, Twitter, Linkedin, Github, Menu } from 'lucide-vue-next'
</script>

<template>
  <div class="min-h-screen flex flex-col bg-slate-50 font-sans text-slate-900">
    <header
      class="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm transition-all duration-300"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16 md:h-20">
          <div class="flex items-center gap-3 cursor-pointer group">
            <div
              class="bg-blue-600 p-2 rounded-xl shadow-inner group-hover:bg-blue-700 transition-colors"
            >
              <GraduationCap class="h-6 w-6 text-white" />
            </div>
            <span class="font-bold text-xl md:text-2xl tracking-tight text-slate-800"
              >AI Career Ready</span
            >
          </div>

          <nav class="hidden md:flex items-center gap-8 font-medium text-slate-500">
            <a href="#" class="hover:text-blue-600 transition-colors">About Study</a>
            <a href="#" class="hover:text-blue-600 transition-colors">Modules</a>
            <a href="#" class="hover:text-blue-600 transition-colors">FAQ</a>
          </nav>

          <div class="hidden md:flex items-center gap-5">
            <button class="text-slate-600 hover:text-blue-600 font-medium transition-colors">
              Log In
            </button>
            <button
              class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-semibold transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
            >
              Join the Study
            </button>
          </div>

          <div class="md:hidden flex items-center">
            <button class="text-slate-500 p-2 hover:bg-slate-100 rounded-lg transition-colors">
              <Menu class="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </header>

    <main class="flex-grow">
      <slot />
    </main>

    <footer class="bg-white border-t border-slate-200 pt-16 pb-8 fade-in-up">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div class="md:col-span-2">
            <div class="flex items-center gap-2 mb-4">
              <div class="bg-blue-600 p-1.5 rounded-lg shadow-sm">
                <GraduationCap class="h-5 w-5 text-white" />
              </div>
              <span class="font-bold text-lg text-slate-800">AI Career Ready</span>
            </div>
            <p class="text-slate-500 leading-relaxed max-w-sm mb-6">
              A research initiative to prepare graduating students for AI-driven careers. Equipping
              the next generation with practical, job-ready skills.
            </p>

            <div class="flex items-center gap-4 text-slate-400">
              <a href="#" class="hover:text-sky-500 transition-colors"
                ><Twitter class="w-5 h-5"
              /></a>
              <a href="#" class="hover:text-blue-700 transition-colors"
                ><Linkedin class="w-5 h-5"
              /></a>
              <a href="#" class="hover:text-slate-900 transition-colors"
                ><Github class="w-5 h-5"
              /></a>
            </div>
          </div>

          <div>
            <h4 class="font-semibold text-slate-900 mb-4">Program</h4>
            <ul class="space-y-3 text-sm text-slate-500">
              <li><a href="#" class="hover:text-blue-600 transition-colors">About the Study</a></li>
              <li>
                <a href="#" class="hover:text-blue-600 transition-colors">Training Modules</a>
              </li>
              <li><a href="#" class="hover:text-blue-600 transition-colors">FAQ</a></li>
              <li><a href="#" class="hover:text-blue-600 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 class="font-semibold text-slate-900 mb-4">University</h4>
            <ul class="space-y-3 text-sm text-slate-500">
              <li>
                <a href="#" class="hover:text-blue-600 transition-colors">Research Ethics Board</a>
              </li>
              <li><a href="#" class="hover:text-blue-600 transition-colors">Privacy Policy</a></li>
              <li>
                <a href="#" class="hover:text-blue-600 transition-colors">Terms of Participation</a>
              </li>
            </ul>
          </div>
        </div>

        <div
          class="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-400"
        >
          <p>© 2026 AI Career Readiness Program. All rights reserved.</p>
          <div class="flex gap-4">
            <span>Open Source Research Platform</span>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
