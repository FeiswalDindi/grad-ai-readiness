<script setup>
import Navbar from '@/components/layout/Navbar.vue'
import Footer from '@/components/layout/Footer.vue'
</script>

<template>
  <div class="min-h-screen flex flex-col bg-slate-50 font-sans text-slate-900">
    <Navbar />

    <main class="flex-grow pt-16 md:pt-20">
      <slot />
    </main>

    <Footer />
  </div>
</template>

<style>
/* This enables native smooth scrolling across the whole app */
html {
  scroll-behavior: smooth;
}
</style>
