<script setup lang="ts">
const sliders = [
  {
    name: 'Самураи проснувшись, начинает доводить до совершенства то, чем они занимались вчера! 1',
  },
  {
    name: 'Самураи проснувшись, начинает доводить до совершенства то, чем они занимались вчера! 2',
  },
  {
    name: 'Самураи проснувшись, начинает доводить до совершенства то, чем они занимались вчера! 3',
  },
];
</script>

<template>
  <div class="main-slider-component">
    <Swiper
      :modules="[SwiperAutoplay, SwiperPagination]"
      :slides-per-view="1"
      :pagination="{
        type: 'bullets',
      }"
      :autoplay="{
        delay: 8000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }"
      loop
      grab-cursor
      class="swiper-slider"
    >
      <SwiperSlide v-for="(slide, index) in sliders" :key="index" class="slide">
        <div class="title">
          {{ slide.name }}
        </div>
        <NuxtPicture
          src="slider/samurai.jpg"
          preload
          class="slider-img"
        />
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<style scoped lang="scss">
.main-slider-component {
  position: relative;
  height: 505px;

  .swiper-slider {
    height: 465px;
    object-fit: contain;
  }

  .title {
    position: absolute;
    top: 75%;
    left: 50%;
    color: $white;
    font-size: 26px;
    font-weight: bold;
    transform: translate(-50%, -75%);
  }

  .slider-img {
    &:deep(img) {
      object-fit: cover;
    }
  }

  &:deep(.swiper-slider ) {
    overflow: unset;
    --swiper-pagination-color: #c11c1c;
    --swiper-pagination-bullet-inactive-color: #D2D2D2;
    --swiper-pagination-bottom: -40px;
    --swiper-pagination-bullet-height: 3px;
    --swiper-pagination-bullet-border-radius: 20px;
    --swiper-pagination-bullet-width: 55px;
  }
}
</style>
