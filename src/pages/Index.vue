<template>
  <div class="home">
    <mb-blog :api-url="apiUrl" />
  </div>
</template>

<script>
import MbBlog from '@/components/Blog'

export default {
  name: 'IndexPage',
  components: {
    MbBlog,
  },
  data() {
    return {
      apiUrl: '/',
    }
  },
}
</script>
