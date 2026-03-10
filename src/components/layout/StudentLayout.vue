<script setup>
import { GraduationCap, LogOut, LayoutDashboard, User, Bell } from 'lucide-vue-next'
</script>

<template>
  <div class="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-900">
    <header class="bg-white border-b border-slate-200 sticky top-0 z-40">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center h-16">
          <div class="flex items-center gap-3">
            <div class="bg-blue-600 p-1.5 rounded-lg shadow-sm">
              <GraduationCap class="h-5 w-5 text-white" />
            </div>
            <span class="font-bold text-lg tracking-tight hidden sm:block">AI Career Ready</span>
          </div>

          <nav class="flex items-center gap-1 sm:gap-4">
            <button
              class="flex items-center gap-2 px-4 py-2 text-sm font-medium text-blue-600 bg-blue-50 rounded-lg transition-colors"
            >
              <LayoutDashboard class="w-4 h-4" />
              <span class="hidden md:inline">Dashboard</span>
            </button>
            <button
              class="flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-500 hover:text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
            >
              <User class="w-4 h-4" />
              <span class="hidden md:inline">Profile</span>
            </button>
          </nav>

          <div class="flex items-center gap-3 border-l border-slate-200 pl-4 sm:pl-6">
            <button class="text-slate-400 hover:text-blue-600 transition-colors p-1">
              <Bell class="w-5 h-5" />
            </button>
            <button
              class="flex items-center gap-2 text-sm font-semibold text-red-500 hover:bg-red-50 px-3 py-2 rounded-lg transition-all"
            >
              <LogOut class="w-4 h-4" />
              <span class="hidden sm:inline">Logout</span>
            </button>
          </div>
        </div>
      </div>
    </header>

    <main class="flex-grow relative">
      <div
        class="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:20px_20px] opacity-30 pointer-events-none"
      ></div>
      <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <slot />
      </div>
    </main>

    <footer class="bg-white border-t border-slate-200 py-6">
      <div class="max-w-7xl mx-auto px-4 text-center text-sm text-slate-400">
        <p>
          Connected to Research Node: <span class="text-blue-500 font-mono">v1.0.4-stable</span>
        </p>
      </div>
    </footer>
  </div>
</template>
