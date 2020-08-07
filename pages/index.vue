<template>
  <Container>
    <About />

    <h3>Últimas postagens</h3>

    <Posts :posts="posts" />

    <Button to="/blog" class="mt-5">
      Ver todas as postagens
    </Button>
  </Container>
</template>

<script>
import seo from '@/helpers/seo'

export default {
  components: {
    Container: () => import('@/components/Container'),
    About: () => import('@/components/About'),
    Posts: () => import('@/components/Posts'),
    Button: () => import('@/components/Button'),
  },
  async asyncData({ $content }) {
    const posts = await $content('posts')
      .only(['title', 'description', 'image', 'slug', 'date', 'tags'])
      .sortBy('createdAt', 'desc')
      .limit(3)
      .fetch()

    return { posts }
  },
  data: () => ({
    posts: [],
  }),
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

.mt-5 {
  margin-top: 25px;
}
</style>
