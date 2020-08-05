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
  props: ['items'],
}
</script>

<style lang="scss" scoped>
li {
  display: inline-block;

  &:not(:last-child) {
    .divider {
      &::after {
        content: '·';
        font-weight: 900;
        margin-right: 7px;
        margin-left: 5px;
      }
    }
  }
}
</style>
