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

## Vamos começar

Primeiro vamos preparar nosso ambiente de desenvolvimento, você precisar ter instalado em sua máquina:

* Node
* Editor de texto - Recomendo o VS Code
* Git

Não é necessário você ser um expert nessas tecnologias, mas como vamos construir um blog com muitas funcionalidades, eu espero que você tenha ao menos um pouco de experiência com as tecnologias abaixo:

```bash
mkdir <project-name>
cd <project-name>
```

Rode o comando `npm init -y`

```bash
npm install nuxt # OR yarn add nuxt
```

