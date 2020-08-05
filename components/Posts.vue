<template>
  <section class="posts">
    <article v-for="post of posts" :key="post.slug" class="post-item">
      <n-link :to="{ name: 'blog-slug', params: { slug: post.slug } }" prefetch>
        <time class="post-date">
          {{ new Date(post.date).toLocaleDateString() }}

          <span>
            · Leitura de 10 min
          </span>
        </time>

        <img :src="post.thumbnail" class="post-image" />

        <div class="post-content">
          <h1 class="post-title">{{ post.title }}</h1>

          <h2 class="post-description">
            {{ post.description }}
          </h2>

          <div class="post-tags">
            <Tags :items="['Javascript', 'Vue']" />
          </div>
        </div>
      </n-link>
    </article>
  </section>
</template>

<script>
export default {
  props: ['posts'],
  components: {
    Tags: () => import('@/components/Tags'),
  },
}
</script>

<style lang="scss" scoped>
.posts {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-auto-rows: auto;
  grid-gap: 2rem;

  @include tablet {
    grid-template-columns: repeat(2, 1fr);
  }

  .post-item {
    .post-date {
      font-size: 12px;
      font-weight: 400;
      margin-bottom: 0.5rem;
      display: block;
    }

    .post-image {
      width: 100%;
      height: 200px;
      border-radius: 5px 5px 0 0;
      object-fit: cover;
    }

    .post-content {
      margin-top: 0.5rem;

      .post-title {
        font-weight: 500;
        font-size: 18px;
        margin-bottom: 1rem;
      }

      .post-description {
        font-size: 14px;
        margin-bottom: 1.5rem;
      }

      .post-tags {
        display: flex;
        align-items: center;
        font-size: 14px;

        svg {
          margin-right: 0.5rem;
        }
      }
    }
  }
}
</style>
