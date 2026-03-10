<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import StudentLayout from '@/components/layout/StudentLayout.vue'
import {
  PlayCircle,
  CheckCircle2,
  Circle,
  Lock,
  ArrowRight,
  FileText,
  Download,
} from 'lucide-vue-next'

const router = useRouter()
const activeLesson = ref(1)

const lessons = [
  { id: 1, title: 'Introduction to AI in the Workplace', duration: '15:00', status: 'current' },
  { id: 2, title: 'Mastering Prompt Engineering', duration: '22:30', status: 'locked' },
  { id: 3, title: 'Ethics and Data Privacy', duration: '10:15', status: 'locked' },
  { id: 4, title: 'Advanced AI Workflows', duration: '12:45', status: 'locked' },
]

const finishModule = () => {
  router.push('/dashboard')
}
</script>

<template>
  <StudentLayout>
    <div class="max-w-7xl mx-auto fade-in-up">
      <div class="mb-8">
        <h1 class="text-2xl md:text-3xl font-extrabold text-slate-900">AI Training Module</h1>
        <p class="text-slate-500 mt-2 font-medium">
          Complete all video lessons to unlock the Endline Survey.
        </p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div class="lg:col-span-2 space-y-6">
          <div
            class="relative w-full aspect-video bg-slate-900 rounded-3xl overflow-hidden shadow-2xl group flex items-center justify-center border border-slate-800"
          >
            <div
              class="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent z-10"
            ></div>

            <button
              class="z-20 p-4 bg-white/10 backdrop-blur-md rounded-full text-white hover:bg-blue-600 hover:scale-110 transition-all duration-300"
            >
              <PlayCircle class="w-12 h-12" />
            </button>

            <div class="absolute bottom-0 left-0 right-0 p-6 z-20 flex justify-between items-end">
              <div>
                <span
                  class="px-3 py-1 bg-blue-600 text-white text-xs font-bold rounded-full mb-3 inline-block"
                  >Lesson 0{{ activeLesson }}</span
                >
                <h2 class="text-xl font-bold text-white">{{ lessons[activeLesson - 1].title }}</h2>
              </div>
              <span class="text-slate-300 text-sm font-medium"
                >00:00 / {{ lessons[activeLesson - 1].duration }}</span
              >
            </div>
          </div>

          <div class="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
            <h3 class="text-lg font-bold text-slate-900 mb-4">About this lesson</h3>
            <p class="text-slate-600 leading-relaxed mb-6">
              In this foundational lesson, you will learn how generative AI is actively reshaping
              modern industries. We will cover the basic mechanics of Large Language Models (LLMs)
              and how to securely integrate them into your daily professional tasks without
              compromising university or corporate data.
            </p>

            <button
              class="flex items-center gap-2 text-blue-600 font-bold hover:text-blue-700 transition-colors"
            >
              <Download class="w-5 h-5" />
              Download Lesson Slides (PDF)
            </button>
          </div>
        </div>

        <div class="space-y-6">
          <div class="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
            <div class="flex items-center justify-between mb-6">
              <h3 class="font-bold text-slate-900">Course Content</h3>
              <span class="text-sm font-bold text-blue-600">0/4 Completed</span>
            </div>

            <div class="space-y-3">
              <div
                v-for="lesson in lessons"
                :key="lesson.id"
                class="flex items-center p-4 rounded-2xl transition-all duration-200"
                :class="
                  lesson.status === 'current'
                    ? 'bg-blue-50 border-2 border-blue-100'
                    : 'bg-slate-50 border border-slate-100 opacity-70'
                "
              >
                <div class="mr-4">
                  <CheckCircle2
                    v-if="lesson.status === 'completed'"
                    class="w-5 h-5 text-emerald-500"
                  />
                  <PlayCircle
                    v-else-if="lesson.status === 'current'"
                    class="w-5 h-5 text-blue-600"
                  />
                  <Lock v-else class="w-5 h-5 text-slate-400" />
                </div>

                <div class="flex-1">
                  <h4
                    class="text-sm font-bold text-slate-800"
                    :class="lesson.status === 'locked' && 'text-slate-500'"
                  >
                    {{ lesson.title }}
                  </h4>
                  <div class="flex items-center gap-1 text-xs text-slate-500 mt-1">
                    <FileText class="w-3 h-3" />
                    <span>{{ lesson.duration }}</span>
                  </div>
                </div>
              </div>
            </div>

            <button
              @click="finishModule"
              class="w-full mt-8 flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white py-3.5 rounded-xl font-bold transition-all shadow-md"
            >
              Back to Dashboard
              <ArrowRight class="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </StudentLayout>
</template>
