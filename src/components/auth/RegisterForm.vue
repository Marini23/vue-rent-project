<template>
  <!-- <AuthContainer class="registration">
    <MainTitle class="registration__title">Логин</MainTitle> -->
  <Form ref="form" class="registration__form" @submit.prevent="handleSubmit">
    <MyInput
      v-model="formData.name"
      placeholder="Name"
      autocomplete="username"
      name="name"
      :rules="nameRules"
      class="registration__input"
    />
    <MyInput
      v-model="formData.email"
      placeholder="Email"
      autocomplete="email"
      name="email"
      :rules="emailRules"
      class="registration__input"
    />
    <MyInput
      v-model="formData.password"
      placeholder="Password"
      autocomplete="current-password"
      type="password"
      name="password"
      :rules="passwordRules"
      class="registration__input"
    />
    <MyInput
      v-model="formData.confirmPassword"
      placeholder="Confirm password"
      autocomplete="current-password"
      type="password"
      name="password"
      :rules="confirmPassword"
      class="registration__input"
    />
    <Button class="registration__btn" type="bsubmit">Вход</Button>
  </Form>
  <!-- </AuthContainer> -->
</template>

<script>
import Form from "../shared/FormRegister.vue";
import MyInput from "../shared/MyInput.vue";
import Button from "../shared/Button.vue";
// import AuthContainer from "../AuthContainer";
// import MainTitle from "../../shared/MainTitle";
import {
  emailValidation,
  passwordValidation,
  isRequired,
} from "../../utils/validationRuler.js";
// import { registerUser } from "../../../services/auth.service";

export default {
  name: "Registration",
  components: {
    Form,
    MyInput,
    Button,
    // AuthContainer,
    // MainTitle,
  },
  data() {
    return {
      formData: {
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      },
    };
  },
  computed: {
    rules() {
      return {
        emailValidation,
        passwordValidation,
        isRequired,
      };
    },
    nameRules() {
      return [this.rules.isRequired];
    },
    emailRules() {
      return [this.rules.isRequired, this.rules.emailValidation];
    },
    passwordRules() {
      return [this.rules.isRequired, this.rules.passwordValidation];
    },
    confirmPassword() {
      return [
        (val) => ({
          hasPassed: val === this.formData.password,
          message: "Пароли не совпадают",
        }),
      ];
    },
  },
  methods: {
    async handleSubmit() {
      const { form } = this.$refs;
      const isFormValid = form.validate();
      const { name, password, email } = this.formData;

      if (isFormValid) {
        try {
          const { data } = await registerUser({ name, password, email });
          console.log(data);
          form.reset();
        } catch (error) {
          console.log(error);
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.registration {
  &__form {
    display: block;
    flex-direction: column;
  }

  &__title {
    text-align: center;
  }

  &__input {
    margin-bottom: 20px;
    width: 100%;
  }

  &__btn {
    margin-top: 15px;
    width: 100%;
  }
}
</style>
