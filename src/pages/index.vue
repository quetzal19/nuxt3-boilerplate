<script setup lang="ts">
const switchLocalePath = useSwitchLocalePath();
const localePath = useLocalePath();
</script>

<template>
  <div>
    <h1 class="app-h1">
      Main
    </h1>
    <MainSlider />
    <h2 class="app-h2">
      Тест шрифта
    </h2>
    <p>
      When I come to this garden created by my ancestors, I remember: Like these flowers, we are all dying. To feel
      life in every breath, in every cup of tea, in every life that we take away — this is the way of the Warrior;
      this is bushido.
    </p>
    <p>
      Когда я прихожу в этот сад, созданный моими предками, я вспоминаю: как и эти цветки, все мы умираем. Чувствовать
      жизнь в каждом вздохе, в каждой чашке чая, в каждой жизни, которую мы отнимаем — это и есть путь Воина;
      это и есть — бусидо.
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
    <IGoogle class="icon" filled :font-controlled="false" />
  </div>
</template>

<style lang="scss">
p {
  color: $red-1;
}

.icon {
  max-width: 120px;
}
</style>
