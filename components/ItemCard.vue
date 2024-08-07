<script setup lang="ts">
  const props = defineProps({
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

  const fixedTitle = props.title.slice(0, 20) + '...';
</script>

<template>
  <div class="item-card">
    <p class="title">{{ fixedTitle }}</p>
    <div class="image">
      <img :src="props.src" :alt="props.title" />
    </div>
    <p class="price">{{ props.price }} $</p>
    <base-button>Add to cart</base-button>
  </div>
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
    max-width: 80px;
    height: 100px;
    margin: 0 auto;
    display: flex;
    align-items: center;
  }
  img {
    width: 100%;
  }
  .price {
    text-align: right;
    font-weight: bold;
  }
</style>
