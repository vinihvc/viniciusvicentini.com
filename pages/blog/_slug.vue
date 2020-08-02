<template>
  <article class="container">
    <h1>{{ post.title }}</h1>

    <p>{{ post.description }}</p>

    <div class="post-meta">
      <span>{{ new Date(post.updatedAt).toLocaleDateString() }}</span>

      <span class="spacer" />

      <span>5 min de leitura</span>
    </div>

    <nuxt-content :document="post" />
  </article>
</template>
<script>
export default {
  async asyncData({ $content, params }) {
    const post = await $content('posts', params.slug).fetch()

    return { post }
  },
}
</script>

<style lang="scss" scoped>
.post-meta {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  background-color: var(--border-color);
  width: 100%;
  max-width: 500px;
  margin: 50px auto;
  border-radius: 8px;

  .spacer {
    width: 2px;
    height: 16px;
    background-color: var(--color);
    margin: 0 15px;
    border-radius: 1px;
  }
}

.nuxt-content h2 {
  font-weight: bold;
  font-size: 28px;
}
.nuxt-content h3 {
  font-weight: bold;
  font-size: 22px;
}
.nuxt-content p {
  margin-bottom: 20px;
}

img {
  width: 100%;
  height: 500px;
  object-fit: cover;
}
</style>
