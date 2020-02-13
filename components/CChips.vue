<template>
  <div class="chips-container">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'CChipsContainer'
}
</script>

<style lang="scss">
.chips-container {
  display: flex;
  justify-content: center;
  margin-top: 1rem;

  div:not(:first-child) {
    margin: 0 8px;
  }
}
</style>
