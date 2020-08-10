<template>
  <footer class="footer">
    <Container>
      <div class="footer-copyright">
        &copy; {{ new Date().getFullYear() }}

        <a
          class="link"
          href="https://www.linkedin.com/in/viniciushvc"
          target="_blank"
          rel="noreferrer noopener"
        >
          Vinicius Vicentini
        </a>

        <div class="footer-social">
          <a
            v-for="item in items"
            :key="item.name"
            :href="item.link"
            :title="item.name"
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
        name: 'Github',
        link: 'https://github.com/viniciushvc',
      },
      {
        name: 'Linkedin',
        link: 'https://www.linkedin.com/in/viniciushvc/',
      },
      {
        name: 'Twitter',
        link: 'https://twitter.com/ViniciusHVC',
      },
    ],
  }),
}
</script>

<style lang="scss" scoped>
.footer {
  padding: 50px 0;

  &-copyright {
    text-align: center;

    a {
      transition: var(--transition);

      &:hover {
        color: var(--colorPrimary);
      }

      svg {
        margin: 0 20px;
      }
    }
  }

  &-social {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }
}
</style>
