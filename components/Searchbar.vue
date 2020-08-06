<template>
  <input
    v-model="search"
    type="search"
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
input {
  padding: 10px 20px;
  outline: none;
  border: 1px solid var(--border);
  color: var(--color);
  width: 100%;
  background-color: transparent;
}
</style>
