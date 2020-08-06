<template>
  <section>
    <article class="about">
      <img
        src="https://avatars3.githubusercontent.com/u/16567830"
        alt="Foto de perfil"
      />

      <div class="about-resume">
        <h2>Vinicius Vicentini</h2>

        <h3>Front end developer</h3>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum
          accusantium quod sint excepturi, adipisci ratione vero, fuga unde
          obcaecati culpa atque voluptate, officiis libero nesciunt? Similique
          facere deleniti dolorem sapiente.
        </p>

        <n-link to="/sobre" prefetch>Veja mais</n-link>
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
    padding: 20px;
    background-color: var(--bgSecondary);
    margin: 0 auto;
    border-radius: $borderRadius;
    align-items: center;
    text-align: center;
    flex-direction: column;

    @include md {
      flex-direction: row;

      &-resume {
        text-align: left;
      }
    }

    h2 {
      font-weight: 400;
      margin-bottom: 5px;
    }

    h3 {
      font-weight: 300;
      margin-bottom: 20px;
    }

    p {
      margin-bottom: 10px;
    }

    a {
      text-decoration: underline;
      line-height: 40px;
    }

    img {
      margin-bottom: 25px;
      width: 100px;
      height: 100px;
      border-radius: 100px;
      object-fit: cover;

      @include md {
        margin-right: 25px;
        width: 150px;
        height: 150px;
      }
    }
  }
}
</style>
