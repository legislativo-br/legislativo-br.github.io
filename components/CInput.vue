<template>
  <div class="field">
    <label :for="name" class="hide-element">
      {{ label }}
    </label>

    <input
      v-bind="{ id: name, type, value, placeholder: label }"
      @input="onInput"
    />
  </div>
</template>

<script>
export default {
  name: 'CSelect',
  props: {
    label: {
      type: String,
      default: '',
      required: true
    },
    value: {
      type: [String, Number],
      required: true
    },
    name: {
      type: String,
      default: '',
      required: true
    },
    type: {
      type: String,
      default: 'text'
    }
  },
  methods: {
    onInput(event) {
      this.$emit('input', event.target.value)
    }
  }
}
</script>

<style lang="scss">
.field {
  input {
    display: block;
    position: relative;
    background-color: $white;
    border-color: $primary;
    border-width: 1px;
    color: inherit;
    width: 100%;
    padding: 0.5rem 0.6rem;
    border-radius: 4px;

    &:focus {
      border-color: $primary;
      outline-color: $primary;
    }
  }
}
</style>
