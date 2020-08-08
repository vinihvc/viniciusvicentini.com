<template>
  <div class="wrapper">
    <div class="space">
      <div class="content">
        <h1>404</h1>

        <p>Houston we have a problem</p>

        <Button to="/">
          Voltar ao início
        </Button>
      </div>

      <img class="earth" src="/assets/icons/earth.svg" />

      <img class="moon" src="/assets/icons/moon.svg" />

      <div class="astronaut-box">
        <img class="astronaut" src="/assets/icons/astronaut.svg" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    Button: () => import('@/components/Button'),
  },
}
</script>

<style lang="scss" scoped>
.wrapper {
  height: 100vh;
  margin-top: -108px;
  background-image: linear-gradient(
    to right bottom,
    #6e366f,
    #6c3875,
    #6a3b7c,
    #673d82,
    #634089,
    #5e4088,
    #593f87,
    #543f86,
    #4e3c7d,
    #493874,
    #43346b,
    #3e3162
  );
}

.space {
  width: 100%;
  background-image: url('/assets/icons/space.svg');
  background-repeat: repeat;
  background-position: center;
}

.earth {
  position: absolute;
  top: 20%;
  left: 15%;
  width: 100px;
  animation: earth 150s infinite linear both;
}

.moon {
  position: absolute;
  top: 12%;
  left: 25%;
  width: 80px;
  transition: transform ease-in 0.5s;
  transform: rotate(0deg);

  @media (max-width: 600px) {
    left: 30%;
  }
}

.astronaut-box {
  position: absolute;
  top: 70%;
  right: 20%;
  will-change: transform;
  animation: move-astronaut 50s infinite linear both alternate;
}

.astronaut {
  position: absolute;
  right: 20%;
  width: 140px;
  will-change: transform;
  animation: rotate-astronaut 200s infinite linear both alternate;

  @media (max-width: 600px) {
    width: 120px;
  }
}

.content {
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;

  h1 {
    font-size: 150px;
    font-weight: 800;
    color: #fff;
    @media (max-width: 600px) {
      font-size: 100px;
    }
  }
  p {
    margin-bottom: 20px;
    font-size: 20px;
    color: #fff;
  }
}

@keyframes earth {
  100% {
    transition: transform 20s;
    -webkit-transform: rotate(-360deg);
    transform: rotate(-360deg);
  }
}
@keyframes move-astronaut {
  100% {
    -webkit-transform: translate(-160px, -160px);
    transform: translate(-160px, -160px);
  }
}
@keyframes rotate-astronaut {
  100% {
    -webkit-transform: rotate(-720deg);
    transform: rotate(-720deg);
  }
}
</style>
