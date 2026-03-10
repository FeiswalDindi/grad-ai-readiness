<script setup>
import { BookOpen, Rocket, Banknote } from 'lucide-vue-next'
import FeatureCard from '@/components/shared/FeatureCard.vue'

// Our data array keeps the template clean and under 200 lines
const features = [
  {
    title: 'Learn AI Skills',
    description: 'Gain practical knowledge about AI tools used by employers across industries.',
    icon: BookOpen,
    delay: '0.1s',
  },
  {
    title: 'Boost Your Career',
    description: 'Understand how to leverage AI in your job search and entry-level roles.',
    icon: Rocket,
    delay: '0.2s',
  },
  {
    title: 'Get Compensated',
    description: 'Receive payment via M-Pesa upon completing all program steps.',
    icon: Banknote,
    delay: '0.3s',
  },
]
</script>

<template>
  <section class="py-24 bg-slate-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16 fade-in-up">
        <h2 class="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
          Why Participate?
        </h2>
        <div class="mt-4 w-24 h-1.5 bg-blue-600 mx-auto rounded-full"></div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
        <FeatureCard
          v-for="(feature, index) in features"
          :key="index"
          :title="feature.title"
          :description="feature.description"
          :icon="feature.icon"
          :delay="feature.delay"
        />
      </div>
    </div>
  </section>
</template>
