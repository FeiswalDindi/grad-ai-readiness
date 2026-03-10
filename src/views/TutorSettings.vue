<script setup>
import { ref } from 'vue'
import TutorLayout from '@/components/layout/TutorLayout.vue'
import {
  Save,
  User,
  Bell,
  Shield,
  BadgeCheck,
  Mail,
  CheckCircle2,
  Loader2,
  Link,
  Globe,
  Smartphone,
  Lock,
  History,
  AlertCircle,
} from 'lucide-vue-next'

// Comprehensive Researcher State
const profile = ref({
  name: 'Feiswal Dindi Onyango',
  role: 'Lead Researcher & Incubation Chairperson',
  university: 'KCA University',
  email: 'feiswal.dindi@kca.ac.ke',
  orcid: '0000-0002-1234-5678',
  researchGate: 'https://researchgate.net/profile/Feiswal_Onyango',
  bio: 'Focusing on AI Career Readiness and student engagement in Applied Computing at the KCAU Incubation Center.',
})

const notifications = ref({
  enrollment: true,
  surveyCompletion: true,
  dailySummary: false,
  systemUpdates: true,
})

// Feedback Engine
const isSaving = ref(false)
const feedback = ref({ show: false, message: '', type: 'success' })

const triggerFeedback = (msg, type = 'success') => {
  feedback.value = { show: true, message: msg, type }
  setTimeout(() => (feedback.value.show = false), 5000)
}

const handleSave = () => {
  isSaving.value = true
  setTimeout(() => {
    isSaving.value = false
    triggerFeedback('All researcher settings have been synchronized successfully.')
  }, 1200)
}
</script>

