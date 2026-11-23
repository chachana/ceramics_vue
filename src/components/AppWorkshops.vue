<script setup>
import { ref, computed } from 'vue'
import w1 from '../assets/images/workshop-1.jpg'
import w2 from '../assets/images/workshop-2.jpg'
import w3 from '../assets/images/workshop-3.jpg'

const showAll = ref(false)

const allWorkshops = [
  { img: w1, name: '«Первое касание»', desc: 'Для новичков. Знакомство с глиной и лепка руками.', price: '2 часа · 120 BYN' },
  { img: w2, name: '«Гончарный круг»', desc: 'Попробуешь работать за кругом с мастером.', price: '3 часа · 180 BYN' },
  { img: w3, name: '«Парный»', desc: 'Для пар и свиданий. Два изделия за занятие.', price: '2,5 часа · 220 BYN' },
  { img: w1, name: '«Детский»', desc: 'Для детей от 6 лет. Развиваем моторику и фантазию.', price: '1,5 часа · 80 BYN' },
  { img: w2, name: '«Корпоратив»', desc: 'Тимбилдинг для коллег от 10 человек.', price: '2 часа · от 1000 BYN' }
]

const visibleWorkshops = computed(() => {
  return showAll.value ? allWorkshops : allWorkshops.slice(0, 3)
})
</script>

<template>
  <section class="bg-white" id="workshops">
    <div class="container">
      <h2 class="text-3xl md:text-5xl mb-3 text-dark">Мастер-классы</h2>
      <p class="text-muted text-base md:text-lg mb-12">Слепи своё изделие за 2–3 часа. Опыт не нужен.</p>
      
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <article v-for="item in visibleWorkshops" :key="item.name" class="bg-white border border-line rounded-default overflow-hidden flex flex-col pb-6 shadow-sm">
          <img :src="item.img" :alt="item.name" class="w-full aspect-[4/3] object-cover">
          <h3 class="px-6 pt-5 pb-2 text-xl text-dark">{{ item.name }}</h3>
          <p class="px-6 text-muted text-sm">{{ item.desc }}</p>
          <p class="px-6 text-terracotta font-semibold text-lg mt-2">{{ item.price }}</p>
          <a href="#form" class="btn btn-primary mt-4 mx-6">Записаться</a>
        </article>
      </div>
      
      <div class="text-center mt-12">
        <button @click="showAll = !showAll" class="btn btn-outline">
          {{ showAll ? 'Скрыть мастер-классы' : 'Все мастер-классы' }}
        </button>
      </div>
    </div>
  </section>
</template>