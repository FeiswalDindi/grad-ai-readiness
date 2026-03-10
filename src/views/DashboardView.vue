<script setup>
import StudentLayout from '@/components/layout/StudentLayout.vue'
import TaskCard from '@/components/shared/TaskCard.vue'

// We added the 'link' property to the first two tasks!
const tasks = [
  { title: 'Baseline Survey', duration: '10 mins', status: 'completed', link: '/survey' },
  { title: 'AI Training Module', duration: '60 mins', status: 'current', link: '/module' },
  { title: 'Endline Survey', duration: '10 mins', status: 'locked', link: '' },
  { title: '6-Month Follow-up', duration: '5 mins', status: 'locked', link: '' },
  { title: '12-Month Follow-up', duration: '5 mins', status: 'locked', link: '' },
]
</script>

<template>
  <StudentLayout>
    <div class="fade-in-up">
      <div class="mb-10">
        <h1 class="text-3xl font-extrabold text-slate-900">Welcome back, Student!</h1>
        <p class="text-slate-500 mt-1 font-medium">
          You've completed 20% of the program. Keep going!
        </p>
      </div>

      <div class="bg-white rounded-3xl p-6 mb-12 border border-slate-100 shadow-sm">
        <div class="flex justify-between items-end mb-4">
          <span class="text-sm font-bold text-slate-700">Overall Completion</span>
          <span class="text-2xl font-black text-blue-600">20%</span>
        </div>
        <div class="w-full h-4 bg-slate-100 rounded-full overflow-hidden">
          <div
            class="h-full bg-gradient-to-r from-blue-600 to-teal-400 rounded-full transition-all duration-1000"
            style="width: 20%"
          ></div>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <TaskCard
          v-for="(task, index) in tasks"
          :key="index"
          :index="index"
          :title="task.title"
          :duration="task.duration"
          :status="task.status"
          :link="task.link"
        />
      </div>
    </div>
  </StudentLayout>
</template>
