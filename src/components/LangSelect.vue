<template>
  <div>
    <el-select v-model="lang" clearable @change="onChange">
      <el-option
        v-for="lang in langs"
        :key="lang.key"
        :label="lang.label"
        :value="lang.key"
      ></el-option>
    </el-select>
  </div>
</template>

<script setup lang="ts">
import { langs } from '../i18n'

const lang = ref(localStorage.getItem('LANG')!)

const { locale, t } = useI18n()

const onChange = () => {
  locale.value = lang.value!
  localStorage.setItem('LANG', lang.value!)
  document.title = t('messages.appName')
}
</script>
