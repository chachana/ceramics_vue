<script setup>
import g1 from '../assets/images/gallery-1.jpg'
import g2 from '../assets/images/gallery-2.jpg'
import g3 from '../assets/images/gallery-3.jpg'
import g4 from '../assets/images/gallery-4.jpg'
import g5 from '../assets/images/gallery-5.jpg'
import g6 from '../assets/images/gallery-6.jpg'
import g7 from '../assets/images/gallery-7.jpg'
import g8 from '../assets/images/gallery-8.jpg'
import g9 from '../assets/images/gallery-9.jpg'

const images = [g1, g2, g3, g4, g5, g6, g7, g8, g9]
</script>

<template>
  <section class="bg-beige">
    <div class="container">
      <h2 class="text-3xl md:text-5xl mb-10 text-dark">Работы наших учеников</h2>
      <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
        <img v-for="(img, i) in images" :key="i" :src="img" :alt="`Работа ${i + 1}`" class="rounded-xl aspect-square object-cover w-full">
      </div>
    </div>
  </section>
</template>