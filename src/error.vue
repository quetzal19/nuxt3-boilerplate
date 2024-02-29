<script setup lang="ts">
import type { NuxtError } from '#app';

const props = defineProps({
  error: {
    type: Object as PropType<NuxtError>,
    required: true,
  },
});
</script>

<template>
  <div class="error-page">
    <div class="status-code-wrap">
      <NuxtPicture
        src="error/samurai-error.jpg"
        preload
        class="error-img"
      />
      <h2 class="error-code">
        {{ props.error.statusCode }}
      </h2>
    </div>
    <div class="app-container error-container">
      <h3 class="error-message">
        {{ props.error.message }}
      </h3>
      <div class="desc">
        Вы перешли по неправильной ссылке или страница была удалена.
      </div>
      <NuxtLink to="/" class="default-button link">
        Перейти на главную
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped lang="scss">
.error-page {
  display: grid;
  height: 100%;
  grid-template-columns: 100%;
  grid-template-rows: auto auto 1fr;

  .status-code-wrap {
    position: relative;
    margin-bottom: 50px;
  }

  .error-code {
    position: absolute;
    top: 50%;
    left: 50%;
    color: $red-2;
    font-family: 'Montserrat', sans-serif;
    font-size: 220px;
    font-weight: 700;
    transform: translate(-50%, -50%);
  }

  .error-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .error-img {
    &:deep(img) {
      max-height: 600px;
      object-fit: cover;
    }
  }

  .error-message {
    margin-bottom: 6px;
    font-family: 'Montserrat', sans-serif;
    font-size: 32px;
    font-weight: 800;
    line-height: 45px;
  }

  .desc {
    margin-bottom: 21px;
    font-size: 14px;
    font-weight: 400;
  }

  .link {
    display: block;
    margin: 0 auto;
  }
}
</style>
