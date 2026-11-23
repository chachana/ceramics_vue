<script setup>
import { ref } from 'vue'
import formImg from '../assets/images/form.jpg'

const form = ref({ name: '', phone: '', interest: '', comment: '', agree: false })

const submit = () => {
  const now = new Date()
  const dateStr = now.toLocaleDateString('ru-RU') + ' ' + now.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' })
  const newSubmission = { date: dateStr, name: form.value.name, phone: form.value.phone, interest: form.value.interest, comment: form.value.comment }
  
  const existing = JSON.parse(localStorage.getItem('ceramics_submissions') || '[]')
  existing.push(newSubmission)
  localStorage.setItem('ceramics_submissions', JSON.stringify(existing))

  alert('Заявка отправлена! Она появилась в панели администратора.')
  form.value = { name: '', phone: '', interest: '', comment: '', agree: false }
}
</script>

<template>
  <section class="bg-beige" id="form">
    <div class="container grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
      <div>
        <h2 class="text-3xl md:text-5xl mb-3 text-dark">Запишись или закажи</h2>
        <p class="text-muted mb-8">Оставь заявку — мы свяжемся в течение часа</p>
        
        <form class="flex flex-col gap-4" @submit.prevent="submit">
          <input v-model="form.name" type="text" placeholder="Ваше имя" required class="w-full p-4 border border-line rounded-lg bg-white text-sm focus:outline-none focus:border-terracotta">
          <input v-model="form.phone" type="tel" placeholder="+375 (29) ___-__-__" required class="w-full p-4 border border-line rounded-lg bg-white text-sm focus:outline-none focus:border-terracotta">
          <select v-model="form.interest" required class="w-full p-4 border border-line rounded-lg bg-white text-sm focus:outline-none focus:border-terracotta">
            <option value="">Что вас интересует?</option>
            <option>Покупка изделия</option>
            <option>Мастер-класс</option>
            <option>Корпоратив</option>
          </select>
          <textarea v-model="form.comment" placeholder="Комментарий (необязательно)" class="w-full p-4 border border-line rounded-lg bg-white text-sm resize-y min-h-[100px] focus:outline-none focus:border-terracotta"></textarea>
          
          <label class="flex items-center gap-2.5 text-sm text-muted cursor-pointer">
            <input v-model="form.agree" type="checkbox" required class="w-auto">
            <span>Согласен на обработку данных</span>
          </label>
          
          <button type="submit" class="btn btn-primary w-full mt-2">Отправить заявку</button>
        </form>
      </div>
      <div>
        <img :src="formImg" alt="Мастерская керамики" class="rounded-default w-full object-cover">
      </div>
    </div>
  </section>
</template>