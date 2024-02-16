<script setup lang="ts">
</script>

<template>
  <div class="default-layout">
    <header>header</header>
    <main><slot /></main>
    <footer>footer</footer>
  </div>
</template>

<style lang="scss" scoped>
.default-layout {
  display: grid;
  height: 100%;
  grid-template-columns: 100%;
  grid-template-rows: auto 1fr auto;
}
</style>
