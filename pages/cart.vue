<script setup lang="ts">
  import { storeToRefs } from 'pinia';
  import { useCart } from '@/stores/cart';

  definePageMeta({
    layout: 'no-cart-link',
  });

  const store = useCart();
  const { increaseQuantity, decreaseQuantity, totalPrice, totalQuantity } =
    store;
  const { items } = storeToRefs(store);
</script>

<template>
  <Head>
    <Title>Another test task | Cart</Title>
  </Head>
  <div class="container">
    <p v-if="!items.length">There are {{ items.length }} items in the cart</p>
    <div class="cart">
      <cart-item
        v-for="item in items"
        :key="item.id"
        :id="item.id"
        :src="item.src"
        :title="item.title"
        :price="item.price"
        :quantity="item.quantity"
        @increment="increaseQuantity(item.id)"
        @decrement="decreaseQuantity(item.id)"
      />
    </div>
    <bottom-line
      v-if="items.length"
      :price="totalPrice()"
      :quantity="totalQuantity()"
    />
  </div>
</template>

<style scoped>
  .cart {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
    margin-top: 20px;
  }
  p {
    font-weight: bold;
    text-align: center;
  }
</style>
