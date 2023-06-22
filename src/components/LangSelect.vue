<!--suppress AllyHtmlVueInspection, AllyHtmlVueInspection -->
lyHtmlVueInspection -->lyHtmlVueInspection -->

<template>
  <div>
    <el-select v-model="lang" clearable @change="onChange">
      <el-option label="中文" value="zhCN"></el-option>
      <el-option label="English" value="en"></el-option>
      <el-option label="Español" value="es"></el-option>
      <el-option label="한국어" value="ko"></el-option>
    </el-select>
  </div>
</template>

<script setup>
const lang = ref(localStorage.getItem('LANG'))

const { locale, t } = useI18n()

const onChange = () => {
  locale.value = lang.value
  localStorage.setItem('LANG', lang.value)
  document.title = t('messages.appName')
}
</script>
