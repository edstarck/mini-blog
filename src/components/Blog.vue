<template>
  <main class="mb-blog">
    <mb-loader v-if="isLoading" />

    <template v-else>
      <header class="mb-navbar">
        <button>Create category</button>
        <input type="text" placeholder="Найти статью" />
      </header>

      <article class="mb-catalog">
        <section v-if="posts">Catalog categories with posts...</section>

        <section v-if="error">
          Что то пошло не так... не удалось загрузить статьи!!!
        </section>
      </article>

      <footer class="mb-navbar"></footer>
    </template>
  </main>
</template>

<script>
import {mapState} from 'vuex'
import {actionsTypes} from '@/store/modules/posts/actionTypes'

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
      error: (state) => state.posts.error,
    }),
  },
  methods: {
    fetchPosts() {
      this.$store.dispatch(actionsTypes.fetchPosts, {apiUrl: this.apiUrl})
    },
  },
  mounted() {
    this.fetchPosts()
  },
}
</script>
