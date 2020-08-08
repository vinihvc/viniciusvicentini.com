<template>
  <footer>
    <Container>
      <div class="copyright">
        &copy; {{ new Date().getFullYear() }}

        <a
          class="link"
          href="https://www.linkedin.com/in/viniciushvc"
          target="_blank"
          rel="noreferrer noopener"
        >
          Vinicius Vicentini
        </a>

        <div class="social">
          <a
            v-for="item in items"
            :key="item.name"
            :href="item.link"
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
footer {
  padding: 20px 0;

  .copyright {
    text-align: center;

    a {
      transition: opacity 0.5s ease 0s;

      &:hover {
        color: var(--colorPrimary);
        opacity: 0.8;
      }

      svg {
        margin: 0 20px;
      }
    }
  }

  .social {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }
}
</style>
