<script setup>
import { ref, computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import {
  GraduationCap,
  LayoutDashboard,
  Users,
  BookOpen,
  Settings,
  LogOut,
  ChevronLeft,
  ChevronRight,
  Menu,
  X,
} from 'lucide-vue-next'

const router = useRouter()
const route = useRoute() // Access the current URL path

const isSidebarCollapsed = ref(false)
const isMobileMenuOpen = ref(false)

const navItems = [
  { name: 'Overview', icon: LayoutDashboard, path: '/tutor/dashboard' },
  { name: 'Students', icon: Users, path: '/tutor/students' },
  { name: 'Resources', icon: BookOpen, path: '/tutor/resources' },
  { name: 'Settings', icon: Settings, path: '/tutor/settings' },
]

// Navigation actions
const toggleMobile = () => (isMobileMenuOpen.value = !isMobileMenuOpen.value)
const handleLogout = () => router.push('/login')

const navigateTo = (path) => {
  isMobileMenuOpen.value = false // Close mobile menu on click
  router.push(path)
}

// Check if a link is active for styling
const isActive = (path) => route.path === path
</script>

<template>
  <div class="min-h-screen bg-slate-50 flex font-sans text-slate-900 overflow-x-hidden">
    <div
      v-if="isMobileMenuOpen"
      @click="toggleMobile"
      class="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[60] lg:hidden"
    ></div>

    <aside
      class="fixed inset-y-0 left-0 bg-slate-900 text-slate-300 flex flex-col transition-all duration-300 ease-in-out z-[70] lg:sticky lg:h-screen"
      :class="[
        isSidebarCollapsed ? 'lg:w-20' : 'lg:w-64',
        isMobileMenuOpen ? 'translate-x-0 w-64 shadow-2xl' : '-translate-x-full lg:translate-x-0',
      ]"
    >
      <div class="p-6 flex items-center justify-between border-b border-slate-800 mb-6">
        <div class="flex items-center gap-3">
          <div class="bg-blue-600 p-2 rounded-xl shrink-0">
            <GraduationCap class="h-6 w-6 text-white" />
          </div>
          <span v-if="!isSidebarCollapsed || isMobileMenuOpen" class="font-bold text-xl text-white"
            >Instructor</span
          >
        </div>
        <button
          @click="toggleMobile"
          class="lg:hidden text-slate-400 hover:text-white transition-colors"
        >
          <X class="w-6 h-6" />
        </button>
      </div>

      <nav class="flex-1 px-3 space-y-1">
        <button
          v-for="item in navItems"
          :key="item.name"
          @click="navigateTo(item.path)"
          class="w-full flex items-center gap-3 p-3 rounded-xl transition-all group relative"
          :class="
            isActive(item.path)
              ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/20'
              : 'hover:bg-white/10 hover:text-white'
          "
        >
          <component
            :is="item.icon"
            class="w-6 h-6 shrink-0"
            :class="isActive(item.path) ? 'text-white' : 'group-hover:text-blue-400'"
          />
          <span v-if="!isSidebarCollapsed || isMobileMenuOpen" class="font-semibold">{{
            item.name
          }}</span>

          <div
            v-if="isActive(item.path) && isSidebarCollapsed"
            class="absolute left-0 w-1 h-6 bg-white rounded-r-full"
          ></div>
        </button>
      </nav>

      <div class="p-4 border-t border-slate-800 space-y-2">
        <button
          @click="isSidebarCollapsed = !isSidebarCollapsed"
          class="hidden lg:flex w-full items-center gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors text-slate-400 hover:text-white"
        >
          <component :is="isSidebarCollapsed ? ChevronRight : ChevronLeft" class="w-6 h-6" />
          <span v-if="!isSidebarCollapsed" class="text-sm font-medium">Collapse</span>
        </button>

        <button
          @click="handleLogout"
          class="w-full flex items-center gap-3 p-3 rounded-xl text-red-400 hover:bg-red-500/10 transition-all font-semibold"
        >
          <LogOut class="w-6 h-6" />
          <span v-if="!isSidebarCollapsed || isMobileMenuOpen">Logout</span>
        </button>
      </div>
    </aside>

    <main class="flex-1 flex flex-col min-w-0 h-screen">
      <header
        class="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-4 sm:px-8 sticky top-0 z-40 shrink-0"
      >
        <div class="flex items-center gap-4">
          <button
            @click="toggleMobile"
            class="lg:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
          >
            <Menu class="w-6 h-6" />
          </button>
          <h2 class="font-bold text-sm sm:text-lg text-slate-700 truncate capitalize">
            {{ route.name?.toString().replace('-', ' ') || 'Command Center' }}
          </h2>
        </div>

        <div class="flex items-center gap-3">
          <div class="text-right hidden sm:block">
            <p class="text-sm font-bold text-slate-900 leading-none">Dr. Feiswal Dindi</p>
            <p class="text-[10px] text-blue-600 font-bold uppercase tracking-wider mt-1.5">
              Lead Researcher
            </p>
          </div>
          <div
            class="w-9 h-9 sm:w-10 sm:h-10 bg-slate-200 rounded-full border-2 border-white shadow-sm overflow-hidden shrink-0"
          >
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Feiswal" alt="avatar" />
          </div>
        </div>
      </header>

      <div class="flex-1 p-4 sm:p-8 overflow-y-auto">
        <slot />
      </div>
    </main>
  </div>
</template>
