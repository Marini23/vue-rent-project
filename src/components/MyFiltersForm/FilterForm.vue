<template>
  <form class="form" @submit.prevent="submitForm">
    <SelectField :items="cities" v-model="data.city" class="form__select" />
    <InputField v-model="data.price" placeholder="Цена, от" type="number" />
    <SubmitButton type="submit" class="form__submit">Подбор жилья</SubmitButton>
  </form>
</template>

<script setup>
import { reactive, defineEmits, ref } from "vue";
import InputField from "./InputField.vue";
import SelectField from "./SelectField.vue";
import SubmitButton from "../shared/Button.vue";

const cities = [
  { value: "", label: "Город" },
  "Kyiv",
  "Odesa",
  "Poltava",
  "Kharkiv",
  "Dnipro",
  "Lviv",
  "Kherson",
  "Mariupol",
];

const emit = defineEmits(["submit"]);

const data = reactive({
  price: "",
  city: "",
});

const submitForm = () => {
  emit("submit", data);
};
</script>

<style lang="scss" scoped>
.form {
  display: flex;

  &__select {
    margin-right: 30px;
  }

  &__submit {
    margin-left: auto;
  }
}
</style>
