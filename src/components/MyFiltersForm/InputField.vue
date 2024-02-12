<template>
  <div class="wrapper-input">
    <input v-model="model" v-bind="$attrs" class="custom-input" />
  </div>
</template>

<script setup>
import { defineModel } from "vue";

const model = defineModel();
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variables";

.custom-input {
  height: 40px;
  max-width: 220px;
  width: 100%;
  border: 2px solid $main-color;
  font-size: 18px;
  outline: none;
  line-height: inherit;
  padding: 8px 15px;

  &::placeholder {
    color: inherit;
  }
}
</style>
