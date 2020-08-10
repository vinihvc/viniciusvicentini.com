<template>
  <article class="post">
    <Container>
      <div class="post-wrapper">
        <n-link class="post-back" to="/">
          ← Voltar ao início
        </n-link>

        <time class="post-date">
          {{ new Date(post.updatedAt).toLocaleDateString() }}
        </time>

        <h1 class="post-title">
          {{ post.title }}
        </h1>

        <h2 class="post-description">
          {{ post.description }}
        </h2>

        <Content :content="post" class="post-content" />

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

<style lang="scss" scoped>
.post {
  &-wrapper {
    max-width: 900px;
    margin: 0 auto;
  }

  &-back {
    display: inline-block;
    margin-bottom: 40px;
    line-height: 30px;
    color: var(--colorPrimary);
    border-bottom: 2px solid transparent;
    transition: var(--transition);

    &:hover {
      color: var(--colorPrimary);
      border-bottom: 2px solid var(--colorPrimary);
    }
  }

  &-date {
    display: block;
    font-size: 14px;
  }

  &-title {
    margin: 20px 0;
    font-size: 40px;
    font-weight: 700;

    @media (max-width: 720px) {
      font-size: 30px;
    }
  }

  &-description {
    font-size: 25px;
    font-weight: 400;
    letter-spacing: -0.45px;
  }

  &-content {
    padding: 2rem 0;
  }
}
</style>
