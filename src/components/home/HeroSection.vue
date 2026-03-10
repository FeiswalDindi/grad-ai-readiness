<script setup>
import { RouterLink } from 'vue-router'
import { GraduationCap, ArrowRight, PlayCircle } from 'lucide-vue-next'
</script>

<template>
  <section class="relative bg-[#F0F7FF] overflow-hidden">
    <div
      class="absolute top-0 right-0 w-1/2 h-full bg-white skew-x-12 translate-x-32 hidden lg:block"
    ></div>

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 relative z-10">
      <div class="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        <div class="flex-1 text-center lg:text-left fade-in-up">
          <div
            class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 text-blue-700 font-bold text-xs uppercase tracking-widest mb-6"
          >
            <GraduationCap class="w-4 h-4" />
            Empowering Digital Education
          </div>

          <h1 class="text-4xl md:text-6xl font-black text-slate-900 leading-[1.1] mb-6">
            Master AI Readiness <span class="text-blue-600">Anytime Anywhere</span>
          </h1>

          <p
            class="text-lg text-slate-600 mb-10 max-w-xl mx-auto lg:mx-0 font-medium leading-relaxed"
          >
            Join this research study to assess and accelerate your career readiness with
            industrial-grade AI training modules.
          </p>

          <div class="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
            <RouterLink
              to="/signup"
              class="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold text-lg shadow-xl shadow-blue-200 transition-all flex items-center gap-2 group"
            >
              Start Free Trial
              <ArrowRight class="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </RouterLink>

            <button
              class="flex items-center gap-2 text-slate-700 font-bold hover:text-blue-600 transition-colors px-6 py-4"
            >
              <PlayCircle class="w-6 h-6 text-blue-600" />
              Watch Demo
            </button>
          </div>
        </div>

        <div class="flex-1 relative fade-in-up" style="animation-delay: 0.2s">
          <div
            class="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl border-8 border-white"
          >
            <img
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800"
              alt="Academic Tutor"
              class="w-full h-auto object-cover"
            />
          </div>
          <div
            class="absolute -top-10 -right-10 w-40 h-40 bg-blue-200/50 rounded-full blur-3xl"
          ></div>
          <div
            class="absolute -bottom-10 -left-10 w-64 h-64 bg-indigo-100 rounded-full blur-3xl"
          ></div>
        </div>
      </div>
    </div>
  </section>
</template>
