<script setup lang="ts">
  const { price, quantity } = defineProps({
    price: {
      type: Number,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
  });
</script>
<template>
  <div class="bottom-line">
    <p>Total quantity: {{ quantity }}</p>
    <p>Total cost: {{ price }}$</p>
    <base-button>Buy</base-button>
  </div>
</template>
<style scoped>
  .bottom-line {
    display: flex;
    justify-content: end;
    align-items: center;
    gap: 10px;
    padding: 15px;
    border-top: 1px solid #ccc;
    margin-top: 10px;
  }
  p {
    font-weight: bold;
  }
</style>
