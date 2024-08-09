<script setup lang="ts">
  import { ref, watch } from 'vue';
  import type { IItem, ICartItem } from '@/types';
  import { useAddToCart } from '@/hooks/addToCart';

  useHead({
    title: 'Another test task | Home',
  });

  const { data: items } = await useFetch<IItem[]>(
    'https://fakestoreapi.com/products'
  );

  let filteredItems = ref(items);

  const { data: categories } = await useFetch<string[]>(
    'https://fakestoreapi.com/products/categories'
  );

  const filter = ref('all');

  const filterHandler = (event: Event) => {
    const filterValue = (event.target as HTMLTextAreaElement).value;
    console.log(filterValue);
  };

  watch(filter, async (newValue, oldValue) => {
    if (newValue !== oldValue) {
      const { data } = await useFetch<IItem[]>(
        `https://fakestoreapi.com/products/category/${newValue}`
      );
      filteredItems.value = data.value;
    }
  });

  const { addToCart } = useAddToCart();
</script>

<template>
  <div class="container">
    <select class="filter" v-model="filter" @change="filterHandler">
      <option value="all">all</option>
      <option v-for="category in categories" :key="category" :value="category">
        {{ category }}
      </option>
    </select>
    <div class="cards">
      <item-card
        v-for="item in filteredItems"
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

<style>
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
