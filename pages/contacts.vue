<script setup lang="ts">
  useHead({
    title: 'Another test task | Contacts',
  });
</script>
<template>
  <no-ssr>
    <div class="container">
      <h1>Contacts</h1>
      <ul>
        <li>
          <a href="https://maps.app.goo.gl/AQHZJxjYPdXHVjng8" target="_blank"
            >Ulitsa Radishcheva, 39, 28, Sankt-Peterburg, 191123</a
          >
        </li>
        <li>
          <a href="mailto:info@kefirium.ru" target="_top">info@kefirium.ru</a>
        </li>
      </ul>
    </div>
  </no-ssr>
</template>

<style scoped>
  li {
    max-width: fit-content;
    margin-bottom: 10px;
  }
</style>
