<template>
  <div id="app">
    <template v-if="is404">
      <router-view />
    </template>

    <template v-else>
      <router-view />
    </template>
  </div>
</template>

<script>
import '@/scss/main.scss'

export default {
  name: 'App',
  computed: {
    is404() {
      return this.$route.name === '404'
    },
  },
}

// TODO:
/*
  1. Поменять data.js -> место каталога и поменять на внешний???
  4. Добавить сохранение в localstorage
  5. Анимация
  6. Добавить в сторе categories
  8. сделать source-map
*/
</script>
