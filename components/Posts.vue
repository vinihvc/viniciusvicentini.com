<template>
  <section class="container">
    <div class="posts">
      <article v-for="post of posts" :key="post.slug" class="post-item">
        <nuxt-link :to="{ name: 'blog-slug', params: { slug: post.slug } }">
          <img v-if="post.img" :src="post.img" />

          <div>
            <h2>{{ post.title }}</h2>
            <p>
              {{ post.description }}
            </p>
          </div>
        </nuxt-link>
      </article>
    </div>
  </section>
</template>

<script>
export default {
  props: ['posts'],
}
</script>

<style lang="scss" scoped>
.posts {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: auto;
  grid-gap: 1rem;

  .post-item {
    img {
      width: 100%;
      object-fit: cover;
      height: 220px;
    }
  }
}
</style>
