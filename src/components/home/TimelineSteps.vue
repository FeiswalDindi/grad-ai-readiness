<script setup>
// We store the data in an array to avoid repeating HTML 5 times.
// This keeps our file incredibly short and easy to update.
const steps = [
  { id: 1, title: 'Register & Sign Up', time: 'Estimated time: 5 min', delay: '0.1s' },
  { id: 2, title: 'Complete Baseline Survey', time: 'Estimated time: 10 min', delay: '0.2s' },
  { id: 3, title: 'AI Training Modules', time: 'Estimated time: 60 min', delay: '0.3s' },
  { id: 4, title: 'Complete Endline Survey', time: 'Estimated time: 10 min', delay: '0.4s' },
  {
    id: 5,
    title: 'Follow-Up Surveys (6 & 12 months)',
    time: 'Estimated time: 5 min each',
    delay: '0.5s',
  },
]
</script>

<template>
  <section id="modules" class="py-24 bg-white border-t border-slate-100">
    <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16 fade-in-up">
        <h2 class="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
          How It Works
        </h2>
        <div class="mt-4 w-24 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
      </div>

      <div class="relative pl-6 md:pl-10">
        <div
          class="absolute left-6 md:left-10 top-2 bottom-2 w-0.5 bg-slate-200 transform -translate-x-1/2"
        ></div>

        <div class="space-y-12">
          <div
            v-for="step in steps"
            :key="step.id"
            class="relative flex items-start fade-in-up group"
            :style="{ animationDelay: step.delay }"
          >
            <div
              class="absolute left-0 transform -translate-x-1/2 flex items-center justify-center w-10 h-10 rounded-full bg-blue-600 border-4 border-white shadow-sm group-hover:bg-blue-700 group-hover:scale-110 transition-all duration-300 z-10"
            >
              <span class="text-white font-bold text-sm">{{ step.id }}</span>
            </div>

            <div class="pl-10 md:pl-12 pt-1">
              <h3 class="text-xl font-bold text-slate-900">{{ step.title }}</h3>
              <p class="text-slate-500 mt-1">{{ step.time }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
