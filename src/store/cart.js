import { reactive, ref, computed, watch } from 'vue'

const saved = JSON.parse(localStorage.getItem('ceramics_cart') || '[]')

export const cart = reactive({
  items: saved 
})

export const isCartOpen = ref(false)

export const openCart = () => { isCartOpen.value = true }
export const closeCart = () => { isCartOpen.value = false }

watch(cart.items, () => {
  localStorage.setItem('ceramics_cart', JSON.stringify(cart.items))
}, { deep: true })

export const cartCount = computed(() =>
  cart.items.reduce((sum, item) => sum + item.qty, 0)
)

export const cartTotal = computed(() =>
  cart.items.reduce((sum, item) => sum + item.priceNum * item.qty, 0)
)

export const addToCart = (product) => {
  const existing = cart.items.find(i => i.name === product.name)
  if (existing) {
    existing.qty++
  } else {
    cart.items.push({ ...product, qty: 1 })
  }
}

export const removeFromCart = (name) => {
  const index = cart.items.findIndex(i => i.name === name)
  if (index !== -1) cart.items.splice(index, 1)
}

export const changeQty = (name, delta) => {
  const item = cart.items.find(i => i.name === name)
  if (!item) return
  item.qty += delta
  if (item.qty <= 0) removeFromCart(name)
}

export const clearCart = () => {
  cart.items.splice(0, cart.items.length)
}