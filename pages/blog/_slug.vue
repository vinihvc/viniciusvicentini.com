<template>
  <article>
    <div class="img" :style="{ backgroundImage: `url(${post.image})` }" />

    <Container>
      <div class="wrapper">
        <n-link class="back" to="/">← Voltar na listagem</n-link>

        <div class="post-meta">
          <span>{{ new Date(post.updatedAt).toLocaleDateString() }}</span>

          <span>
            ·
          </span>

          <span>Leitura de 5 min</span>
        </div>

        <h1 class="title">{{ post.title }}</h1>

        <h2 class="description">{{ post.description }}</h2>

        <nuxt-content :document="post" />

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
  background-repeat: no-repeat;
  height: 30vh;
  background-position: center;
  background-size: cover;
  margin-top: -3rem;

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
  margin: 20px 0;
  display: block;
  color: var(--colorPrimary);
}

.title {
  font-size: 40px;
  font-weight: 600;
  margin: 20px 0;

  @media (max-width: 720px) {
    font-size: 30px;
  }
}

.description {
  font-size: 20px;
  font-weight: 400;
  letter-spacing: -0.45px;
  line-height: 1.5em;
}

.nuxt-content {
  margin-top: 30px;

  p a,
  li a {
    color: var(--colorPrimary);
  }

  p,
  h1,
  h2,
  h3,
  h4,
  ul,
  ol,
  .tags,
  iframe,
  p {
    margin: 0 auto 1.6rem;
  }
  h1,
  h2,
  h3,
  h4,
  h5 {
    margin: 2.4rem auto 1rem;
  }
  ul,
  ol {
    list-style: disc;
    padding-left: 1.5rem;
    margin: 0 auto 1.6rem;
  }
  ul ul {
    list-style: circle;
  }
  li {
    padding: 0.625rem 0;
    & > ul {
      margin-bottom: 0;
    }
  }
  p,
  li {
    code {
      word-wrap: break-word;
    }
  }
  img {
    display: block;
    max-width: 100%;
    margin: 1.875rem auto;
  }
  iframe {
    padding: 0 1.6rem 1.6rem;
    width: 100%;
  }
  blockquote {
    color: var(--color);
    border-left: 0.3rem solid var(--secondaryColor);
    padding: 0 1.875rem;
    margin: 3.125rem auto;
  }
  hr {
    border: 1px solid 1px;
    margin: 3rem auto;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    font-weight: 800;
    letter-spacing: 0.069rem;
    line-height: 1.4;
  }
  h1 {
    font-size: 2.8rem;
  }
  h2 {
    font-size: 2.1rem;
  }
  h3 {
    font-size: 1.6rem;
  }
  h4 {
    font-size: 1.4rem;
  }
  h5 {
    font-size: 1.2rem;
  }
  strong {
    font-weight: 700;
  }

  p,
  h2,
  ul {
    color: var(--color);
    font-size: 1.25rem;
    font-weight: 300;
    line-height: 1.7;
    letter-spacing: 0.069rem;
  }

  h2 {
    font-weight: 800;
    letter-spacing: 0.069rem;
    line-height: 1.4;
    font-size: 2.1rem;
    margin: 2.4rem auto 1rem;
  }
  ul,
  ol {
    list-style: disc;
    padding-left: 1.5rem;
    margin: 0 auto 1.6rem;
  }
  ul ul {
    list-style: circle;
  }
  li {
    padding: 0.625rem 0;
    & > ul {
      margin-bottom: 0;
    }
  }
}
</style>
