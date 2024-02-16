<template>
  <div class="wrapper-input">
    <input
      v-model="model"
      v-bind="$attrs"
      class="custom-input"
      :class="!isValid && 'custom-input--error'"
    />
    <span v-if="!isValid" class="custom-input__error">{{ error }}</span>
  </div>
</template>

<script setup>
import {
  defineModel,
  defineProps,
  watch,
  ref,
  inject,
  onMounted,
  onBeforeUnmount,
} from "vue";

const { inputs, registerInput, unRegisterInput } = inject("form");

const { type, errorMessage, rules } = defineProps({
  errorMessage: {
    type: String,
    default: "",
  },
  rules: {
    type: Array,
    default: () => [],
  },
});

const model = defineModel();

let error = ref("");
let isValid = ref(true);

watch(model, (newModel) => {
  validate(newModel);
});

onMounted(() => {
  if (!inputs) return;

  registerInput(model);
});

onBeforeUnmount(() => {
  if (!inputs) return;

  unRegisterInput(model);
});

const validate = (value) => {
  isValid = rules.every((rule) => {
    const { hasPassed, message } = rule(value);
    if (!hasPassed) {
      error = message || errorMessage;
    }

    return hasPassed;
  });
};

const reset = () => {
  $emit("input", "");
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variables";

.wrapper-input {
  position: relative;
  display: inline-flex;
}
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
  &--error {
    border-color: red;
  }

  &__error {
    position: absolute;
    top: 100%;
    right: 0;
    width: 100%;
    font-size: 12px;
    color: red;
    line-height: 1.3;
  }
}
</style>
