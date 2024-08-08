<template>
  <header>
    <nav class="container">
      <NuxtLink to="/">Home</NuxtLink>
      <NuxtLink to="/contacts">Contacts</NuxtLink>
    </nav>
  </header>
</template>

<style scoped>
  header {
    padding: 25px;
  }
  nav {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
  }
</style>
