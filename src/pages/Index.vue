<template>
  <div class="home">
    <div class="cards"></div>
  </div>
</template>

<script>
import {actionsTypes} from '@/store/modules/blog'

export default {
  name: 'IndexPage',
  methods: {
    fetchBlog() {
      this.$store.dispatch(actionsTypes.getBlog, {apiUrl: '/'})
    },
  },
  mounted() {
    this.fetchBlog()
  },
}
</script>
