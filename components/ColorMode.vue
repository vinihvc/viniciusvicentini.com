<template>
  <div class="toggle-wrapper" @click="toggleColor">
    <div class="toggle-inner" />
  </div>
</template>

<script>
export default {
  methods: {
    toggleColor(color) {
      const { preference } = this.$colorMode

      this.$colorMode.preference = preference === 'dark' ? 'light' : 'dark'
    },
  },
}
</script>

<style lang="scss" scoped>
.toggle-wrapper {
  width: 50px;
  padding: 5px;
  background-color: var(--color);
  display: block;
  border-radius: 50px;
  cursor: pointer;
  transition: background-color 0.2s ease-in;
  border: 1px solid var(--bg);

  .toggle-inner {
    width: 20px;
    height: 15px;
    background-color: var(--bg);
    border-radius: 50px;
    margin-left: 0;
    transition: margin-left 0.2s ease-in, background-color 0.2s ease-in;
  }
}

.dark-mode {
  .toggle-inner {
    margin-left: 20px;
  }
}
</style>
