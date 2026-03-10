<script setup>
import { GraduationCap, Twitter, Linkedin, Github } from 'lucide-vue-next'

// Pro-grade smooth scroll function
const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<template>
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
            <a href="#" class="hover:text-sky-500 transition-colors"><Twitter class="w-5 h-5" /></a>
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
            <li>
              <button
                @click="scrollToSection('about')"
                class="hover:text-blue-600 transition-colors"
              >
                About the Study
              </button>
            </li>
            <li>
              <button
                @click="scrollToSection('modules')"
                class="hover:text-blue-600 transition-colors"
              >
                Training Modules
              </button>
            </li>
            <li>
              <button @click="scrollToSection('faq')" class="hover:text-blue-600 transition-colors">
                FAQ
              </button>
            </li>
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
</template>
