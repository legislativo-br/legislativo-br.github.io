<template>
  <div class="card">
    <div class="card-title">{{ title }}</div>

    <div class="card-content">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: 'CCard',
  props: {
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss">
.card {
  position: relative;
  border-radius: $card-radious;
  box-shadow: $box-shadow;
  background-color: $primary;
  color: white;
  text-align: left;
  overflow: hidden;

  /* for mobile screens */
  @media screen and (max-width: 527px) {
    width: 100%;
  }

  .card-title {
    text-align: center;
    margin: 0;
    padding: 1rem 1.2rem;
    color: $accent;
    font-size: 1.4rem;
  }

  .card-content {
    padding: 0 1rem 1rem 1rem;
    text-align: center;
  }
}
</style>
