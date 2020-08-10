<template>
  <input
    v-model="search"
    type="search"
    class="search"
    placeholder="Ex: CSS, Javascript, Carreira"
    @input="$emit('input', search)"
  />
</template>

<script>
export default {
  data: () => ({
    search: '',
  }),
}
</script>

<style lang="scss" scoped>
.search {
  display: block;
  width: 100%;
  padding: 10px 20px;
  color: var(--color);
  background-color: transparent;
  border: 1px solid var(--border);
  outline: none;
}
</style>
