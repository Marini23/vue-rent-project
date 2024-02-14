<template>
  <form class="form">
    <slot></slot>
  </form>
</template>

<script setup>
import { provide, ref } from "vue";

const inputs = ref([]);

const registerInput = (input) => {
  inputs.value.push(input);
};

const unRegisterInput = (input) => {
  inputs.value = inputs.value.filter((item) => item !== input);
};

provide("form", { inputs, registerInput, unRegisterInput });
</script>

<style lang="scss" scoped></style>
