<template>
  <div>
    <div class="bg" />

    <div class="container">
      <div class="about">
        <h2>Resumo</h2>

        <p>
          Sou de Brodowski, interior de São Paulo, proximo a Ribeirão Preto.
          Comecei a trabalhar como programador em 2016 na empresa Datamob como
          programador fullstack e foi onde fiquei até o meio de 2019. Atualmente
          trabalho na Dryve como programador Front-End.
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
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.bg {
  width: 100%;
  height: 300px;
  background-color: #843b62;
}

.about {
  margin: 40px 0;
  p,
  h1,
  h2,
  h3,
  h4,
  ul,
  ol,
  .tags,
  iframe,
  .button-post {
    color: var(--primaryColor);
    font-size: 1.25rem;
    font-weight: 300;
    line-height: 1.7;
    letter-spacing: 0.069rem;
  }
  p {
    margin: 0 auto 1.6rem;
  }
  h1,
  h2,
  h3,
  h4,
  h5 {
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
  p,
  li {
    code {
      word-wrap: break-word;
    }
  }
  img {
    display: block;
    max-width: 100%;
    margin: 1.875rem auto;
  }
  iframe {
    padding: 0 1.6rem 1.6rem;
    width: 100%;
  }
  blockquote {
    color: var(--primaryColor);
    border-left: 0.3rem solid var(--secondaryColor);
    padding: 0 1.875rem;
    margin: 3.125rem auto;
  }
  hr {
    border: 1px solid 1px;
    margin: 3rem auto;
  }
  #twitter-widget-0,
  .instagram-media,
  .twitter-tweet {
    margin: 20px auto !important;
  }
  h1,
  h2,
  h3,
  h4,
  h5 {
    font-weight: 800;
    letter-spacing: 0.069rem;
    line-height: 1.4;
  }
  h1 {
    font-size: 2.8rem;
  }
  h2 {
    font-size: 2.1rem;
  }
  h3 {
    font-size: 1.6rem;
  }
  h4 {
    font-size: 1.4rem;
  }
  h5 {
    font-size: 1.2rem;
  }
  strong {
    font-weight: 700;
  }

  }
}
</style>
