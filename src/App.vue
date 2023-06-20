<template>
  <div id="app">
    <template v-if="is404">
      <router-view />
    </template>

    <template v-else>
      <main>
        <router-view />
      </main>
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
</script>
