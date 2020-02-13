<template>
  <div class="contributors">
    <h2 class="title">Conheça quem trabalha no projeto</h2>

    <div class="container">
      <CContributor
        v-for="(contributor, key) in contributors"
        :key="key"
        :contributor="contributor"
      />
    </div>
  </div>
</template>

<script>
import CContributor from './CContributor'

export default {
  name: 'CContributors',
  components: {
    CContributor
  },
  data: () => ({
    contributors: [
      {
        title: 'Emanuel Gonçalves',
        url: 'https://github.com/emanuelgsouza',
        image:
          'https://avatars3.githubusercontent.com/u/20342656?v=3&u=5e6a0e43ca2afbd8e1cf0b75022cff5f0c2dc7e8&s=400'
      }
    ]
  })
}
</script>

<style lang="scss">
.contributors {
  background-color: $primary;
  color: white;
  padding: 2rem;
  text-align: center;
  font-size: 1rem;

  .container {
    display: flex;
    justify-content: center;
  }

  .title {
    font-size: 1.3rem;
    margin-bottom: 1rem;
  }
}
</style>
