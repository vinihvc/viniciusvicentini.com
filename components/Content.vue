<template>
  <nuxt-content :document="content" />
</template>

<script>
export default {
  props: {
    content: {
      type: Object,
      required: true,
    },
  },
}
</script>

<style lang="scss">
.nuxt-content {
  max-width: 100%;
  padding: 2rem 0;
  margin: auto;

  @include md {
    padding: 2rem;
  }

  p,
  h1,
  h2,
  h3,
  h4,
  ul,
  ol,
  iframe {
    font-size: 1.25rem;
    font-weight: 300;
    line-height: 1.7;
    letter-spacing: 0.069rem;
    word-break: break-word;
  }

  h1,
  h2,
  h3,
  h4,
  h5 {
    margin: 2.4rem auto 1rem;
    font-weight: 800;
    line-height: 1.4;
    letter-spacing: 0.069rem;
  }

  ul,
  ol {
    padding-left: 2.5rem;
    margin: 0 auto 1.6rem;
    list-style: disc;
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
    width: auto;
    max-width: 100%;
    margin: 1.875rem auto;
  }

  iframe {
    width: 100%;
    padding: 0 1rem;

    @include md {
      padding: 0 1.6rem 1.6rem;
    }
  }

  blockquote {
    padding: 0 1.875rem;
    margin: 3.125rem auto;
    color: var(--colorPrimary);
    border-left: 0.3rem var(--colorPrimary);
  }

  hr {
    margin: 3rem auto;
    border: 1px solid var(--colorPrimary);
  }

  h1 {
    font-size: 1.875rem;

    @include md {
      font-size: 2.8rem;
    }
  }

  h2 {
    font-size: 1.375rem;

    @include md {
      font-size: 2.1rem;
    }
  }

  h3 {
    font-size: 1.125rem;

    @include md {
      font-size: 1.6rem;
    }
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

  a {
    color: var(--colorPrimary);
    text-decoration: none;
    border-bottom: 1px dashed var(--colorPrimary);
    transition: opacity var(--transition);

    svg {
      color: var(--color);
    }

    &:hover {
      opacity: 0.8;
    }
  }
}
</style>
