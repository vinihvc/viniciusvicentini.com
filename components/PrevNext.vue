<template>
  <div class="wrapper">
    <div class="more">Mais postagens</div>

    <div class="cards">
      <n-link
        v-if="prev"
        :to="{ name: 'blog-slug', params: { slug: prev.slug } }"
      >
        {{ prev.title }}
      </n-link>

      <span v-else>&nbsp;</span>

      <n-link
        v-if="next"
        :to="{ name: 'blog-slug', params: { slug: next.slug } }"
      >
        {{ next.title }}
      </n-link>

      <span v-else>&nbsp;</span>
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
  margin-top: 5rem;

  .more {
    font-size: 1.2rem;
    font-weight: 500;
  }
}

.cards {
  display: grid;
  grid-auto-rows: auto;
  grid-gap: 2rem;
  grid-template-columns: repeat(1, 1fr);
  margin: 30px 0;

  @include md {
    grid-template-columns: repeat(2, 1fr);
  }
}
a {
  font-size: 1.1rem;
  font-weight: 500;
  line-height: 1.3em;

  background-color: var(--bgSecondary);
  border-radius: $borderRadius;
  padding: 20px;
}
</style>
