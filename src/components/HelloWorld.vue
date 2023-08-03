<template>
  <div>
    <div>Hello World!</div>
    <button @click="store.count++">Add</button>
    <div>Count: {{ store.count }}</div>
  </div>
</template>

<script setup lang="ts">
import { useStore } from '@/stores/store'

const store = useStore()
</script>

<style scoped></style>
