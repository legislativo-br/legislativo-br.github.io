<template>
  <div :class="className" class="chip">
    <i :class="icon" aria-hidden="true"></i>
    <span>{{ label }}</span>
  </div>
</template>

<script>
export default {
  name: 'CChip',
  props: {
    label: {
      type: [String, Number],
      required: true
    },
    type: {
      type: String,
      default: 'white'
    },
    icon: {
      type: String,
      required: true
    }
  },
  computed: {
    className() {
      return `is-${this.type}`
    }
  }
}
</script>

<style lang="scss">
.chip {
  display: inline-flex;
  align-items: center;
  padding: 7px 12px;
  border-radius: 4px;
  border: none;
  font-size: 1rem;

  i {
    margin-right: 4px;
  }

  &.is-white {
    background-color: $white;
    color: $primary;
  }

  &.is-primary {
    background-color: $primary;
    color: $white;
  }

  &.is-accent {
    background-color: $accent;
    color: $primary;
  }
}
</style>
