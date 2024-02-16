<template>
  <form class="form">
    <slot></slot>
  </form>
</template>

<script setup>
import { provide, ref, defineExpose } from "vue";

// const inputs = [];

// const registerInput = (input) => {
//   // console.log(input);
//   inputs.push(input);
//   // console.log(inputs);
// };

// const unRegisterInput = (input) => {
//   inputs.filter((item) => item !== input);
// };

const inputs = ref([]);

const registerInput = (input) => {
  console.log(input);
  inputs.value.push(input);
  items.push(input);

  console.log(inputs);
};

const unRegisterInput = (input) => {
  inputs.value = inputs.value.filter((item) => item !== input);
};

// const validate = () => {
//   console.log(inputs);

//   return inputs.reduce((isValid, input) => {
//     console.log(input);
//     const isInputValid = input.validate();
//     return isValid && isInputValid;
//   }, true);
// };

const reset = () => {
  inputs.value.forEach((input) => input.reset());
};

const validate = () => {
  console.log(inputs);
};

provide("form", { inputs, registerInput, unRegisterInput });

defineExpose({
  validate,
});
</script>

<style lang="scss" scoped></style>
