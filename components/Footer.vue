<template>
  <footer>
    <Container>
      <div class="copyright">
        &copy; {{ new Date().getFullYear() }}. made by

        <a
          class="link"
          href="https://www.linkedin.com/in/viniciushvc"
          target="_blank"
          rel="noreferrer noopener"
        >
          Vinicus Vicentini
        </a>

        <div class="social">
          <a
            v-for="item in items"
            :href="item.link"
            :key="item.name"
            target="_blank"
            rel="noreferrer noopener"
          >
            <component :is="`${item.name}-icon`" />
          </a>
        </div>
      </div>
    </Container>
  </footer>
</template>

<script>
import { TwitterIcon, GithubIcon, LinkedinIcon } from 'vue-feather-icons/'

export default {
  components: {
    Container: () => import('@/components/Container'),
    TwitterIcon,
    GithubIcon,
    LinkedinIcon,
  },

  data: () => ({
    items: [
      {
        name: 'github',
        link: 'https://github.com/viniciushvc',
      },
      {
        name: 'linkedin',
        link: 'https://www.linkedin.com/in/viniciushvc/',
      },
      {
        name: 'twitter',
        link: 'https://twitter.com/ViniciusHVC',
      },
    ],
  }),
}
</script>

<style lang="scss" scoped>
.copyright {
  text-align: center;

  a {
    transition: opacity 0.5s ease 0s;

    &:hover {
      opacity: 0.8;
      color: var(--colorPrimary);
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
