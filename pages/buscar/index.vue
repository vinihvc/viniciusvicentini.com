<template>
  <div class="container">
    <Searchbar v-model="filtro" />

    <div class="wrapper">
      <Posts :posts="posts" />
    </div>
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
      filtro: '',
      posts: [],
    }
  },
  methods: {
    async searchPosts(filtro) {
      this.posts = await this.$content('posts')
        .only(['title', 'description', 'thumbnail', 'slug', 'date'])
        .sortBy('createdAt', 'asc')
        .search(filtro)
        .fetch()

      this.$router.push({ query: { filtro } })
    },
  },
  watch: {
    async filtro(filtro) {
      await this.searchPosts(filtro)
    },
  },
  mounted() {
    this.filtro = this.$route.query.filtro

    this.searchPosts(this.filtro)
  },
}
</script>

<style lang="scss" scoped>
.wrapper {
  margin-top: 50px;
}
</style>
