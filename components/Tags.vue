<template>
  <ul class="tags">
    <li v-for="item in items" :key="item" class="tags-item">
      {{ item }}

      <span class="divider" />
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style lang="scss" scoped>
.tags {
  &-item {
    display: inline-block;

    &:not(:last-child) {
      .divider {
        &::after {
          margin-right: 7px;
          margin-left: 5px;
          font-weight: 900;
          content: '·';
        }
      }
    }
  }
}
</style>
