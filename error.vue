<script setup lang="ts">
  useHead({
    title: 'Another test task | Error',
  });
  const { error } = defineProps<{
    error: { statusCode: number; message: string };
  }>();

  const handleError = () => {
    clearError({ redirect: '/' });
  };
</script>
<template>
  <Head>
    <Title>Another test task | {{ error.message }}</Title>
  </Head>
  <div class="error">
    <h1>Oops...</h1>
    <h2>{{ error.statusCode }}</h2>
    <h3>{{ error.message }}</h3>
    <base-button @click="handleError">Home?</base-button>
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
