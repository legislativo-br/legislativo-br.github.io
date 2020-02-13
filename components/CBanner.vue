<template>
  <div class="banner"></div>
</template>

<script>
export default {
  name: 'CBanner'
}
</script>

<style lang="scss">
.banner {
  width: 100%;
  min-height: 100vh;
  display: block;
  background-color: white;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url('../assets/images/desktop-banner.jpg');

  @media screen and (max-width: 768px) {
    background-image: url('../assets/images/mobile-banner.jpg');
  }
}
</style>
