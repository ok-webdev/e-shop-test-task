<template>
  <div class="cart">
    <NuxtLink class="cart-link" to="/cart">
      <img src="@/assets/icons/cart.svg" alt="Cart icon" />
    </NuxtLink>
  </div>
</template>

<style scoped>
  .cart {
    position: fixed;
    bottom: 30px;
    right: 30px;
  }
  .cart-link {
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: #fff;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
    opacity: 0.5;
  }
  .cart-link:hover {
    opacity: 1;
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
