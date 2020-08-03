<template>
  <article>
    <div class="img" :style="{ backgroundImage: `url(${post.thumbnail})` }" />

    <div class="container">
      <div class="wrapper">
        <div class="post-meta">
          <span>{{ new Date(post.updatedAt).toLocaleDateString() }}</span>

          <span>|</span>

          <span>5 min de leitura</span>
        </div>

        <h1 class="title">{{ post.title }}</h1>

        <p>{{ post.description }}</p>

        <div class="content">
          <nuxt-content :document="post" />
        </div>
      </div>
    </div>
  </article>
</template>

<script>
import seo from '@/helpers/seo'

export default {
  async asyncData({ $content, params }) {
    const post = await $content('posts', params.slug).fetch()

    return { post }
  },
  head() {
    return seo(this.post)
  },
}
</script>

<style lang="scss" scoped>
.img {
  background-repeat: no-repeat;
  height: 70vh;
  background-position: center;
  background-size: cover;

  @media (max-width: 720px) {
    height: 50vh;
    padding: 20px;
  }
}

.title {
  font-size: 50px;
  font-weight: 800;

  @media (max-width: 720px) {
    font-size: 30px;
  }
}

.wrapper {
  margin-top: -140px;
  background-color: var(--bg-secondary);
  padding: 50px;

  @media (max-width: 720px) {
    margin-top: 0;
    padding: 50px 0;
  }
}

.nuxt-content {
  margin: 40px 0;
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
    color: var(--primaryColor);
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
}
</style>
