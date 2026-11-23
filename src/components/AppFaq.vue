<script setup>
const faq = [
  { q: 'Нужен ли опыт для мастер-класса?', a: 'Нет, всё покажет мастер.' },
  { q: 'Сколько сохнет изделие?', a: '7 дней, потом заберёте.' },
  { q: 'Можно ли купить готовое изделие?', a: 'Да, в разделе «Магазин».' },
  { q: 'Есть ли доставка по Беларуси?', a: 'Да, отправляем по всей стране курьерскими службами.' },
  { q: 'Проводите ли корпоративы?', a: 'Да, от 10 человек.' }
]
</script>

<template>
  <section class="bg-white">
    <div class="container">
      <h2 class="text-3xl md:text-5xl mb-10 text-dark">Частые вопросы</h2>
      <div class="flex flex-col gap-4 mt-10">
        <details v-for="item in faq" :key="item.q" class="bg-beige rounded-xl p-6 px-7 cursor-pointer group">
          <summary class="font-medium text-base md:text-lg list-none flex justify-between items-center text-dark">
            {{ item.q }}
            <span class="text-terracotta text-2xl group-open:hidden">+</span>
            <span class="text-terracotta text-2xl hidden group-open:inline">−</span>
          </summary>
          <p class="mt-4 text-muted text-sm md:text-base">{{ item.a }}</p>
        </details>
      </div>
    </div>
  </section>
</template>