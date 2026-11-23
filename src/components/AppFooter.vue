<script setup>
import { ref } from 'vue'
const email = ref('')
const subscribe = () => {
  alert('Вы подписаны!')
  email.value = ''
}
</script>

<template>
  <footer class="bg-dark text-white py-16 md:py-20" id="contacts">
    <div class="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 mb-16">
      <div>
        <a href="#" class="font-serif text-2xl font-bold tracking-widest text-white mb-5 block">ГЛИНА</a>
        <p class="text-[#D9C9B8] text-sm max-w-[300px]">Мастерская керамики. Мастер-классы и готовая посуда ручной работы.</p>
      </div>
      <div>
        <h4 class="text-base mb-5 text-white font-bold">Контакты</h4>
        <!-- ИЗМЕНЕНО: Минск и белорусский адрес -->
        <p class="text-[#D9C9B8] text-sm mb-2">г. Минск, ул. Кульман, 22</p>
        <!-- ИЗМЕНЕНО: Белорусский номер -->
        <p class="mb-2"><a href="tel:+375291234567" class="text-[#D9C9B8] text-sm hover:text-terracotta transition-colors">+375 (29) 123-45-67</a></p>
        <p class="mb-2"><a href="mailto:hello@glina.by" class="text-[#D9C9B8] text-sm hover:text-terracotta transition-colors">hello@glina.by</a></p>
        <p class="text-[#D9C9B8] text-sm">Пн–Вс: 10:00–21:00</p>
      </div>
      <div>
        <h4 class="text-base mb-5 text-white font-bold">Мы в соцсетях</h4>
        <p class="mb-2"><a href="#" class="text-[#D9C9B8] text-sm hover:text-terracotta transition-colors">Telegram</a></p>
        <p class="mb-2"><a href="#" class="text-[#D9C9B8] text-sm hover:text-terracotta transition-colors">VK</a></p>
        <p><a href="#" class="text-[#D9C9B8] text-sm hover:text-terracotta transition-colors">Instagram</a></p>
      </div>
      <div>
        <h4 class="text-base mb-5 text-white font-bold">Новости мастерской</h4>
        <form class="flex flex-col gap-3" @submit.prevent="subscribe">
          <input v-model="email" type="email" placeholder="Ваш email" required class="p-3.5 rounded-lg border-none text-sm focus:outline-none">
          <button type="submit" class="btn btn-primary w-full text-sm">Подписаться</button>
        </form>
      </div>
    </div>
    <div class="container border-t border-white/10 pt-8 text-muted text-sm">
      <p>© 2026 Мастерская «Глина». Все права защищены.</p>
    </div>
  </footer>
</template>