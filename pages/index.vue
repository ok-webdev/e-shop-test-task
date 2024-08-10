<script setup lang="ts">
  import { ref, watch } from 'vue';
  import type { IItem, ICartItem } from '@/types';
  import { useAddToCart } from '@/composables/addToCart';
  import { useItems } from '@/composables/useItems';
  const nuxtApp = useNuxtApp();
  useHead({
    title: 'Another test task | Home',
  });

  const selectedCategory = ref<string>('');
  const { items, loading, error } = useItems(selectedCategory);
  const { addToCart } = useAddToCart();
</script>

<template>
  <div class="container">
    <CategoryFilter v-model="selectedCategory" />
    <div v-if="!loading" class="cards">
      <item-card
        v-for="item in items"
        :key="item.id"
        :id="item.id"
        :title="item.title"
        :price="item.price"
        :src="item.image"
        @add="
          addToCart({
            id: item.id,
            src: item.image,
            title: item.title,
            price: item.price,
            quantity: 1,
          })
        "
      />
    </div>
  </div>
</template>

<style scoped>
  .cards {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
    margin-top: 20px;
  }
  .filter {
    display: block;
    padding: 10px;
    margin: 0 auto;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
</style>
