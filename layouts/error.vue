<template>
  <div class="container">
    <h1 v-if="error.statusCode === 404">Page not found</h1>
    <h1 v-else>An error occurred</h1>
    <n-link to="/" prefetch>Home page</n-link>
  </div>
</template>

<script>
export default {
  props: ['error'],
}
</script>
