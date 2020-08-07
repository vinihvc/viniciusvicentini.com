<template>
  <div class="toggle-wrapper" @click="toggleColor">
    <div class="toggle-inner" />
  </div>
</template>

<script>
export default {
  methods: {
    toggleColor() {
      const { preference } = this.$colorMode

      this.$colorMode.preference = preference === 'dark' ? 'light' : 'dark'
    },
  },
}
</script>

<style lang="scss" scoped>
.toggle-wrapper {
  display: block;
  width: 50px;
  padding: 3.5px;
  cursor: pointer;
  background-color: var(--color);
  border: 1px solid var(--bg);
  border-radius: 50px;
  transition: background-color 0.2s ease-in;

  .toggle-inner {
    width: 20px;
    height: 15px;
    margin-left: 0;
    background-color: var(--bg);
    border-radius: 50px;
    transition: margin-left 0.2s ease-in, background-color 0.2s ease-in;
  }
}

.dark-mode {
  .toggle-inner {
    margin-left: 20px;
  }
}
</style>
