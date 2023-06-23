<template>
  <main class="relative flex min-h-screen items-center justify-center bg-gray-100 text-center">
    <el-card class="min-w-[360px] max-w-[540px] rounded-lg shadow-lg">
      <LangSelect />
    </el-card>
    <div class="absolute bottom-2 text-center font-mono italic">
      <div>{{ $t('messages.createBy') }}</div>
    </div>
  </main>
</template>

<script setup></script>

<style scoped></style>
