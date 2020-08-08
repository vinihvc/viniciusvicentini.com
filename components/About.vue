<template>
  <section>
    <div class="about">
      <img src="/assets/images/profile-image.jpg" alt="Foto de perfil" />

      <div class="about-resume">
        <h1>Vinicius Vicentini</h1>

        <h2>Front end developer</h2>

        <n-link to="/sobre" prefetch>
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
section {
  .about {
    padding: 15px;
    text-align: center;
    background-color: var(--bgSecondary);
    border-radius: var(--borderRadius);

    img {
      width: 100px;
      height: 100px;
      margin-bottom: 20px;
      border-radius: 100px;
      object-fit: cover;
    }

    h1 {
      margin-bottom: 5px;
      font-size: 20px;
      font-weight: 400;
    }

    h2 {
      margin-bottom: 20px;
      font-weight: 300;
    }

    a {
      line-height: 40px;
      border-bottom: 1px dashed var(--color);
      transition: var(--transition);

      &:hover {
        color: var(--colorPrimary);
        border-bottom: 1px solid var(--colorPrimary);
      }
    }
  }
}
</style>
