<template>
  <div>
    <About />

    <h3>Blog Posts</h3>

    <Posts :posts="posts" />

    <Pagination
      :total="pageCount"
      :page="page"
      @next="page = page + 1"
      @previous="page = page - 1"
    />
  </div>
</template>

<script>
const pagination = {
  getPostsOfPage($content, page) {
    return $content('posts')
      .only(['title', 'description', 'img', 'slug'])
      .sortBy('createdAt', 'desc')
      .skip(10 * (page - 1))
      .limit(10)
      .fetch()
  },
  async getNumberOfPages($content) {
    return Math.ceil(
      (
        await $content('posts')
          .only([])
          .fetch()
      ).length / 10
    )
  },
}

import seo from '@/helpers/seo'

export default {
  components: {
    About: () => import('@/components/About'),
    Posts: () => import('@/components/Posts'),
    Pagination: () => import('@/components/Pagination'),
  },
  async asyncData({ $content, query }) {
    const page = parseInt(query.page || '1') || 1

    const [posts, pageCount] = await Promise.all([
      pagination.getPostsOfPage($content, page),
      pagination.getNumberOfPages($content),
    ])

    return { posts, page, pageCount }
  },
  data: () => ({
    posts: [],
    page: 1,
    pageCount: 1,
  }),
  watch: {
    async page() {
      this.$router.push({ path: '/', query: { page: this.page } })

      this.posts = await pagination.getPostsOfPage(this.$content, this.page)
    },
  },
  head() {
    return seo({ title: 'Início' })
  },
}
</script>

<style lang="scss" scoped>
h3 {
  font-size: 42px;
  font-weight: 700;
  text-align: center;
  margin: 100px 0;
}
</style>
