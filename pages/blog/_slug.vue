<template>
  <article>
    <Container>
      <div class="wrapper">
        <n-link class="back" to="/">
          ← Voltar ao início
        </n-link>

        <div class="post-meta">
          <span>{{ new Date(post.updatedAt).toLocaleDateString() }}</span>
        </div>

        <h1 class="title">
          {{ post.title }}
        </h1>

        <h2 class="description">
          {{ post.description }}
        </h2>

        <Content :content="post" />

        <PrevNext :prev="prev" :next="next" />
      </div>
    </Container>
  </article>
</template>

<script>
import seo from '@/helpers/seo'

export default {
  components: {
    Container: () => import('@/components/Container'),
    Content: () => import('@/components/Content'),
    PrevNext: () => import('@/components/PrevNext'),
  },
  async asyncData({ $content, params }) {
    const post = await $content('posts', params.slug).fetch()

    const [prev, next] = await $content('posts')
      .only(['title', 'slug'])
      .sortBy('createdAt', 'asc')
      .surround(params.slug)
      .fetch()

    return { post, prev, next }
  },
  head() {
    return seo(this.post)
  },
}
</script>

<style lang="scss">
.img {
  height: 30vh;
  margin-top: 50px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  @media (max-width: 720px) {
    height: 30vh;
    padding: 20px;
  }
}

.wrapper {
  max-width: 800px;
  margin: 0 auto;
}

.post-meta {
  font-size: 14px;
}

.back {
  display: block;
  margin-bottom: 40px;
  color: var(--colorPrimary);
}

.title {
  margin: 20px 0;
  font-size: 40px;
  font-weight: 600;

  @media (max-width: 720px) {
    font-size: 30px;
  }
}

.description {
  font-size: 20px;
  font-weight: 400;
  letter-spacing: -0.45px;
}
</style>
