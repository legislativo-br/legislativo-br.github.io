<template>
  <nav class="navigation">
    <nuxt-link to="/" title="Ir para a Página Principal">
      <figure class="logo">
        <img src="../assets/images/logo.png" alt="" />
      </figure>
    </nuxt-link>

    <ul class="links">
      <nuxt-link
        class="link-item"
        to="/states"
        title="Confira a página com os resultados por Estado"
      >
        Estados
      </nuxt-link>

      <nuxt-link class="link-item" to="/about" title="Conheça o projeto">
        Sobre
      </nuxt-link>

      <a
        target="blank"
        class="external-link"
        href="https://github.com/legislativo-br"
        title="Visite o repositório do projeto"
      >
        <i class="fab fa-github-square"></i>
      </a>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'CNav'
}
</script>

<style lang="scss">
.navigation {
  display: flex;
  justify-content: space-between;
  position: fixed;
  top: 0;
  right: 0;
  z-index: 2;
  width: 100%;
  padding: 1rem 2rem;
  background-color: $primary;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);

  @media screen and (max-width: 552px) {
    padding: 1rem;
  }

  .logo {
    width: 50px;
    height: 50px;
    overflow: hidden;
    border-radius: 100%;
  }

  .links {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 1.3rem;

    .link-item {
      position: relative;
      color: $white;
      padding: 0 1.25rem;

      &::before {
        content: '';
        display: block;
        position: absolute;
        top: -5px;
        right: 0;
        width: 100%;
        height: 2px;
        background-color: $accent;
        opacity: 0;
        transition: opacity 0.3s ease-out;
      }

      &:hover,
      &.nuxt-link-exact-active.nuxt-link-active {
        &::before {
          opacity: 1;
        }
      }

      @media screen and (max-width: 552px) {
        margin: 0 0.25rem;
        padding: 0 0.25rem;
      }
    }

    .external-link {
      color: $white;
      font-size: 1.5rem;
      padding-left: 1.25rem;

      &:hover {
        color: $accent;
      }

      @media screen and (max-width: 552px) {
        padding-left: 0.25rem;
      }
    }
  }
}
</style>
