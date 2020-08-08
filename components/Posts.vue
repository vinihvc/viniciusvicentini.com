<template>
  <section class="posts">
    <n-link
      v-for="post of posts"
      :key="post.slug"
      :to="{ name: 'blog-slug', params: { slug: post.slug } }"
      prefetch
      class="post-item"
    >
      <article>
        <time class="post-date">
          {{ new Date(post.date).toLocaleDateString() }}

          <span>
            · Leitura de 10 min
          </span>
        </time>

        <h1 class="post-title">
          {{ post.title }}
        </h1>

        <h2 class="post-description">
          {{ post.description }}
        </h2>

        <div class="post-tags">
          <Tags :items="post.tags" />
        </div>
      </article>
    </n-link>
  </section>
</template>

<script>
export default {
  components: {
    Tags: () => import('@/components/Tags'),
  },
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.posts {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-auto-rows: auto;
  grid-gap: 32px;

  @include md {
    grid-template-columns: repeat(2, 1fr);
  }

  .post-item {
    padding: 20px;
    border: 1px solid var(--border);
    border-radius: var(--borderRadius);
    transition: var(--transition);

    &:hover {
      border: 1px solid var(--colorPrimary);
    }

    .post-date {
      display: block;
      margin-bottom: 8px;
      font-size: 12px;
      font-weight: 400;
    }

    .post-title {
      max-height: 48px;
      margin-bottom: 0;
      font-size: 20px;
      text-overflow: -o-ellipsis-lastline;
    }

    .post-description {
      margin-top: 15px;
      margin-bottom: 0;
      overflow: hidden;
      font-weight: 500;
      line-height: 1.5;
    }

    .post-tags {
      display: flex;
      align-items: center;
      margin-top: 16px;
      font-size: 14px;
    }
  }
}
</style>
