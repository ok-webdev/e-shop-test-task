<script setup lang="ts"></script>
<template>
  <button>
    <slot />
  </button>
</template>

<style scoped>
  button {
    padding: 10px 20px;
    border: 1px solid #333;
    background-color: #fff;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.3s ease;
  }
  button:hover {
    background-color: #333;
    color: #fff;
  }
</style>
