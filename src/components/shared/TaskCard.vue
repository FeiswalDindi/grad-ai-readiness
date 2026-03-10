<script setup>
import { CheckCircle2, Circle, Lock, ArrowRight } from 'lucide-vue-next'
import { useRouter } from 'vue-router'

const router = useRouter()

const props = defineProps({
  title: { type: String, required: true },
  status: { type: String, default: 'locked' }, // 'completed', 'current', 'locked'
  duration: { type: String, required: true },
  index: { type: Number, required: true },
  link: { type: String, default: '' }, // We added this!
})

// Function to handle the button click
const handleAction = () => {
  // Only navigate if the card isn't locked and a link exists
  if (props.status !== 'locked' && props.link) {
    router.push(props.link)
  }
}
</script>

<template>
  <div
    class="relative group bg-white rounded-3xl p-6 border transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1"
    :class="[
      status === 'current' ? 'border-blue-500 ring-4 ring-blue-50' : 'border-slate-100',
      status === 'locked' ? 'opacity-75 grayscale-[0.5]' : 'opacity-100',
    ]"
  >
    <div class="flex justify-between items-start mb-6">
      <div
        class="p-3 rounded-2xl"
        :class="
          status === 'completed'
            ? 'bg-emerald-100 text-emerald-600'
            : status === 'current'
              ? 'bg-blue-100 text-blue-600'
              : 'bg-slate-100 text-slate-400'
        "
      >
        <CheckCircle2 v-if="status === 'completed'" class="w-6 h-6" />
        <Circle v-else-if="status === 'current'" class="w-6 h-6" />
        <Lock v-else class="w-6 h-6" />
      </div>
      <span class="text-xs font-bold uppercase tracking-wider text-slate-400"
        >Step 0{{ index + 1 }}</span
      >
    </div>

    <h3 class="text-xl font-bold text-slate-900 mb-1">{{ title }}</h3>
    <p class="text-sm text-slate-500 mb-6">{{ duration }}</p>

    <button
      @click="handleAction"
      :disabled="status === 'locked'"
      class="w-full py-3 rounded-xl font-bold flex items-center justify-center gap-2 transition-all"
      :class="
        status === 'completed'
          ? 'bg-emerald-50 text-emerald-700 hover:bg-emerald-100'
          : status === 'current'
            ? 'bg-blue-600 text-white shadow-lg shadow-blue-200 hover:bg-blue-700'
            : 'bg-slate-100 text-slate-400 cursor-not-allowed'
      "
    >
      {{ status === 'completed' ? 'Review' : status === 'current' ? 'Start Now' : 'Locked' }}
      <ArrowRight v-if="status !== 'locked'" class="w-4 h-4" />
    </button>
  </div>
</template>
