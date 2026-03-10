<script setup>
import { ref, computed } from 'vue'
import { useRouter } from 'vue-router'
import StudentLayout from '@/components/layout/StudentLayout.vue'
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-vue-next'

const router = useRouter()

const questions = [
  {
    id: 1,
    text: 'How confident are you in your ability to utilize generative AI tools (like ChatGPT or Claude) for professional tasks?',
    options: [
      'Not confident at all',
      'Slightly confident',
      'Moderately confident',
      'Very confident',
      'Extremely confident',
    ],
  },
  {
    id: 2,
    text: 'How often do you currently use AI tools to assist with your university coursework or personal projects?',
    options: [
      'Never',
      'Rarely (once a month)',
      'Sometimes (weekly)',
      'Often (daily)',
      'Always (for almost every task)',
    ],
  },
  {
    id: 3,
    text: 'Do you believe AI readiness will significantly impact your ability to secure a job after graduation?',
    options: ['Strongly disagree', 'Disagree', 'Neutral', 'Agree', 'Strongly agree'],
  },
  {
    id: 4,
    text: 'How familiar are you with the ethical guidelines, biases, and data privacy concerns associated with using enterprise AI tools?',
    options: [
      'Not familiar at all',
      'Slightly familiar',
      'Moderately familiar',
      'Very familiar',
      'Extremely familiar',
    ],
  },
  {
    id: 5,
    text: 'How prepared do you feel right now to list AI-related skills (like prompt engineering or AI workflow automation) on your resume/CV?',
    options: [
      'Not prepared at all',
      'Slightly prepared',
      'Moderately prepared',
      'Very prepared',
      'Extremely prepared',
    ],
  },
]

const currentIndex = ref(0)
const answers = ref({})
const isSubmitted = ref(false) // NEW: Tracks if the form is successfully submitted

const currentQuestion = computed(() => questions[currentIndex.value])
const isLastQuestion = computed(() => currentIndex.value === questions.length - 1)

const progressPercentage = computed(() => {
  if (isLastQuestion.value && answers.value[currentIndex.value]) return 100
  return Math.round((currentIndex.value / questions.length) * 100)
})

const handleNext = () => {
  if (isLastQuestion.value) {
    // 1. Trigger the success animation state
    isSubmitted.value = true

    // 2. Wait 2.5 seconds, then smoothly route to dashboard
    setTimeout(() => {
      router.push('/dashboard')
    }, 2500)
  } else {
    currentIndex.value++
  }
}

const handlePrev = () => {
  if (currentIndex.value > 0) {
    currentIndex.value--
  }
}
</script>

<template>
  <StudentLayout>
    <div class="max-w-3xl mx-auto">
      <div
        v-if="isSubmitted"
        class="fade-in-up flex flex-col items-center justify-center min-h-[60vh] text-center"
      >
        <div
          class="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center mb-8 shadow-lg shadow-emerald-200 animate-bounce"
        >
          <CheckCircle2 class="w-12 h-12 text-emerald-600" />
        </div>
        <h2 class="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
          Survey Submitted!
        </h2>
        <p class="text-lg text-slate-500 max-w-md mx-auto">
          Thank you for completing the baseline assessment. Redirecting you back to your
          dashboard...
        </p>
      </div>

      <div v-else class="fade-in-up">
        <div class="mb-8">
          <div class="flex justify-between items-end mb-4">
            <div>
              <h1 class="text-2xl font-bold text-slate-900">Baseline Survey</h1>
              <p class="text-slate-500 mt-1">
                Question {{ currentIndex + 1 }} of {{ questions.length }}
              </p>
            </div>
            <span class="text-sm font-bold text-blue-600">{{ progressPercentage }}%</span>
          </div>
          <div class="w-full h-2.5 bg-slate-200 rounded-full overflow-hidden">
            <div
              class="h-full bg-blue-600 rounded-full transition-all duration-500 ease-out"
              :style="{ width: `${progressPercentage}%` }"
            ></div>
          </div>
        </div>

        <div
          class="bg-white rounded-3xl p-8 md:p-10 border border-slate-200 shadow-sm mb-8 min-h-[400px]"
        >
          <h2
            class="text-xl md:text-2xl font-semibold text-slate-800 mb-8 leading-relaxed transition-all"
          >
            {{ currentQuestion.text }}
          </h2>
          <div class="space-y-4">
            <label
              v-for="(option, idx) in currentQuestion.options"
              :key="idx"
              class="flex items-center p-5 rounded-2xl border-2 cursor-pointer transition-all duration-200"
              :class="
                answers[currentIndex] === option
                  ? 'border-blue-600 bg-blue-50'
                  : 'border-slate-100 hover:border-blue-200 hover:bg-slate-50'
              "
            >
              <input
                type="radio"
                :name="'question-' + currentIndex"
                :value="option"
                v-model="answers[currentIndex]"
                class="w-5 h-5 text-blue-600 border-slate-300 focus:ring-blue-600"
              />
              <span class="ml-4 text-slate-700 font-medium text-lg">{{ option }}</span>
            </label>
          </div>
        </div>

        <div class="flex justify-between items-center">
          <button
            @click="handlePrev"
            :disabled="currentIndex === 0"
            class="flex items-center gap-2 px-6 py-3 font-medium transition-colors"
            :class="
              currentIndex === 0
                ? 'text-slate-300 cursor-not-allowed'
                : 'text-slate-500 hover:text-slate-800'
            "
          >
            <ArrowLeft class="w-5 h-5" /> Previous
          </button>

          <button
            @click="handleNext"
            :disabled="!answers[currentIndex]"
            class="flex items-center gap-2 text-white px-8 py-3 rounded-xl font-bold transition-all shadow-md disabled:cursor-not-allowed"
            :class="
              isLastQuestion
                ? 'bg-emerald-600 hover:bg-emerald-700 disabled:bg-slate-300'
                : 'bg-blue-600 hover:bg-blue-700 disabled:bg-slate-300'
            "
          >
            {{ isLastQuestion ? 'Submit Survey' : 'Next Question' }}
            <CheckCircle2 v-if="isLastQuestion" class="w-5 h-5" />
            <ArrowRight v-else class="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  </StudentLayout>
</template>
