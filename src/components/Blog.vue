<template>
  <main>
    <header v-if="!isLoading" class="mb-navbar">Search</header>

    <article class="mb-catalog">
      <section>blog...</section>

      <mb-loader v-if="isLoading" />

      <section v-if="error">Error messages</section>
    </article>
  </main>
</template>

<script>
import {mapState} from 'vuex'
import {actionsTypes} from '@/store/modules/blog'

import MbLoader from '@/components/ui/Loader'

export default {
  name: 'MbBlog',
  components: {
    MbLoader,
  },
  props: {
    apiUrl: {
      type: String,
      required: true,
    },
  },
  computed: {
    ...mapState({
      isLoading: (state) => state.posts.isLoading,
      posts: (state) => state.posts.data,
      error: (state) => state.blog.error,
    }),
  },
  methods: {
    fetchBlog() {
      this.$store.dispatch(actionsTypes.getBlog, {apiUrl: this.apiUrl})
    },
  },
  mounted() {
    this.fetchBlog()
  },
}
</script>
@/store/modules/posts
