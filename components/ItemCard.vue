<script setup lang="ts">
  const { id, title, price, src } = defineProps({
    id: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    src: {
      type: String,
      required: true,
    },
  });

  const fixedTitle = title.slice(0, 20) + '...';

  const addToCart = () => {
    console.log(id);
  };
</script>

<template>
  <NuxtLink :to="`/item/${id}`" class="item-card">
    <p class="title">{{ fixedTitle }}</p>
    <div class="image">
      <img :src :alt="title" />
    </div>
    <p class="price">{{ price }} $</p>
    <base-button @click.prevent="addToCart">Add to cart</base-button>
  </NuxtLink>
</template>

<style scoped>
  .item-card {
    background-color: #fff;
    width: 230px;
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 15px;
    transition: all 0.5s ease-in-out;
  }
  .item-card:hover {
    border-color: #888;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  }
  .item-card:hover::after {
    width: 0;
  }

  .item-card:nth-child(odd):hover {
    transform: rotate(2deg) scale(1.1);
  }
  .item-card:nth-child(even):hover {
    transform: rotate(-2deg) scale(1.1);
  }
  .title {
    text-align: center;
    font-size: 18px;
  }
  .image {
    height: 120px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  img {
    max-width: 70%;
    max-height: 100%;
  }
  .price {
    text-align: right;
    font-weight: bold;
  }
</style>
