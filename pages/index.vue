<script setup lang="ts">
  import type { IItem } from '@/types';

  const { data: items } = await useFetch<IItem[]>(
    'https://fakestoreapi.com/products'
  );
</script>

<template>
  <div class="cards container">
    <item-card
      v-for="item in items"
      :key="item.id"
      :id="item.id"
      :title="item.title"
      :price="item.price"
      :src="item.image"
    />
  </div>
</template>

<style>
  .cards {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
  }
</style>
