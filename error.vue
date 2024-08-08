<script setup lang="ts">
  const { error } = defineProps<{
    error: { statusCode: number; message: string };
  }>();
</script>
<template>
  <div class="error">
    <h1>Oops...</h1>
    <h2>{{ error.statusCode }}</h2>
    <h3>{{ error.message }}</h3>
    <NuxtLink to="/">Home page</NuxtLink>
  </div>
</template>
<style scoped>
  .error {
    max-width: 300px;
    margin: 0 auto;
    text-align: center;
  }
  a {
    display: block;
    margin: 0 auto;
    width: fit-content;
  }
</style>
