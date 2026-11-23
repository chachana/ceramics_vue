<script setup>
import aboutImg from '../assets/images/about.jpg'
</script>

<template>
  <section class="bg-white" id="about">
    <div class="container grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
      <div class="order-1 md:order-none">
        <img :src="aboutImg" alt="Интерьер мастерской" class="rounded-default w-full object-cover">
      </div>
      <div>
        <h2 class="text-3xl md:text-5xl mb-5 text-dark">О мастерской</h2>
        <p class="text-muted mb-8">Мы лепим керамику с 2016 года. За это время через нашу мастерскую прошло более 4000 учеников. Мы верим, что керамика — это не про идеальный результат, а про удовольствие от процесса.</p>
        <div class="flex flex-wrap gap-8 md:gap-12">
          <div>
            <strong class="block font-serif text-3xl text-terracotta">8 лет</strong>
            <span class="text-sm text-muted">опыта</span>
          </div>
          <div>
            <strong class="block font-serif text-3xl text-terracotta">4000+</strong>
            <span class="text-sm text-muted">учеников</span>
          </div>
          <div>
            <strong class="block font-serif text-3xl text-terracotta">12</strong>
            <span class="text-sm text-muted">мастеров</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>