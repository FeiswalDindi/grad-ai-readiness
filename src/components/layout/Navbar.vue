<script setup>
import { ref } from 'vue'
import { GraduationCap, Menu, X } from 'lucide-vue-next'
import { RouterLink } from 'vue-router'

const isMobileMenuOpen = ref(false)

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const scrollToSection = (sectionId) => {
  isMobileMenuOpen.value = false
  const element = document.getElementById(sectionId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<template>
  <header
    class="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm transition-all duration-300"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16 md:h-20">
        <RouterLink to="/" class="flex items-center gap-3 cursor-pointer group">
          <div
            class="bg-blue-600 p-2 rounded-xl shadow-inner group-hover:bg-blue-700 transition-colors"
          >
            <GraduationCap class="h-6 w-6 text-white" />
          </div>
          <span class="font-bold text-xl md:text-2xl tracking-tight text-slate-800"
            >AI Career Ready</span
          >
        </RouterLink>

        <nav class="hidden md:flex items-center gap-8 font-medium text-slate-500">
          <button @click="scrollToSection('about')" class="hover:text-blue-600 transition-colors">
            About Study
          </button>
          <button @click="scrollToSection('modules')" class="hover:text-blue-600 transition-colors">
            Modules
          </button>
          <button @click="scrollToSection('faq')" class="hover:text-blue-600 transition-colors">
            FAQ
          </button>
        </nav>

        <div class="hidden md:flex items-center gap-5">
          <RouterLink
            to="/auth"
            class="text-slate-600 hover:text-blue-600 font-medium transition-colors"
            >Log In</RouterLink
          >
          <RouterLink
            to="/auth"
            class="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-semibold transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5"
          >
            Join the Study
          </RouterLink>
        </div>

        <div class="md:hidden flex items-center">
          <button
            @click="toggleMobileMenu"
            class="text-slate-500 p-2 hover:bg-slate-100 rounded-lg transition-colors"
          >
            <Menu class="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  </header>

  <div
    v-if="isMobileMenuOpen"
    class="fixed inset-0 z-[60] bg-slate-900/40 backdrop-blur-sm transition-opacity md:hidden"
    @click="toggleMobileMenu"
  ></div>

  <div
    class="fixed inset-y-0 right-0 z-[70] w-72 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out flex flex-col md:hidden"
    :class="isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'"
  >
    <div class="px-6 py-5 border-b border-slate-100 flex items-center justify-between">
      <span class="font-bold text-xl text-slate-800">Menu</span>
      <button
        @click="toggleMobileMenu"
        class="p-2 bg-slate-100 text-slate-500 hover:text-slate-800 hover:bg-slate-200 rounded-full transition-colors"
      >
        <X class="w-5 h-5" />
      </button>
    </div>

    <div class="flex-1 overflow-y-auto px-6 py-8 flex flex-col gap-6">
      <nav class="flex flex-col gap-5 text-lg font-medium text-slate-600">
        <button
          @click="scrollToSection('about')"
          class="text-left hover:text-blue-600 transition-colors"
        >
          About Study
        </button>
        <button
          @click="scrollToSection('modules')"
          class="text-left hover:text-blue-600 transition-colors"
        >
          Training Modules
        </button>
        <button
          @click="scrollToSection('faq')"
          class="text-left hover:text-blue-600 transition-colors"
        >
          FAQ
        </button>
      </nav>

      <hr class="border-slate-100" />

      <div class="flex flex-col gap-4 mt-2">
        <RouterLink
          to="/auth"
          @click="toggleMobileMenu"
          class="text-center font-bold text-slate-700 py-3.5 rounded-xl border-2 border-slate-200 hover:bg-slate-50 transition-colors"
        >
          Log In
        </RouterLink>
        <RouterLink
          to="/auth"
          @click="toggleMobileMenu"
          class="text-center font-bold text-white bg-blue-600 py-3.5 rounded-xl shadow-lg hover:bg-blue-700 transition-colors"
        >
          Join the Study
        </RouterLink>
      </div>
    </div>
  </div>
</template>
