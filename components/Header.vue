<template>
  <header>
    <Container>
      <n-link class="brand" to="/">
        Vinicius Vicentini
      </n-link>

      <div class="actions">
        <n-link to="/labs">
          labs
        </n-link>

        <n-link to="/portfolio">
          portfolio
        </n-link>

        <ColorMode />
      </div>
    </Container>
  </header>
</template>

<script>
export default {
  components: {
    Container: () => import('@/components/Container'),
    ColorMode: () => import('@/components/ColorMode'),
  },
}
</script>

<style lang="scss" scoped>
header {
  position: sticky;
  top: 0;
  z-index: 1020;
  height: 60px;
  margin-bottom: 48px;
  background-color: rgba(15, 15, 15, 0.9);

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
  }

  .nuxt-link-active {
    color: var(--colorPrimary);
  }

  .actions {
    display: flex;
    align-items: center;

    :not(:last-child) {
      margin-right: 10px;
    }
  }

  a {
    color: #fff;
  }

  .brand {
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
}
</style>
