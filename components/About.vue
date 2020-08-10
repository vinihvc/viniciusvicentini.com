<template>
  <section class="about">
    <div class="about-card">
      <img
        src="/assets/images/profile-image.jpg"
        alt="Foto de perfil do autor"
        class="about-image"
      />

      <div class="about-resume">
        <h1 class="about-name">
          Vinicius Vicentini
        </h1>

        <h2 class="about-role">
          Front end developer
        </h2>

        <n-link to="/sobre" class="about-more">
          Mais sobre Vinicius
        </n-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.about {
  &-card {
    padding: 15px;
    text-align: center;
    background-color: var(--bgSecondary);
    border-radius: var(--borderRadius);
  }

  &-image {
    width: 100px;
    height: 100px;
    margin-bottom: 20px;
    border-radius: 100px;
    object-fit: cover;
  }

  &-name {
    margin-bottom: 5px;
    font-size: 20px;
    font-weight: 400;
  }

  &-role {
    margin-bottom: 20px;
    font-weight: 300;
  }

  &-more {
    line-height: 40px;
    border-bottom: 1px dashed var(--color);
    transition: var(--transition);

    &:hover {
      color: var(--colorPrimary);
      border-bottom: 1px solid var(--colorPrimary);
    }
  }
}
</style>
