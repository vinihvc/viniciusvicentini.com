<template>
  <header>
    <div class="container">
      <nuxt-link class="brand" to="/">Vicentini</nuxt-link>

      <div class="actions">
        <nuxt-link to="/buscar">
          <SearchIcon />
        </nuxt-link>

        <ColorMode />
      </div>
    </div>
  </header>
</template>

<script>
import { SearchIcon } from 'vue-feather-icons'

export default {
  components: {
    ColorMode: () => import('@/components/ColorMode'),
    SearchIcon,
  },
}
</script>

<style lang="scss" scoped>
header {
  height: 100px;

  .container {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .actions {
    display: flex;
    align-items: center;

    :nth-child(1) {
      margin-right: 20px;
    }
  }

  .brand {
    text-decoration: none;
    font-style: italic;
    font-size: 30px;
    font-weight: 300;
    color: var(--color);

    &::before,
    &::after {
      font-weight: 400;
    }

    &::before {
      content: '<';
    }

    &::after {
      content: ' />';
    }
  }
}
</style>
