<template>
  <div class="contributor">
    <a
      :href="contributor.url"
      :title="`Conheça o Github de ${contributor.title}`"
      target="blank"
    >
      <img
        :src="contributor.image"
        :alt="`Foto de perfil de ${contributor.title}`"
      />
      <p>{{ contributor.title }}</p>
    </a>
  </div>
</template>

<script>
export default {
  name: 'CContributor',
  props: {
    contributor: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>

<style lang="scss">
.contributor {
  max-width: 150px;
  padding: 0.25rem;
  text-align: center;

  img {
    width: 100px;
    border-radius: 100%;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
}
</style>
