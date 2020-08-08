<template>
  <div class="wrapper">
    <div v-if="prev && next" class="more">
      Mais postagens
    </div>

    <div class="cards">
      <n-link
        v-if="prev"
        :to="{ name: 'blog-post-slug', params: { slug: prev.slug } }"
      >
        {{ prev.title }}
      </n-link>

      <n-link
        v-if="next"
        :to="{ name: 'blog-post-slug', params: { slug: next.slug } }"
      >
        {{ next.title }}
      </n-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    prev: {
      type: Object,
      default: () => null,
    },
    next: {
      type: Object,
      default: () => null,
    },
  },
}
</script>

<style lang="scss" scoped>
.wrapper {
  margin-top: 50px;

  .more {
    font-size: 16px;
    font-weight: 500;
  }
}

.cards {
  display: grid;
  grid-auto-rows: auto;
  grid-gap: 20px;
  grid-template-columns: repeat(1, 1fr);
  margin: 30px 0;

  @include md {
    grid-template-columns: repeat(2, 1fr);
  }
}
a {
  padding: 20px;
  font-size: 15px;
  font-weight: 500;
  background-color: var(--bgSecondary);
  border-radius: var(--borderRadius);
}
</style>
