<script setup>
import { Users, Clock, Star, BookOpen } from 'lucide-vue-next'

const modules = [
  {
    title: 'Generative AI for Professionals',
    level: 'Beginner',
    students: 1240,
    lessons: 12,
    price: 'Research Only',
    rating: 4.9,
    img: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=400',
  },
  {
    title: 'Advanced Prompt Engineering',
    level: 'Intermediate',
    students: 850,
    lessons: 15,
    price: 'Research Only',
    rating: 4.8,
    img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=400',
  },
  {
    title: 'AI Ethics & Corporate Policy',
    level: 'Advanced',
    students: 620,
    lessons: 8,
    price: 'Research Only',
    rating: 5.0,
    img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=400',
  },
]
</script>

<template>
  <section class="py-24 bg-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-end mb-16">
        <div class="max-w-xl">
          <p class="text-blue-600 font-bold uppercase tracking-widest text-xs mb-3">
            Trending Modules
          </p>
          <h2 class="text-3xl md:text-5xl font-black text-slate-900 mb-4">
            Everything You Need In One Place
          </h2>
        </div>
        <div class="hidden md:flex gap-3">
          <button class="p-3 border rounded-full hover:bg-slate-50 transition-colors">
            <BookOpen class="w-5 h-5" />
          </button>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(item, idx) in modules"
          :key="idx"
          class="bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all group"
        >
          <div class="relative p-3">
            <div class="overflow-hidden rounded-2xl h-48">
              <img
                :src="item.img"
                class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div
              class="absolute top-6 left-6 px-3 py-1 bg-blue-600 text-white text-[10px] font-black uppercase rounded-lg"
            >
              {{ item.level }}
            </div>
          </div>

          <div class="p-6">
            <div class="flex justify-between items-center mb-4">
              <span class="text-xs font-bold text-slate-400 flex items-center gap-1">
                <Users class="w-3 h-3" /> {{ item.students }} Students
              </span>
              <span class="text-xs font-bold text-slate-400 flex items-center gap-1">
                <Clock class="w-3 h-3" /> {{ item.lessons }} Lessons
              </span>
            </div>

            <h3 class="text-xl font-bold text-slate-800 mb-6 line-clamp-2 leading-tight">
              {{ item.title }}
            </h3>

            <div class="flex justify-between items-center pt-6 border-t border-slate-50">
              <div class="flex items-center gap-1 text-yellow-500">
                <Star class="w-4 h-4 fill-current" />
                <span class="text-sm font-black text-slate-700">{{ item.rating }}</span>
              </div>
              <span class="text-blue-600 font-black">{{ item.price }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
