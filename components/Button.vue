<template>
  <n-link :to="to" :style="{ backgroundColor: color }">
    <slot />
  </n-link>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      default: 'transparent',
    },
  },
}
</script>

<style lang="scss" scoped>
a {
  display: inline-flex;
  padding: 10px 25px;
  font-weight: 600;
  border: 1px solid var(--border);
  border-radius: var(--borderRadius);
  transition: 0.3s;

  &:hover {
    border: 1px solid var(--color);
  }
}
</style>
