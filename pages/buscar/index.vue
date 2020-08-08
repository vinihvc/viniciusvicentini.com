<template>
  <Container>
    <Searchbar v-model="filtro" />

    <div class="wrapper">
      <Posts :posts="posts" />
    </div>
  </Container>
</template>

<script>
export default {
  components: {
    Container: () => import('@/components/Container'),
    Searchbar: () => import('@/components/Searchbar'),
    Posts: () => import('@/components/Posts'),
  },
  data() {
    return {
      filtro: null,
      posts: [],
    }
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
  methods: {
    async searchPosts(filtro) {
      this.posts = await this.$content('posts')
        .only(['title', 'description', 'slug', 'date'])
        .sortBy('createdAt', 'asc')
        .fetch()

      this.$router.push({ query: { filtro } })
    },
  },
}
</script>

<style lang="scss" scoped>
.wrapper {
  margin-top: 50px;
}
</style>
