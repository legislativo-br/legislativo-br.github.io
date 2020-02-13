<template>
  <div :class="{ 'is-inverted': isInverted }" class="pictogram">
    <span v-for="(_, key) in selected" :key="key" class="selected">
      <i class="fas fa-user-tie"></i>
    </span>
    <span v-for="(_, key) in notSelected" :key="key + selected">
      <i class="fas fa-user-tie"></i>
    </span>
  </div>
</template>

<script>
export default {
  name: 'CPictogram',
  props: {
    chars: {
      type: Number,
      default: 0
    },
    isInverted: {
      type: Boolean,
      default: false
    },
    selected: {
      type: Number,
      default: 0
    }
  },
  computed: {
    notSelected() {
      return this.chars - this.selected
    }
  }
}
</script>

<style lang="scss">
.pictogram {
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-gap: 0.5rem;
  font-size: 1.5rem;
  color: $white;

  &.is-inverted {
    color: $primary;
  }

  .selected {
    color: $accent;
  }
}
</style>
