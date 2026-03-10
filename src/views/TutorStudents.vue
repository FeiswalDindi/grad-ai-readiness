<script setup>
import { ref } from 'vue'
import TutorLayout from '@/components/layout/TutorLayout.vue'
import { Search, Filter, Download, Mail, MoreHorizontal } from 'lucide-vue-next'

const students = ref([
  {
    id: 1,
    name: 'Alice Johnson',
    email: 'alice.j@uni.edu',
    progress: 85,
    survey: 'Completed',
    status: 'Active',
  },
  {
    id: 2,
    name: 'Bob Smith',
    email: 'b.smith@uni.edu',
    progress: 40,
    survey: 'Pending',
    status: 'At Risk',
  },
  {
    id: 3,
    name: 'Charlie Davis',
    email: 'charlie.d@uni.edu',
    progress: 100,
    survey: 'Completed',
    status: 'Completed',
  },
  {
    id: 4,
    name: 'Diana Prince',
    email: 'diana.p@uni.edu',
    progress: 10,
    survey: 'Not Started',
    status: 'Inactive',
  },
])
</script>

<template>
  <TutorLayout>
    <div class="fade-in-up">
      <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h1 class="text-2xl font-black text-slate-900">Student Management</h1>
          <p class="text-slate-500 font-medium">
            Monitor engagement and AI readiness scores for your current cohort.
          </p>
        </div>
        <button
          class="flex items-center gap-2 bg-slate-900 text-white px-5 py-2.5 rounded-xl font-bold hover:bg-slate-800 transition-all"
        >
          <Download class="w-5 h-5" />
          Export Data (CSV)
        </button>
      </div>

      <div class="flex flex-col md:flex-row gap-4 mb-6">
        <div
          class="flex-1 bg-white px-4 py-3 rounded-2xl border border-slate-200 flex items-center gap-3"
        >
          <Search class="w-5 h-5 text-slate-400" />
          <input
            type="text"
            placeholder="Search by name or email..."
            class="bg-transparent border-none outline-none w-full font-medium"
          />
        </div>
        <button
          class="flex items-center gap-2 bg-white px-6 py-3 rounded-2xl border border-slate-200 font-bold text-slate-600 hover:bg-slate-50 transition-all"
        >
          <Filter class="w-5 h-5" />
          Filters
        </button>
      </div>

      <div class="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
        <div class="overflow-x-auto">
          <table class="w-full text-left">
            <thead
              class="bg-slate-50 border-b border-slate-200 text-slate-500 text-[10px] uppercase tracking-widest font-black"
            >
              <tr>
                <th class="px-6 py-4">Student</th>
                <th class="px-6 py-4">Module Progress</th>
                <th class="px-6 py-4">Survey Status</th>
                <th class="px-6 py-4">Standing</th>
                <th class="px-6 py-4"></th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100">
              <tr
                v-for="student in students"
                :key="student.id"
                class="hover:bg-slate-50/50 transition-colors"
              >
                <td class="px-6 py-4">
                  <div class="flex flex-col">
                    <span class="font-bold text-slate-900">{{ student.name }}</span>
                    <span class="text-xs text-slate-500">{{ student.email }}</span>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <div class="flex items-center gap-3">
                    <div class="flex-1 h-2 bg-slate-100 rounded-full overflow-hidden max-w-[100px]">
                      <div
                        class="h-full bg-blue-600 rounded-full"
                        :style="{ width: student.progress + '%' }"
                      ></div>
                    </div>
                    <span class="text-xs font-bold text-slate-700">{{ student.progress }}%</span>
                  </div>
                </td>
                <td
                  class="px-6 py-4 text-sm font-medium"
                  :class="student.survey === 'Completed' ? 'text-emerald-600' : 'text-slate-400'"
                >
                  {{ student.survey }}
                </td>
                <td class="px-6 py-4">
                  <span
                    class="px-2.5 py-1 rounded-lg text-[10px] font-black uppercase tracking-tight"
                    :class="{
                      'bg-emerald-100 text-emerald-700': student.status === 'Completed',
                      'bg-blue-100 text-blue-700': student.status === 'Active',
                      'bg-orange-100 text-orange-700': student.status === 'At Risk',
                      'bg-slate-100 text-slate-500': student.status === 'Inactive',
                    }"
                  >
                    {{ student.status }}
                  </span>
                </td>
                <td class="px-6 py-4 text-right">
                  <button class="p-2 hover:bg-slate-100 rounded-lg text-slate-400">
                    <Mail class="w-4 h-4" />
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </TutorLayout>
</template>
