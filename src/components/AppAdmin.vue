<script setup>
import { ref, onMounted } from 'vue'
import * as XLSX from 'xlsx'

const submissions = ref([])

// Загружаем данные при старте
onMounted(() => {
  const saved = localStorage.getItem('ceramics_submissions')
  if (saved) submissions.value = JSON.parse(saved)
})

// Функция очистки
const clearData = () => {
  if (confirm('Вы уверены, что хотите удалить все заявки?')) {
    localStorage.removeItem('ceramics_submissions')
    submissions.value = []
  }
}

// Выгрузка в Excel
const exportToExcel = () => {
  if (submissions.value.length === 0) {
    alert('Нет данных для выгрузки. Сначала заполните форму на сайте.')
    return
  }
  
  const dataForExcel = submissions.value.map((item, index) => ({
    '№': index + 1,
    'Дата': item.date,
    'Имя': item.name,
    'Телефон': item.phone,
    'Интерес': item.interest,
    'Комментарий': item.comment
  }))
  
  const worksheet = XLSX.utils.json_to_sheet(dataForExcel)
  const workbook = XLSX.utils.book_new()
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Заявки')
  
  worksheet['!cols'] = [
    { wch: 5 }, { wch: 15 }, { wch: 20 }, { wch: 20 }, { wch: 20 }, { wch: 40 }
  ]
  
  XLSX.writeFile(workbook, 'Заявки_Керамика.xlsx')
}

// Тестовая заявка (чтобы проверить кнопки)
const addTestData = () => {
  const now = new Date()
  const testSub = {
    date: now.toLocaleDateString('ru-RU') + ' ' + now.toLocaleTimeString('ru-RU', { hour: '2-digit', minute: '2-digit' }),
    name: 'Иван Тестов',
    phone: '+375 (29) 999-99-99',
    interest: 'Мастер-класс',
    comment: 'Это тестовая заявка для проверки Excel'
  }
  const existing = JSON.parse(localStorage.getItem('ceramics_submissions') || '[]')
  existing.push(testSub)
  localStorage.setItem('ceramics_submissions', JSON.stringify(existing))
  submissions.value.push(testSub)
}
</script>

<template>
  <section class="py-12 md:py-16 bg-white border-t-2 border-dashed border-line">
    <div class="container">
      <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <h2 class="text-2xl md:text-3xl text-dark">Панель администратора</h2>
        
        <div class="flex flex-wrap gap-3">
          <!-- Кнопка добавления тестовой заявки (для проверки) -->
          <button @click="addTestData" class="btn btn-outline text-sm py-2 px-4 bg-gray-100">
            + Тестовая заявка
          </button>
          <!-- Кнопка скачивания (больше не заблокирована) -->
          <button @click="exportToExcel" class="btn btn-primary text-sm py-2 px-4">
            Скачать Excel
          </button>
          <button @click="clearData" class="btn btn-outline text-sm py-2 px-4">
            Очистить
          </button>
        </div>
      </div>

      <div v-if="submissions.length === 0" class="text-muted italic py-5">
        Заявок пока нет. Заполните форму на сайте или нажмите «+ Тестовая заявка».
      </div>

      <div v-else class="overflow-x-auto border border-line rounded-lg">
        <table class="w-full border-collapse text-left text-sm">
          <thead>
            <tr>
              <th class="p-3 border-b border-line bg-beige font-semibold text-dark">Дата</th>
              <th class="p-3 border-b border-line bg-beige font-semibold text-dark">Имя</th>
              <th class="p-3 border-b border-line bg-beige font-semibold text-dark">Телефон</th>
              <th class="p-3 border-b border-line bg-beige font-semibold text-dark">Интерес</th>
              <th class="p-3 border-b border-line bg-beige font-semibold text-dark">Комментарий</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, i) in submissions" :key="i" class="hover:bg-gray-50">
              <td class="p-3 border-b border-line">{{ item.date }}</td>
              <td class="p-3 border-b border-line">{{ item.name }}</td>
              <td class="p-3 border-b border-line">{{ item.phone }}</td>
              <td class="p-3 border-b border-line">{{ item.interest }}</td>
              <td class="p-3 border-b border-line">{{ item.comment }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </section>
</template>