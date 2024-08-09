<script setup lang="ts">
  const { src, title, price, quantity } = defineProps({
    id: {
      type: Number,
      required: true,
    },
    src: {
      type: String,
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
    quantity: {
      type: Number,
      required: true,
    },
  });

  const fixedTitle = title.slice(0, 20) + '...';
</script>

<template>
  <div class="cart-item">
    <img :src :alt="title" />
    <div class="info">
      <h4>{{ fixedTitle }}</h4>
      <p class="price">{{ price }} $</p>
      <div class="quantity-block">
        <base-button @click="$emit('decrement')">-</base-button>
        <p class="quantity">{{ quantity }}</p>
        <base-button @click="$emit('increment')">+</base-button>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .cart-item {
    height: 200px;
    display: flex;
    align-items: center;
    gap: 10px;
    width: 300px;
    border: 1px solid #ccc;
    border-radius: 8px;
    padding: 15px;
    transition: all 0.5s ease-in-out;
  }
  .cart-item:hover {
    border-color: #888;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  }
  .cart-item:not(:last-child) {
    margin-bottom: 20px;
  }
  img {
    max-width: 50%;
    max-height: 50%;
  }

  .price {
    text-align: right;
    font-weight: bold;
  }
  .quantity-block {
    display: flex;
    justify-content: end;
    align-items: center;
    gap: 10px;
  }
  .info {
    display: grid;
    gap: 15px;
  }
</style>
