<template>
  <ul>
    <li v-for="item in items" :key="item">
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
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
li {
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
</style>
