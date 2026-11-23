<script setup>
import heroImg from '../assets/images/hero.jpg'
</script>

<template>
  <section class="bg-beige py-12 md:py-20">
    <div class="container grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
      <div>
        <h1 class="text-3xl md:text-5xl lg:text-6xl mb-6 text-dark">Керамика, которая живёт у вас дома</h1>
        <p class="text-base md:text-lg text-muted mb-10">Купите готовое изделие или слепите своё на мастер-классе с мастером</p>
        <div class="flex flex-col md:flex-row gap-4">
          <a href="#catalog" class="btn btn-primary w-full md:w-auto">Купить керамику</a>
          <a href="#workshops" class="btn btn-outline w-full md:w-auto">На мастер-класс</a>
        </div>
      </div>
      <div>
        <img :src="heroImg" alt="Руки за гончарным кругом" class="rounded-default w-full object-cover">
      </div>
    </div>
  </section>
</template>