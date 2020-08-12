---
title: Como criar um blog com Nuxt.js - Parte 1
description: Quais foram as bibliotecas utilizadas e porquê de cada uma delas.
image: /assets/images/nuxt.jpg
date: 2020-08-08 07:16:12
---
Enquato todos (pelo menos para mim) estão criando blogs utilizando Gatsby, porquê eu decidi criar meu blog utilizando Nuxt? O Vue é meu framework front-end favorito, ele possui um ecossistema completo e todos eles são desenvolvidos pelo mesmo time do Vue, com isso temos um integração melhor em todas as partes do seu projeto: Vue, Vuex, Vue Router.

## Ferramentas utilizadas

* Vue
* Nuxt
* Netlify CMS

## Vue

É meu framework front-end favorito, já trabalhei com Angular 2+ e React, porém o que mais gostei de utilizar foi o Vue.

## Nuxt

É o Next.js do Vue, É o Vue em SSR (Server Side Rendering) ou SSG (Static Site Generation), ou seja, rederizado no servidor, ou mesmo gerar sites estáticos (como este).

```bash
├── components
│   ├── Avatar
│   │   ├── index.js
│   │   └── styled.js
│   ├── Course
│   │   ├── Image.js
│   │   ├── index.js
│   │   └── styled.js
│   ├── Layout
│   │   ├── index.js
│   │   └── styled.js
│   ├── MenuBar
│   │   ├── index.js
│   │   ├── styled.js
│   │   └── trackers.js
│   ├── MenuLinks
│   │   ├── content.js
│   │   ├── index.js
│   │   └── styled.js
...
```

## Netlify CMS

É onde este post está sendo escrito, ele é um gerador de conteúdo, um editor de texto markdown onde após publicar o post, ele gera um pull-request no github, basta aprovar e pronto, seu post está no ar.

## Site estático (SSG)

Em um site estático (ou gerado estaticamente), o fluxo é bem simples:

Caso seja um site gerado estáticamente, nós iremos fazer as requisições para uma API (ou até um conjunto de Markdown), vamos pegar esses dados e "colar" com os arquivos de template/componentes e iremos gerar a partir dali os arquivos de HTML, CSS e JS.

A partir daí, nós subimos esses arquivos em um servidor (que pode inclusive ser uma CDN) e não haverá nenhum processo mais ocorrendo no lado do servidor mais. Toda vez que um usuário requisitar uma página, nós vamos pegar o conteúdo daquela página e vamos entregar, como os arquivos foram gerados estaticamente, nenhuma chamada extra será feita e a página já vai ter incluso o HTML total da página, isso inclui as meta-tags e tudo mais.

## Vamos começar

Primeiro vamos preparar nosso ambiente de desenvolvimento, você precisar ter instalado em sua máquina:

* [Node](https://nodejs.org/en/)
* Editor de texto favorito - [Recomendo o VS Code](https://code.visualstudio.com/)
* [Git](https://git-scm.com/)

Não é necessário você ser um expert nessas tecnologias, mas como vamos construir um blog com muitas funcionalidades, eu espero que você tenha ao menos um pouco de experiência com as tecnologias abaixo:

```bash
mkdir <project-name>
cd <project-name>
```

Rode o comando `npm init -y`

```bash
npm install nuxt # OR yarn add nuxt
```

