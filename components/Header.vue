<template>
  <header>
    <Container>
      <n-link class="brand" to="/">Vicentini Vicentini</n-link>

      <div class="actions">
        <n-link to="/buscar">
          <SearchIcon />
        </n-link>

        <ColorMode />
      </div>
    </Container>
  </header>
</template>

<script>
import { SearchIcon } from 'vue-feather-icons'

export default {
  components: {
    Container: () => import('@/components/Container'),
    ColorMode: () => import('@/components/ColorMode'),
    SearchIcon,
  },
}
</script>

<style lang="scss" scoped>
header {
  height: 60px;
  position: sticky;
  top: 0;
  background-color: rgba(15, 15, 15, 0.9);
  z-index: 1020;
  margin-bottom: 3rem;

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

  a {
    color: #fff;
  }

  .brand {
    font-style: italic;
    font-size: 20px;
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
}
</style>
