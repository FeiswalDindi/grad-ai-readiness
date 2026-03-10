<script setup>
import { RouterLink } from 'vue-router'
import { ArrowRight } from 'lucide-vue-next'
</script>

<template>
  <section class="py-20 px-4">
    <div
      class="max-w-6xl mx-auto rounded-[3rem] bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-900 p-12 md:p-20 text-center relative overflow-hidden shadow-2xl shadow-blue-900/20"
    >
      <div
        class="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"
      ></div>

      <div class="relative z-10 fade-in-up">
        <h2 class="text-3xl md:text-5xl font-black text-white mb-6 tracking-tight">
          Ready to Get Started?
        </h2>

        <p class="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-medium opacity-90">
          Join thousands of students preparing for AI-driven careers. Start your baseline assessment
          today.
        </p>

        <RouterLink
          to="/signup"
          class="inline-flex items-center gap-3 bg-[#4FD1C5] hover:bg-[#45bfb4] text-white px-10 py-5 rounded-full font-black text-lg transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1 active:scale-95 group"
        >
          Join the Study
          <ArrowRight class="w-6 h-6 group-hover:translate-x-2 transition-transform" />
        </RouterLink>
      </div>
    </div>
  </section>
</template>
