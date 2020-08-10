<template>
  <header class="header">
    <Container>
      <nav>
        <n-link class="header-brand" to="/">
          Vinicius Vicentini
        </n-link>

        <div class="header-actions">
          <!-- <n-link to="/buscar" prefetch>
            <SearchIcon />
          </n-link> -->
          <ColorMode />
        </div>
      </nav>
    </Container>
  </header>
</template>

<script>
// import { SearchIcon } from 'vue-feather-icons'

export default {
  components: {
    Container: () => import('@/components/Container'),
    ColorMode: () => import('@/components/ColorMode'),
    // SearchIcon,
  },
}
</script>

<style lang="scss" scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 1020;
  height: 60px;
  margin-bottom: 48px;
  background-color: rgba(15, 15, 15, 0.9);

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
  }

  &-brand {
    font-size: 16px;
    font-style: italic;
    font-weight: 300;
    color: #fff;

    @include md {
      font-size: 25px;
    }

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

  &-actions {
    display: flex;
    align-items: center;

    :not(:last-child) {
      margin-right: 20px;
    }
  }
}
</style>
