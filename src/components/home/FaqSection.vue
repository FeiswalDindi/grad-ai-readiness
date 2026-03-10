<script setup>
import { ref } from 'vue'
import { ChevronDown, HelpCircle } from 'lucide-vue-next'

const activeIndex = ref(0) // First question open by default

const toggleFaq = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index
}

const faqs = [
  {
    question: 'Who can participate in this AI readiness study?',
    answer:
      'The study is open to all university students, particularly those in STEM and business fields, who want to assess and improve their practical AI skills for the modern workplace.',
  },
  {
    question: 'Is my personal data kept confidential?',
    answer:
      'Yes. All data collected—including survey responses and module progress—is anonymized and used strictly for academic research purposes under institutional privacy guidelines.',
  },
  {
    question: 'How long does it take to complete the program?',
    answer:
      'The baseline survey takes about 5 minutes, and each training module is designed to be completed in 20-30 minutes. You can progress entirely at your own pace.',
  },
  {
    question: 'Will I receive any recognition for completing the modules?',
    answer:
      'Upon successful completion of the endline assessment, participants receive a Digital Certificate of AI Readiness that can be added to their LinkedIn profile or CV.',
  },
]
</script>

<template>
  <section id="faq" class="py-24 bg-white relative overflow-hidden">
    <div class="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="text-center mb-16 fade-in-up">
        <div
          class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 font-bold text-xs uppercase tracking-wider mb-4"
        >
          <HelpCircle class="w-4 h-4" />
          Support
        </div>
        <h2 class="text-3xl md:text-4xl font-black text-slate-900 mb-4">Common Questions</h2>
        <p class="text-slate-500 font-medium">
          Everything you need to know about the research process.
        </p>
      </div>

      <div class="space-y-4">
        <div
          v-for="(faq, index) in faqs"
          :key="index"
          class="border border-slate-200 rounded-2xl overflow-hidden transition-all duration-300"
          :class="activeIndex === index ? 'bg-slate-50 border-blue-200' : 'bg-white'"
        >
          <button
            @click="toggleFaq(index)"
            class="w-full flex items-center justify-between p-6 text-left focus:outline-none"
          >
            <span class="font-bold text-slate-800">{{ faq.question }}</span>
            <ChevronDown
              class="w-5 h-5 text-slate-400 transition-transform duration-300"
              :class="{ 'rotate-180 text-blue-600': activeIndex === index }"
            />
          </button>

          <div
            class="grid transition-all duration-300 ease-in-out"
            :class="
              activeIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
            "
          >
            <div class="overflow-hidden">
              <p class="px-6 pb-6 text-slate-600 leading-relaxed font-medium">
                {{ faq.answer }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
