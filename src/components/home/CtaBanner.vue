<script setup>
import { ArrowRight } from 'lucide-vue-next'
</script>

<template>
  <section class="relative py-24 overflow-hidden fade-in-up">
    <div class="absolute inset-0 bg-gradient-to-br from-blue-800 via-blue-700 to-teal-700"></div>

    <div
      class="absolute -top-24 -right-24 w-96 h-96 bg-teal-400 rounded-full mix-blend-overlay filter blur-[100px] opacity-40 animate-pulse"
    ></div>
    <div
      class="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-400 rounded-full mix-blend-overlay filter blur-[100px] opacity-40 animate-pulse"
      style="animation-duration: 4s"
    ></div>

    <div class="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
      <h2 class="text-2xl md:text-3xl font-extrabold text-white tracking-tight mb-6 drop-shadow-md">
        Ready to Get Started?
      </h2>
      <p class="text-base md:text-lg text-blue-100 mb-10 max-w-2xl mx-auto font-light">
        Join thousands of students preparing for AI-driven careers.
      </p>

      <button
        class="group inline-flex items-center gap-3 bg-[#38b2ac] hover:bg-[#319795] text-white px-8 py-4 rounded-full font-bold text-base transition-all duration-300 shadow-lg hover:shadow-[#38b2ac]/50 hover:-translate-y-1 border border-transparent hover:border-teal-200"
      >
        Join the Study
        <ArrowRight class="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" />
      </button>
    </div>
  </section>
</template>
