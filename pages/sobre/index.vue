<template>
  <Container>
    <Content :content="about" />
  </Container>
</template>

<script>
export default {
  components: {
    Container: () => import('@/components/Container'),
    Content: () => import('@/components/Content'),
  },
  async asyncData({ $content }) {
    const about = await $content('about').fetch()

    return { about }
  },
}
</script>
