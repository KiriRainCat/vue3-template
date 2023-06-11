<template>
  <main class='text-center bg-gray-100 min-h-screen flex justify-center items-center relative'>
    <el-card class='rounded-lg shadow-lg min-w-[360px] max-w-[540px]'>
      <lang-select />
    </el-card>
    <div class='absolute bottom-2 text-center italic font-mono'>
      <div>{{ $t('messages.createBy') }}</div>
    </div>
  </main>
</template>

<script setup></script>

<style scoped></style>
