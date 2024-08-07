import {watch, ref} from 'vue';

<script setup lang="ts">
  const route = useRoute();
  const isShowCart = ref(true);

  watch(
    () => route.path,
    (newRoute) => {
      if (newRoute === '/cart') {
        isShowCart.value = false;
      } else {
        isShowCart.value = true;
      }
    }
  );
</script>

<template>
  <div v-if="isShowCart" class="cart">
    <NuxtLink class="cart-link" to="/cart">
      <img src="@/assets/icons/cart.svg" alt="Cart icon" />
    </NuxtLink>
  </div>
</template>

<style scoped>
  .cart {
    position: fixed;
    bottom: 50px;
    right: 50px;
  }
  .cart-link {
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: #fff;
  }
  .cart-link:hover {
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    animation-duration: 0.3s;
    animation-name: shake;
    animation-iteration-count: infinite;
    animation-direction: alternate;
  }
  a:hover::after {
    width: 0;
  }

  @keyframes shake {
    0% {
      transform: rotate(-5deg) scale(1.1);
    }
    100% {
      transform: rotate(5deg) scale(1);
    }
  }
</style>
