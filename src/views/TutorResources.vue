<script setup>
import { ref } from 'vue'
import TutorLayout from '@/components/layout/TutorLayout.vue'
import {
  Plus,
  FileText,
  Video,
  MoreVertical,
  ExternalLink,
  Trash2,
  Eye,
  EyeOff,
  Search,
} from 'lucide-vue-next'

const resources = ref([
  {
    id: 1,
    title: 'Introduction to LLMs.pdf',
    type: 'PDF',
    size: '2.4 MB',
    status: 'Published',
    date: '2026-03-01',
  },
  {
    id: 2,
    title: 'Prompt Engineering Workshop',
    type: 'Video',
    size: '15:40',
    status: 'Published',
    date: '2026-03-05',
  },
  {
    id: 3,
    title: 'Ethics in AI - Draft.docx',
    type: 'DOCX',
    size: '1.1 MB',
    status: 'Draft',
    date: '2026-03-09',
  },
])

const searchQuery = ref('')
</script>

<template>
  <TutorLayout>
    <div class="fade-in-up">
      <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
        <div>
          <h1 class="text-2xl font-black text-slate-900">Resource Manager</h1>
          <p class="text-slate-500 font-medium">
            Upload and manage learning materials for your cohorts.
          </p>
        </div>
        <button
          class="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-xl font-bold shadow-lg shadow-blue-200 transition-all"
        >
          <Plus class="w-5 h-5" />
          Upload Resource
        </button>
      </div>

      <div class="bg-white p-4 rounded-2xl border border-slate-200 mb-6 flex items-center gap-3">
        <Search class="w-5 h-5 text-slate-400" />
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Search resources by title..."
          class="flex-1 bg-transparent border-none outline-none text-slate-700 font-medium placeholder:text-slate-400"
        />
      </div>

      <div class="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
        <div class="overflow-x-auto">
          <table class="w-full text-left border-collapse">
            <thead>
              <tr
                class="bg-slate-50 border-b border-slate-200 text-slate-500 text-xs uppercase tracking-widest font-bold"
              >
                <th class="px-6 py-4">Resource Name</th>
                <th class="px-6 py-4">Type</th>
                <th class="px-6 py-4">Status</th>
                <th class="px-6 py-4">Date Added</th>
                <th class="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-slate-100">
              <tr
                v-for="item in resources"
                :key="item.id"
                class="hover:bg-slate-50/50 transition-colors group"
              >
                <td class="px-6 py-4">
                  <div class="flex items-center gap-3">
                    <div
                      class="p-2 bg-slate-100 rounded-lg text-slate-500 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors"
                    >
                      <component :is="item.type === 'Video' ? Video : FileText" class="w-5 h-5" />
                    </div>
                    <span class="font-bold text-slate-700">{{ item.title }}</span>
                  </div>
                </td>
                <td class="px-6 py-4">
                  <span class="text-sm font-medium text-slate-500"
                    >{{ item.type }} <span class="text-slate-300 mx-1">•</span>
                    {{ item.size }}</span
                  >
                </td>
                <td class="px-6 py-4">
                  <span
                    class="px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider"
                    :class="
                      item.status === 'Published'
                        ? 'bg-emerald-100 text-emerald-700'
                        : 'bg-slate-100 text-slate-500'
                    "
                  >
                    {{ item.status }}
                  </span>
                </td>
                <td class="px-6 py-4 text-sm text-slate-500 font-medium">
                  {{ item.date }}
                </td>
                <td class="px-6 py-4 text-right">
                  <div class="flex justify-end gap-2">
                    <button
                      class="p-2 hover:bg-slate-100 rounded-lg text-slate-400 hover:text-blue-600 transition-colors"
                    >
                      <ExternalLink class="w-4 h-4" />
                    </button>
                    <button
                      class="p-2 hover:bg-slate-100 rounded-lg text-slate-400 hover:text-red-500 transition-colors"
                    >
                      <Trash2 class="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </TutorLayout>
</template>
