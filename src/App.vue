<template>
  <RouterView />
</template>

<script setup>
const { locale } = useI18n()

onBeforeMount(() => {
  locale.value = localStorage.getItem('LANG')
})
</script>

<style scoped></style>
