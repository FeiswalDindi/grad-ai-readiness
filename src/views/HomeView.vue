<script setup>
import PublicLayout from '@/components/layout/PublicLayout.vue'
import HeroSection from '@/components/home/HeroSection.vue'
import FeatureGrid from '@/components/home/FeatureGrid.vue'
import TimelineSteps from '@/components/home/TimelineSteps.vue'
import FaqSection from '@/components/home/FaqSection.vue' // ADD THIS
import CtaBanner from '@/components/home/CtaBanner.vue'
</script>

<template>
  <PublicLayout>
    <HeroSection />
    <FeatureGrid id="modules" />
    <TimelineSteps />
    <FaqSection /> <CtaBanner />
  </PublicLayout>
</template>
