<script setup>
import a1 from '../assets/images/avatar-1.jpg'
import a2 from '../assets/images/avatar-2.jpg'
import a3 from '../assets/images/avatar-3.jpg'

const reviews = [
  { img: a1, name: 'Анна', text: 'Никогда не лепила, а тут получилась кружка! Мастер всё показал, атмосфера уютная.' },
  { img: a2, name: 'Игорь', text: 'Брали парный мастер-класс на свидание. Очень понравилось, вернёмся ещё.' },
  { img: a3, name: 'Мария', text: 'Заказывала кружку из магазина. Пришла быстро, упакована идеально.' }
]
</script>

<template>
  <section class="bg-white">
    <div class="container">
      <h2 class="text-3xl md:text-5xl mb-10 text-dark">Отзывы</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <article v-for="r in reviews" :key="r.name" class="bg-beige rounded-default p-7">
          <div class="flex gap-4 items-center mb-4">
            <img :src="r.img" :alt="r.name" class="w-12 h-12 rounded-full object-cover">
            <div>
              <strong class="block text-base text-dark">{{ r.name }}</strong>
              <span class="text-terracotta text-sm">★★★★★</span>
            </div>
          </div>
          <p class="text-muted text-sm">{{ r.text }}</p>
        </article>
      </div>
    </div>
  </section>
</template>