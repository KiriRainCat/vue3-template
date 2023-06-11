<template>
  <RouterView />
</template>

<script setup>
import { RouterView } from 'vue-router'
import { onBeforeMount } from 'vue'
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

onBeforeMount(() => {
  locale.value = localStorage.getItem('LANG')
})
</script>

<style scoped></style>
