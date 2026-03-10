<script setup>
// Mock data representing engagement points over 7 days
const dataPoints = [20, 45, 30, 65, 55, 85, 70]
const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

// Logic to calculate SVG path points
const chartWidth = 500
const chartHeight = 150
const spacing = chartWidth / (dataPoints.length - 1)

const points = dataPoints
  .map((val, i) => {
    const x = i * spacing
    const y = chartHeight - (val / 100) * chartHeight
    return `${x},${y}`
  })
  .join(' ')

const areaPath = `0,${chartHeight} ${points} ${chartWidth},${chartHeight}`
</script>

<template>
  <div class="w-full">
    <div class="flex justify-between items-center mb-6">
      <h3 class="font-bold text-slate-800">Engagement Trend (Last 7 Days)</h3>
      <div class="flex gap-4">
        <div class="flex items-center gap-1.5 text-xs font-bold text-slate-400">
          <div class="w-3 h-3 bg-blue-500 rounded-full"></div>
          Progress
        </div>
      </div>
    </div>

    <div class="relative h-[160px] w-full">
      <svg :viewBox="`0 0 ${chartWidth} ${chartHeight}`" class="w-full h-full preserve-3d">
        <defs>
          <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stop-color="#3b82f6" stop-opacity="0.2" />
            <stop offset="100%" stop-color="#3b82f6" stop-opacity="0" />
          </linearGradient>
        </defs>

        <line
          v-for="i in 4"
          :key="i"
          x1="0"
          :y1="(chartHeight / 4) * i"
          :x2="chartWidth"
          :y2="(chartHeight / 4) * i"
          stroke="#f1f5f9"
          stroke-width="1"
        />

        <polyline :points="areaPath" fill="url(#chartGradient)" />

        <polyline
          :points="points"
          fill="none"
          stroke="#3b82f6"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
          class="drop-shadow-sm"
        />

        <circle
          v-for="(val, i) in dataPoints"
          :key="i"
          :cx="i * spacing"
          :cy="chartHeight - (val / 100) * chartHeight"
          r="4"
          fill="white"
          stroke="#3b82f6"
          stroke-width="2"
          class="hover:r-6 transition-all cursor-pointer"
        />
      </svg>
    </div>

    <div class="flex justify-between mt-4 px-1">
      <span
        v-for="day in days"
        :key="day"
        class="text-[10px] font-black text-slate-400 uppercase tracking-widest"
      >
        {{ day }}
      </span>
    </div>
  </div>
</template>
