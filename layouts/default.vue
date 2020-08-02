<template>
  <div>
    <Header />

    <main>
      <nuxt />
    </main>

    <Footer />
  </div>
</template>

<script>
export default {
  components: {
    Header: () => import("@/components/Header"),
    Footer: () => import("@/components/Footer"),
  },
};
</script>

<style></style>
