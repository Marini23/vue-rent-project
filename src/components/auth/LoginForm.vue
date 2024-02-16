<template>
  <Form ref="form" @submit.prevent="submitForm">
    <MyInput name="email" v-model="loginData.email" :rules="emailRules" />
    <MyInput
      name="password"
      v-model="loginData.password"
      :rules="passwordRules"
    />
    <Button type="submit">Log in</Button>
  </Form>
</template>

<script setup>
import Form from "../shared/Form.vue";
import MyInput from "../shared/MyInput.vue";
import Button from "../shared/Button.vue";
import { reactive, computed, ref, onMounted } from "vue";
import {
  isRequired,
  emailValidation,
  passwordValidation,
} from "../../utils/validationRuler.js";
const form = ref(null);

const loginData = reactive({
  email: "",
  password: "",
});

const emailRules = computed(() => {
  return [isRequired, emailValidation];
});

const passwordRules = computed(() => {
  return [isRequired, passwordValidation];
});

const submitForm = async () => {
  console.log(loginData);
  const isValid = await form.value.validate();
  // if (!loginData.email & !loginData.password) {
  //   console.log("error");
  // }
  // console.log(confirm);
};

onMounted(() => {
  console.log(form);
});
</script>

<style lang="scss" scoped></style>
