<template>
  <RouterView />
</template>

<script setup lang="ts">
const { locale, t } = useI18n()

onBeforeMount(() => {
  locale.value = localStorage.getItem('LANG')!
  document.title = t('messages.appName')
})
</script>

<style scoped></style>
