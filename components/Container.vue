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
  height: 100%;
  padding: 0 15px;
  margin: 0 auto;
}
</style>
