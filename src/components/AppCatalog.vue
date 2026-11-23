<script setup>
import { ref, computed } from 'vue'
import p1 from '../assets/images/product-1.jpg'
import p2 from '../assets/images/product-2.jpg'
import p3 from '../assets/images/product-3.jpg'
import p4 from '../assets/images/product-4.jpg'
import { addToCart } from '../store/cart'

const showAll = ref(false)

const allProducts = [
  { img: p1, name: 'Кружка ручной работы', price: '45 BYN', priceNum: 45 },
  { img: p2, name: 'Тарелка с росписью', price: '60 BYN', priceNum: 60 },
  { img: p3, name: 'Ваза для цветов', price: '85 BYN', priceNum: 85 },
  { img: p4, name: 'Набор для завтрака', price: '120 BYN', priceNum: 120 },
  { img: p1, name: 'Чайник керамический', price: '95 BYN', priceNum: 95 },
  { img: p2, name: 'Салатник глубокий', price: '55 BYN', priceNum: 55 },
  { img: p3, name: 'Пиала для чая', price: '40 BYN', priceNum: 40 },
  { img: p4, name: 'Кувшин для воды', price: '75 BYN', priceNum: 75 }
]

const visibleProducts = computed(() => {
  return showAll.value ? allProducts : allProducts.slice(0, 4)
})

const handleAdd = (product) => {
  addToCart(product)
  alert(`«${product.name}» добавлен в корзину!`)
}
</script>

<template>
  <section class="bg-beige" id="catalog">
    <div class="container">
      <h2 class="text-3xl md:text-5xl mb-3 text-dark">Готовая керамика</h2>
      <p class="text-muted text-base md:text-lg mb-12">Каждое изделие сделано вручную в нашей мастерской</p>
      
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <article v-for="item in visibleProducts" :key="item.name" class="bg-white rounded-default overflow-hidden flex flex-col pb-6">
          <img :src="item.img" :alt="item.name" class="w-full aspect-[4/3] object-cover">
          <h3 class="px-6 pt-5 pb-2 text-xl text-dark">{{ item.name }}</h3>
          <p class="px-6 text-terracotta font-semibold text-lg mt-2">{{ item.price }}</p>
          <div class="px-6 mt-4">
            <button @click="handleAdd(item)" class="btn btn-primary w-full py-3 text-sm">
              В корзину
            </button>
          </div>
        </article>
      </div>

      <div class="text-center mt-12">
        <button @click="showAll = !showAll" class="btn btn-outline">
          {{ showAll ? 'Скрыть' : 'Показать ещё' }}
        </button>
      </div>
    </div>
  </section>
</template>