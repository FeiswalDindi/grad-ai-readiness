<script setup>
defineProps({
  title: { type: String, required: true },
  description: { type: String, required: true },
  icon: { type: Object, required: true },
  delay: { type: String, default: '0s' },
})
</script>

<template>
  <div
    class="bg-white rounded-2xl p-8 shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 fade-in-up flex flex-col items-center text-center group"
    :style="{ animationDelay: delay }"
  >
    <div
      class="bg-blue-50 text-blue-600 p-5 rounded-full mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300"
    >
      <component :is="icon" class="w-8 h-8" />
    </div>

    <h3 class="text-xl font-bold text-slate-900 mb-3">{{ title }}</h3>
    <p class="text-slate-600 leading-relaxed">{{ description }}</p>
  </div>
</template>
