<template>
  <Container>
    <About />

    <h3>
      Postagens do blog
    </h3>

    <Posts :posts="posts" />

    <Pagination
      v-if="pageCount > 1"
      :total="pageCount"
      :page="page"
      @next="page = page + 1"
      @previous="page = page - 1"
    />
  </Container>
</template>

<script>
const ITEMS_PER_PAGE = 10

const pagination = {
  getPostsOfPage($content, page) {
    return $content('posts')
      .only(['title', 'description', 'image', 'slug', 'date', 'tags'])
      .sortBy('createdAt', 'desc')
      .skip(ITEMS_PER_PAGE * (page - 1))
      .limit(ITEMS_PER_PAGE)
      .fetch()
  },
  async getNumberOfPages($content) {
    return Math.ceil(
      (await $content('posts').only([]).fetch()).length / ITEMS_PER_PAGE
    )
  },
}

import seo from '@/helpers/seo'

export default {
  components: {
    Container: () => import('@/components/Container'),
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
  margin: 50px 0;
  font-size: 18px;
  font-weight: 500;
}
</style>
