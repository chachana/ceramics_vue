<script setup>
import { cart, cartTotal, cartCount, removeFromCart, changeQty, clearCart, isCartOpen, openCart, closeCart } from '../store/cart'

const checkout = () => {
  alert(`Заказ на ${cartTotal.value} BYN оформлен! Заполните форму ниже, чтобы мы связались с вами.`)
  clearCart()
  closeCart()
  document.getElementById('form')?.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <button
    @click="openCart"
    class="fixed bottom-6 right-6 z-[60] w-14 h-14 rounded-full bg-terracotta text-white shadow-lg flex items-center justify-center hover:bg-terracotta-dark transition-colors"
    aria-label="Открыть корзину"
  >
    🛒
    <span
      v-if="cartCount > 0"
      class="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-dark text-white text-xs flex items-center justify-center font-bold"
    >
      {{ cartCount }}
    </span>
  </button>

  <div
    v-if="isCartOpen"
    @click="closeCart"
    class="fixed inset-0 bg-black/40 z-[70]"
  ></div>

  <aside
    class="fixed top-0 right-0 h-full w-full sm:w-[420px] bg-white z-[80] shadow-2xl flex flex-col transition-transform duration-300"
    :class="isCartOpen ? 'translate-x-0' : 'translate-x-full'"
  >
    <div class="flex items-center justify-between p-6 border-b border-line">
      <h2 class="text-2xl text-dark font-serif">Корзина</h2>
      <button @click="closeCart" class="text-3xl text-muted hover:text-dark leading-none">&times;</button>
    </div>

    <div v-if="cart.items.length === 0" class="flex-1 flex flex-col items-center justify-center gap-4 p-6">
      <p class="text-muted text-lg">В корзине пока пусто.</p>
      <button @click="closeCart" class="btn btn-primary">Продолжить покупки</button>
    </div>

    <div v-else class="flex-1 overflow-y-auto p-6 flex flex-col gap-4">
      <div
        v-for="item in cart.items"
        :key="item.name"
        class="bg-beige rounded-xl p-4 flex items-center gap-4"
      >
        <img :src="item.img" :alt="item.name" class="w-16 h-16 rounded-lg object-cover shrink-0">

        <div class="flex-1 min-w-0">
          <h3 class="text-dark font-medium truncate">{{ item.name }}</h3>
          <p class="text-terracotta font-semibold text-sm">{{ item.price }}</p>
        </div>

        <div class="flex items-center gap-2 shrink-0">
          <button @click="changeQty(item.name, -1)" class="w-7 h-7 rounded bg-white border border-line text-dark hover:border-terracotta transition-colors">−</button>
          <span class="w-6 text-center text-dark font-medium">{{ item.qty }}</span>
          <button @click="changeQty(item.name, 1)" class="w-7 h-7 rounded bg-white border border-line text-dark hover:border-terracotta transition-colors">+</button>
        </div>

        <button @click="removeFromCart(item.name)" class="text-muted hover:text-terracotta text-sm underline shrink-0">
          ✕
        </button>
      </div>
    </div>

    <div v-if="cart.items.length > 0" class="p-6 border-t border-line flex flex-col gap-4">
      <strong class="text-xl text-dark font-serif">Итого: {{ cartTotal }} BYN</strong>
      <div class="flex gap-3">
        <button @click="clearCart" class="btn btn-outline flex-1">Очистить</button>
        <button @click="checkout" class="btn btn-primary flex-1">Оформить заказ</button>
      </div>
    </div>
  </aside>
</template>