<template>
  <Container>
    <h1 v-if="error.statusCode === 404">Page not found</h1>
    <h1 v-else>An error occurred</h1>
    <n-link to="/" prefetch>Home page</n-link>
  </Container>
</template>

<script>
export default {
  props: ['error'],
  components: {
    Container: () => import('@/components/Container'),
  },
}
</script>
