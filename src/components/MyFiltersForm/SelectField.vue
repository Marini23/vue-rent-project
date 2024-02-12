<template>
  <select
    class="custom-select"
    v-model="selected"
    v-bind="{
      onChange: emitUpdate,
    }"
  >
    <option v-for="item in formatedItems" :key="item.value" :value="item.value">
      {{ item.label }}
    </option>
  </select>
</template>

<script setup>
import { computed, defineProps, defineEmits, ref } from "vue";

const props = defineProps({
  items: Array,
});
const selected = ref("");
const emit = defineEmits(["update:modelValue"]);

const formatedItems = computed(() => {
  return props.items.map((item) => {
    return typeof item === "object" ? item : { value: item, label: item };
  });
});

const emitUpdate = (event) => {
  const value = event.target.value;
  selected.value = value;
  emit("update:modelValue", value);
};
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variables";

.custom-select {
  height: 40px;
  max-width: 220px;
  width: 100%;
  border: 2px solid $main-color;
  font-size: 18px;
  outline: none;
  padding: 8px 15px;
  cursor: pointer;
  display: inline-block;
}
</style>
