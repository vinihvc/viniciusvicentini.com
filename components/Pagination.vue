<template>
  <nav class="pagination">
    <div v-if="page !== 1" class="pagination-button" @click="$emit('previous')">
      ← Anterior
    </div>

    <span> {{ page }} de {{ total }} </span>

    <div v-if="page < total" class="pagination-button" @click="$emit('next')">
      Próximo →
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    page: {
      type: [String, Number],
      required: true,
    },
    total: {
      type: [String, Number],
      required: true,
    },
  },
}
</script>

<style lang="scss" scoped>
.pagination {
  display: flex;
  justify-content: space-between;
  padding: 10px 20px;
  margin: 50px 0;
  line-height: 40px;
  background-color: var(--bgSecondary);
  border-radius: var(--borderRadius);

  &-button {
    cursor: pointer;
  }
}
</style>
