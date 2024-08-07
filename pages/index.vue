
import { ref, onMounted } from 'vue'
<script setup>
const items = ref([]);

const getItems = async () => {
  const response = await fetch('https://fakestoreapi.com/products');
  items.value = await response.json();
}

onMounted(() => getItems())


</script>


<template>
  <div class="cards container">
    <item-card 
      v-for="item in items"
      :key="item.id"
      :title="item.title"
      :price="item.price"
      :src="item.image"/>
  </div>
</template>

<style>
  .cards{
    display: flex;
    justify-content:center;
    flex-wrap: wrap;
    gap: 20px;
  }
</style>
