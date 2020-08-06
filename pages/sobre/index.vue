<template>
  <Container>
    <div class="about">
      <h2>Resumo</h2>

      <p>
        Sou de Brodowski, interior de São Paulo, proximo a Ribeirão Preto.
        Comecei a trabalhar como programador em 2016 como programador fullstack.
        Atualmente como programador Front-End.
      </p>

      <h2>Educação</h2>

      <ul>
        <li>
          2015-2016
          <ul>
            <li>Informática</li>

            <li>ETEC José Martimiano da Silva</li>
          </ul>
        </li>

        <li>
          2016-2019
          <ul>
            <li>Ciência da computação</li>

            <li>Centro Universitário Barão de Mauá</li>
          </ul>
        </li>
      </ul>

      <h2>Habilidades</h2>

      <ul>
        <li>HTML</li>
        <li>CSS (Sass)</li>
        <li>C</li>
        <li>C# e .NET</li>
        <li>Java</li>
        <li>Javascript</li>
        <li>Css Frameworks (Bootstrap, Materialize, Semantic UI)</li>
        <li>ReactJS / Redux / Flux</li>
        <li>Angular / RxJs</li>
        <li>Vue / Vuex</li>
        <li>NodeJS</li>
        <li>Git</li>
        <li>MySQL - Oracle</li>
        <li>O que eu não sei, aprendo rápido =)</li>
      </ul>
    </div>
  </Container>
</template>

<script>
export default {
  components: {
    Container: () => import('@/components/Container'),
  },
}
</script>

<style lang="scss" scoped>
.about {
  margin: 40px 0;
  p,
  h2,
  ul {
    color: var(--color);
    font-size: 1.25rem;
    font-weight: 300;
    line-height: 1.7;
    letter-spacing: 0.069rem;
  }

  h2 {
    font-weight: 800;
    letter-spacing: 0.069rem;
    line-height: 1.4;
    font-size: 2.1rem;
    margin: 2.4rem auto 1rem;
  }
  ul,
  ol {
    list-style: disc;
    padding-left: 1.5rem;
    margin: 0 auto 1.6rem;
  }
  ul ul {
    list-style: circle;
  }
  li {
    padding: 0.625rem 0;
    & > ul {
      margin-bottom: 0;
    }
  }
}
</style>
