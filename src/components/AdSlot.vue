<script setup>
import { computed } from 'vue'

const props = defineProps({
  size: {
    type: String,
    default: 'banner',
    validator: (v) => ['banner', 'sidebar', 'square'].includes(v)
  },
  customWidth: { type: String, default: null },
  customHeight: { type: String, default: null }
})

const dimensions = computed(() => {
  if (props.customWidth && props.customHeight) {
    return { width: props.customWidth, height: props.customHeight }
  }
  switch (props.size) {
    case 'banner':
      return { width: '100%', height: '120px' }
    case 'sidebar':
      return { width: '300px', height: '250px' }
    case 'square':
      return { width: '250px', height: '250px' }
    default:
      return { width: '100%', height: '120px' }
  }
})
</script>

<template>
  <div
    class="flex flex-col items-center justify-center border-2 border-dashed border-slate-300 bg-slate-50 rounded-lg my-6"
    :style="dimensions"
  >
    <span class="text-sm text-slate-400 font-medium">Рекламное место</span>
    <span class="text-xs text-slate-300 mt-1">Advertisement</span>
  </div>
</template>