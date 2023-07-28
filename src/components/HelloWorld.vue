<template>
  <div class="text-center">
    <div class="title">Hello World!</div>
    <button @click="store.count++" class="btn mt-4 px-4 py-1">Add</button>
    <div class="mt-3 text-blue-400">Count: {{ store.count }}</div>
  </div>
</template>

<script setup lang="ts">
import { useStore } from '@/stores/store'

const store = useStore()
</script>

<style scoped>
.title {
  text-shadow: 1px 2px violet;
  @apply rounded-md border-2 border-slate-300 p-2 font-serif text-4xl font-bold text-emerald-400;
}

.btn {
  @apply rounded-md border-2 border-pink-400 bg-pink-500 text-white shadow-md shadow-pink-700 transition-all hover:bg-pink-400 active:bg-pink-600;
}
</style>
