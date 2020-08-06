<template>
  <div class="container">
    <slot />
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.container {
  max-width: calc(1220px - (30px * 2));
  margin: 0 auto;
  padding: 0 15px;
}
</style>
