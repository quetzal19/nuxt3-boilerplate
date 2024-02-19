<script setup lang="ts">
const switchLocalePath = useSwitchLocalePath();
const localePath = useLocalePath();
</script>

<template>
  <div>
    <h1 class="app-h1">
      Main
    </h1>
    <h2 class="app-h2">
      Тест шрифта
    </h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos in nihil nulla quae quaerat quos tempore veritatis
      voluptate! Architecto, impedit quasi. Blanditiis cupiditate esse, iure officia perferendis qui quo velit!
      Ab accusamus adipisci, aperiam architecto aspernatur debitis delectus, dolorem dolores eum expedita minima
      molestiae nihil quia quis rem sapiente suscipit. Assumenda atque cum dignissimos et iure mollitia nemo
      optio ullam?
    </p>
    <p>
      Повседневная практика показывает, что социально-экономическое развитие требует определения и уточнения
      направлений прогрессивного развития. Задача организации, в особенности же новая модель
      организационной деятельности требует от нас системного анализа модели развития. Задача организации, в особенности
      же постоянный количественный рост и сфера нашей активности обеспечивает широкому
      кругу специалистов участие в формировании модели развития.
    </p>
    <NuxtLink :to="switchLocalePath('en')">
      English
    </NuxtLink>
    <NuxtLink :to="switchLocalePath('ru')">
      Руссккий
    </NuxtLink>
    <div>Test 1 {{ $t('greetingTestCatalog.message') }}</div>
    <NuxtLink :to="localePath('home')">
      Homepage
    </NuxtLink>
  </div>
</template>

<style lang="scss">
p {
  color: $red-1;
}
</style>
