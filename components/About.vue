<template>
  <section class="container">
    <article class="about">
      <img
        src="https://avatars3.githubusercontent.com/u/16567830"
        alt="Foto de perfil"
      />

      <div>
        <h2>Vinicius Vicentini</h2>

        <h3>Front end developer</h3>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum
          accusantium quod sint excepturi, adipisci ratione vero, fuga unde
          obcaecati culpa atque voluptate, officiis libero nesciunt? Similique
          facere deleniti dolorem sapiente.
        </p>

        <nuxt-link to="/sobre">Veja mais</nuxt-link>
      </div>
    </article>
  </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
section {
  padding: 25px 0 0;
  position: relative;

  .about {
    display: flex;
    padding: 20px;
    background-color: var(--border-color);
    margin: 0 auto;
    border-radius: 8px;
    align-items: center;
    align-items: center;

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
      line-height: 40px;
    }

    img {
      margin-right: 25px;
      width: 150px;
      height: 150px;
      border-radius: 100px;
      object-fit: cover;
    }
  }
}
</style>
