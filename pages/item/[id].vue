<script setup lang="ts">
  import { useRoute } from 'vue-router';
  import type { IItem } from '@/types';

  const { id } = useRoute().params;

  const { data: item } = await useFetch<IItem>(
    `https://fakestoreapi.com/products/${id}`,
    { key: `${id}` }
  );

  if (!item.value) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Item not found',
      fatal: true,
    });
  }
  const { image, title, description, price } = item.value;
</script>

<template>
  <Head>
    <Title>Another test task | {{ title }}</Title>
    <Meta name="description" :content="description" />
  </Head>
  <div class="item container">
    <img :src="image" :alt="title" />
    <div class="desc">
      <h2>{{ title }}</h2>
      <p>{{ description }}</p>
      <p class="price">Price - {{ price }} $</p>
      <base-button>Add to cart</base-button>
    </div>
  </div>
</template>

<style scoped>
  .item {
    max-width: 800px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    gap: 50px;
  }
  img {
    max-width: 200px;
    height: auto;
  }
  .desc {
    max-width: 500px;
  }
  .price {
    font-size: 18px;
    font-weight: bold;
  }
</style>
