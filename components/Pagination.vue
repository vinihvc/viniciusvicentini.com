<template>
  <nav class="pagination">
    <div v-if="page !== 1" class="pagination-button" @click="$emit('previous')">
      Anterior
    </div>

    <span class="pagination-info"> {{ page }} de {{ total }} </span>

    <div v-if="page < total" class="pagination-button" @click="$emit('next')">
      Próximo →
    </div>
  </nav>
</template>

<script>
export default {
  props: ['page', 'total'],
}
</script>

<style lang="scss" scoped>
.pagination {
  display: flex;
  justify-content: space-between;
  margin: 50px 0;
  line-height: 40px;
  background-color: var(--bgSecondary);
  border-radius: $borderRadius;
  padding: 10px 20px;

  &-button {
    cursor: pointer;
  }
}
</style>
