<script setup>
const steps = [
  { num: 1, title: 'Знакомство', desc: 'Рассказываем о глине и инструментах' },
  { num: 2, title: 'Лепка', desc: 'Создаёте изделие руками' },
  { num: 3, title: 'Роспись', desc: 'Выбираете глазурь и цвет' },
  { num: 4, title: 'Обжиг', desc: 'Забираете изделие через 7 дней' }
]
</script>

<template>
  <section class="bg-beige">
    <div class="container">
      <h2 class="text-3xl md:text-5xl mb-12 text-dark">Как проходит занятие</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div v-for="s in steps" :key="s.num">
          <div class="w-16 h-16 rounded-full bg-terracotta text-white flex items-center justify-center text-2xl font-bold mb-5">
            {{ s.num }}
          </div>
          <h3 class="text-xl mb-2 text-dark">{{ s.title }}</h3>
          <p class="text-muted text-sm">{{ s.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>