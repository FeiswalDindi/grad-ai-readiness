<script setup>
import TutorLayout from '@/components/layout/TutorLayout.vue'
import AnalyticsChart from '@/components/tutor/AnalyticsChart.vue' // ADD THIS
import { Users, CheckCircle2, BookOpen, TrendingUp, Calendar } from 'lucide-vue-next'

const stats = [
  {
    label: 'Total Students',
    value: '1,248',
    icon: Users,
    color: 'text-blue-600',
    bg: 'bg-blue-100',
  },
  {
    label: 'Completion Rate',
    value: '64%',
    icon: CheckCircle2,
    color: 'text-emerald-600',
    bg: 'bg-emerald-100',
  },
  {
    label: 'Active Modules',
    value: '12',
    icon: BookOpen,
    color: 'text-orange-600',
    bg: 'bg-orange-100',
  },
  {
    label: 'Growth',
    value: '+12.5%',
    icon: TrendingUp,
    color: 'text-purple-600',
    bg: 'bg-purple-100',
  },
]
</script>

<template>
  <TutorLayout>
    <div class="fade-in-up">
      <div class="flex justify-between items-end mb-8">
        <div>
          <h1 class="text-2xl font-black text-slate-900">Program Overview</h1>
          <p class="text-slate-500 font-medium">
            Real-time engagement metrics for your research cohort.
          </p>
        </div>
        <div
          class="hidden sm:flex items-center gap-2 px-4 py-2 bg-white border rounded-xl text-sm font-bold text-slate-600 shadow-sm"
        >
          <Calendar class="w-4 h-4 text-blue-600" />
          March 2026
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        <div
          v-for="stat in stats"
          :key="stat.label"
          class="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm flex items-center gap-4 hover:border-blue-200 transition-colors"
        >
          <div :class="['p-3 rounded-2xl', stat.bg, stat.color]">
            <component :is="stat.icon" class="w-6 h-6" />
          </div>
          <div>
            <p class="text-[10px] font-black text-slate-400 uppercase tracking-widest">
              {{ stat.label }}
            </p>
            <p class="text-2xl font-black text-slate-900">{{ stat.value }}</p>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div class="lg:col-span-2 bg-white rounded-3xl border border-slate-200 p-8 shadow-sm">
          <AnalyticsChart />
        </div>

        <div class="bg-slate-900 rounded-3xl p-8 text-white relative overflow-hidden">
          <div class="absolute top-0 right-0 p-4 opacity-10">
            <GraduationCap class="w-32 h-32" />
          </div>
          <h3 class="text-xl font-bold mb-4 relative z-10">Research Insight</h3>
          <p class="text-slate-400 text-sm leading-relaxed mb-6 relative z-10">
            Current trends show a 15% increase in module engagement following the latest prompt
            engineering workshop.
          </p>
          <button
            class="w-full py-3 bg-blue-600 hover:bg-blue-500 rounded-xl font-bold transition-all relative z-10"
          >
            View Full Report
          </button>
        </div>
      </div>
    </div>
  </TutorLayout>
</template>
