<template>
  <footer class="container">
    <div class="copyright">
      &copy; {{ new Date().getFullYear() }} . built with care ♥ by

      <a
        class="link"
        href="https://www.linkedin.com/in/viniciushvc"
        target="_blank"
        rel="noreferrer noopener"
      >
        Vicentini
      </a>

      <div class="social">
        <a
          href="https://www.twitter.com/viniciushvc"
          target="_blank"
          rel="noreferrer noopener"
        >
          <TwitterIcon />
        </a>
        <a
          href="https://github.com/viniciushvc"
          target="_blank"
          rel="noreferrer noopener"
        >
          <GithubIcon />
        </a>
        <a
          href="https://www.linkedin.com/in/viniciushvc"
          target="_blank"
          rel="noreferrer noopener"
        >
          <LinkedinIcon />
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
import { TwitterIcon, GithubIcon, LinkedinIcon } from 'vue-feather-icons/'

export default {
  components: {
    TwitterIcon,
    GithubIcon,
    LinkedinIcon,
  },
}
</script>

<style lang="scss" scoped>
.copyright {
  text-align: center;

  a {
    text-decoration: none;
    transition: opacity 0.5s ease 0s;

    &:hover {
      opacity: 0.8;
      color: var(--color-primary);
    }

    svg {
      margin: 0 20px;
    }
  }
}

.social {
  padding: 20px 0;
  display: flex;
  justify-content: center;
}
</style>
