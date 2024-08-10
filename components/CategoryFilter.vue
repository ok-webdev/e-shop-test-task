<script setup lang="ts">
  import { ref } from 'vue';
  import { useCategories } from '@/composables/useCategories';

  const { categories } = await useCategories();
  const selectedCategory = ref<string>('');

  defineProps<{
    modelValue: string;
  }>();

  const emit = defineEmits<{
    (e: 'update:modelValue', value: string): void;
  }>();

  watch(selectedCategory, (newCategory) => {
    emit('update:modelValue', newCategory);
  });
</script>

<template>
  <select class="filter" v-model="selectedCategory">
    <option value="">all</option>
    <option v-for="category in categories" :key="category" :value="category">
      {{ category }}
    </option>
  </select>
</template>

<style scoped>
  .filter {
    display: block;
    padding: 10px;
    margin: 0 auto;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
</style>