<template>
  <TutorLayout>
    <div class="fade-in-up max-w-5xl mx-auto pb-20">
      <div class="sticky top-20 z-30 h-16 mb-6">
        <transition name="slide-fade">
          <div
            v-if="feedback.show"
            :class="
              feedback.type === 'success'
                ? 'bg-emerald-50 border-emerald-200 text-emerald-800'
                : 'bg-red-50 border-red-200 text-red-800'
            "
            class="border rounded-2xl p-4 flex items-center justify-between shadow-lg backdrop-blur-md"
          >
            <div class="flex items-center gap-3">
              <CheckCircle2 v-if="feedback.type === 'success'" class="w-5 h-5 text-emerald-500" />
              <AlertCircle v-else class="w-5 h-5 text-red-500" />
              <span class="font-bold text-sm">{{ feedback.message }}</span>
            </div>
            <button
              @click="feedback.show = false"
              class="text-[10px] font-black uppercase tracking-tighter opacity-50 hover:opacity-100"
            >
              Dismiss
            </button>
          </div>
        </transition>
      </div>

      <div class="flex flex-col lg:flex-row gap-8">
        <div class="flex-1 space-y-8">
          <div class="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
            <div
              class="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50/50"
            >
              <div class="flex items-center gap-3">
                <User class="w-5 h-5 text-blue-600" />
                <h2 class="font-bold text-slate-800">Academic Profile</h2>
              </div>
              <span
                class="text-[10px] font-black text-blue-600 bg-blue-50 px-2 py-1 rounded-md uppercase"
                >Lead Faculty</span
              >
            </div>
            <div class="p-8 space-y-6">
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="space-y-2">
                  <label class="text-xs font-black text-slate-400 uppercase tracking-widest"
                    >Full Name</label
                  >
                  <input
                    v-model="profile.name"
                    type="text"
                    class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-4 focus:ring-blue-100 outline-none transition-all font-bold"
                  />
                </div>
                <div class="space-y-2">
                  <label class="text-xs font-black text-slate-400 uppercase tracking-widest"
                    >Institutional Email</label
                  >
                  <input
                    v-model="profile.email"
                    type="email"
                    class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-4 focus:ring-blue-100 outline-none transition-all font-medium"
                  />
                </div>
              </div>
              <div class="space-y-2">
                <label class="text-xs font-black text-slate-400 uppercase tracking-widest"
                  >Researcher Biography</label
                >
                <textarea
                  v-model="profile.bio"
                  rows="4"
                  class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-4 focus:ring-blue-100 outline-none transition-all resize-none text-sm leading-relaxed"
                ></textarea>
              </div>
            </div>
          </div>

          <div class="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
            <div class="p-6 border-b border-slate-100 flex items-center gap-3">
              <Link class="w-5 h-5 text-indigo-600" />
              <h2 class="font-bold text-slate-800">External Academic Identifiers</h2>
            </div>
            <div class="p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="space-y-2">
                <label
                  class="text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-2"
                >
                  <Globe class="w-3 h-3" /> ORCID iD
                </label>
                <input
                  v-model="profile.orcid"
                  type="text"
                  placeholder="0000-0000-0000-0000"
                  class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-4 focus:ring-indigo-100 outline-none transition-all text-sm"
                />
              </div>
              <div class="space-y-2">
                <label
                  class="text-xs font-black text-slate-400 uppercase tracking-widest flex items-center gap-2"
                >
                  ResearchGate
                </label>
                <input
                  v-model="profile.researchGate"
                  type="text"
                  class="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:ring-4 focus:ring-indigo-100 outline-none transition-all text-sm"
                />
              </div>
            </div>
          </div>
        </div>

        <div class="lg:w-80 space-y-6">
          <div class="bg-slate-900 rounded-3xl p-6 text-white shadow-xl">
            <div class="flex items-center gap-3 mb-6">
              <Shield class="w-5 h-5 text-blue-400" />
              <h3 class="font-bold">Security Status</h3>
            </div>
            <div class="space-y-4">
              <div class="flex justify-between items-center text-xs">
                <span class="text-slate-400">Two-Factor Auth</span>
                <span class="bg-red-500/20 text-red-400 px-2 py-0.5 rounded font-black"
                  >DISABLED</span
                >
              </div>
              <div class="flex justify-between items-center text-xs">
                <span class="text-slate-400">Last Login</span>
                <span class="text-slate-100">2 mins ago</span>
              </div>
              <button
                class="w-full py-3 bg-white/10 hover:bg-white/20 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2"
              >
                <Lock class="w-3 h-3" /> Update Credentials
              </button>
            </div>
          </div>

          <div class="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm">
            <div class="flex items-center gap-3 mb-6">
              <Bell class="w-5 h-5 text-orange-500" />
              <h3 class="font-bold text-slate-800 text-sm">Alert Matrix</h3>
            </div>
            <div class="space-y-4">
              <label
                v-for="(val, key) in notifications"
                :key="key"
                class="flex items-center justify-between cursor-pointer group"
              >
                <span
                  class="text-xs font-bold text-slate-500 group-hover:text-slate-900 capitalize"
                  >{{ key.replace(/([A-Z])/g, ' $1') }}</span
                >
                <input
                  type="checkbox"
                  v-model="notifications[key]"
                  class="w-4 h-4 rounded border-slate-300 text-blue-600 focus:ring-blue-500 transition-all"
                />
              </label>
            </div>
          </div>

          <div class="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm">
            <div class="flex items-center gap-3 mb-4">
              <Smartphone class="w-4 h-4 text-slate-400" />
              <h3 class="font-bold text-slate-800 text-sm">Active Sessions</h3>
            </div>
            <div class="flex items-center gap-3 p-3 bg-blue-50 rounded-2xl border border-blue-100">
              <div class="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
              <div class="text-[10px]">
                <p class="font-black text-blue-900">Chrome on MacOS (Current)</p>
                <p class="text-blue-600 opacity-70">Nairobi, Kenya • 192.168.1.1</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="fixed bottom-8 right-8 lg:right-12 z-40">
        <button
          @click="handleSave"
          :disabled="isSaving"
          class="flex items-center gap-3 bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-2xl font-black shadow-2xl shadow-blue-900/40 transition-all active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed group"
        >
          <Loader2 v-if="isSaving" class="w-6 h-6 animate-spin" />
          <Save v-else class="w-6 h-6 group-hover:rotate-12 transition-transform" />
          {{ isSaving ? 'Synchronizing Data...' : 'Commit All Changes' }}
        </button>
      </div>
    </div>
  </TutorLayout>
</template>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.4s ease-out;
}
.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}
</style>
