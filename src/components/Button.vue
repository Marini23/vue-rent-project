<template>
  <button v-bind:type="type" :class="{ btn: true, 'btn--outlined': outlined }">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    type: {
      type: String,
      default: "button",
    },
    outlined: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.btn {
  display: inline-block;
  cursor: pointer;
  min-width: 220px;
  padding: 8px 15px;

  &--outlined {
    background: none;
    color: red;
    border-color: 1px solid red;
  }
}
</style>
