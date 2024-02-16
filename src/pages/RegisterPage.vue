<template>
  <main class="registration">
    <RegistrationForm />
  </main>
</template>

<script>
// import AuthSection from '../components/auth/AuthSection';
import RegistrationForm from "../components/auth/RegisterForm.vue";

export default {
  name: "RegisterPage",
  components: {
    // AuthSection,
    RegistrationForm,
  },
};
</script>

<style lang="scss" scoped></style>
