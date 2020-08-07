<template>
  <section>
    <article class="about">
      <img src="/assets/images/profile-image.jpg" alt="Foto de perfil" />

      <div class="about-resume">
        <h2>Vinicius Vicentini</h2>

        <h3>Front end developer</h3>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum
          accusantium quod sint excepturi, adipisci ratione vero, fuga unde
          obcaecati culpa atque voluptate, officiis libero nesciunt? Similique
          facere deleniti dolorem sapiente.
        </p>

        <n-link to="/sobre" prefetch>
          Mais sobre Vinicius
        </n-link>
      </div>
    </article>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
section {
  position: relative;

  .about {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
    margin: 0 auto;
    text-align: center;
    background-color: var(--bgSecondary);
    border-radius: var(--borderRadius);

    @include md {
      flex-direction: row;

      &-resume {
        text-align: left;
      }
    }

    h2 {
      margin-bottom: 5px;
      font-weight: 400;
    }

    h3 {
      margin-bottom: 20px;
      font-weight: 300;
    }

    p {
      margin-bottom: 10px;
    }

    a {
      line-height: 40px;
      text-decoration: underline;
    }

    img {
      width: 100px;
      height: 100px;
      margin-bottom: 25px;
      border-radius: 100px;
      object-fit: cover;

      @include md {
        width: 150px;
        height: 150px;
        margin-right: 25px;
      }
    }
  }
}
</style>
