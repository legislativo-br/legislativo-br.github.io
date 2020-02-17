<template>
  <div class="field">
    <label :for="name" class="hide-element">
      {{ label }}
    </label>

    <select
      v-bind="{
        id: name,
        name: name,
        value: value
      }"
      @change="onChange"
    >
      <option value=""> {{ label }} </option>
      <option v-for="(option, key) in options" :key="key" :value="option.value">
        {{ option.label }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'CInput',
  props: {
    label: {
      type: String,
      default: '',
      required: true
    },
    options: {
      type: Array,
      default: () => [{}],
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
    }
  },
  methods: {
    onChange(event) {
      this.$emit('input', event.target.value)
    }
  }
}
</script>

<style lang="scss">
.field {
  select {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    display: block;
    position: relative;
    background-color: $white;
    border-color: $primary;
    color: inherit;
    width: 100%;
    padding: 0.5rem 0.6rem;

    &:focus {
      border-color: $primary;
      outline-color: $primary;
    }
  }
}
</style>
