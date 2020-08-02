<template>
  <div class="container">
    <Searchbar v-model="query" />

    <Posts :posts="posts" />
  </div>
</template>

<script>
export default {
  components: {
    Searchbar: () => import('@/components/Searchbar'),
    Posts: () => import('@/components/Posts'),
  },
  data() {
    return {
      query: '',
      posts: [],
    }
  },
  watch: {
    async query(query) {
      this.posts = await this.$content('posts')
        .only(['title', 'slug'])
        .sortBy('createdAt', 'asc')
        .search(query)
        .fetch()
    },
  },
}
</script>
