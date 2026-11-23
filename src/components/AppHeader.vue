<script setup>
import { ref } from 'vue'
const isOpen = ref(false)
const toggle = () => isOpen.value = !isOpen.value
</script>

<template>
  <header class="bg-white border-b border-line sticky top-0 z-50">
    <div class="container flex items-center justify-between h-20">
      <a href="#" class="font-serif text-2xl font-bold tracking-widest text-dark">ГЛИНА</a>
      
      <!-- Навигация для ПК -->
      <nav class="hidden md:flex gap-8">
        <a href="#catalog" class="text-base text-dark hover:text-terracotta transition-colors">Магазин</a>
        <a href="#workshops" class="text-base text-dark hover:text-terracotta transition-colors">Мастер-классы</a>
        <a href="#about" class="text-base text-dark hover:text-terracotta transition-colors">О нас</a>
        <a href="#contacts" class="text-base text-dark hover:text-terracotta transition-colors">Контакты</a>
      </nav>
      
      <a href="#form" class="hidden md:inline-block btn btn-primary py-3 px-7 text-sm">Записаться</a>
      
      <!-- Burger -->
      <button class="md:hidden flex flex-col gap-1.5 bg-transparent border-none p-2 cursor-pointer" @click="toggle">
        <span class="block w-7 h-0.5 bg-dark"></span>
        <span class="block w-7 h-0.5 bg-dark"></span>
        <span class="block w-7 h-0.5 bg-dark"></span>
      </button>
    </div>

    <nav v-show="isOpen" class="md:hidden absolute top-20 left-0 right-0 bg-white border-b border-line flex flex-col gap-4 p-6 px-10 shadow-md">
      <a href="#catalog" @click="isOpen = false" class="text-dark hover:text-terracotta">Магазин</a>
      <a href="#workshops" @click="isOpen = false" class="text-dark hover:text-terracotta">Мастер-классы</a>
      <a href="#about" @click="isOpen = false" class="text-dark hover:text-terracotta">О нас</a>
      <a href="#contacts" @click="isOpen = false" class="text-dark hover:text-terracotta">Контакты</a>
    </nav>
  </header>
</template>