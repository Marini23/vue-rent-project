<template>
  <main class="login">
    <LoginForm />
    <!-- <AuthSection>
      <LoginForm />
    </AuthSection> -->
  </main>
</template>

<script>
import LoginForm from "../components/auth/LoginForm.vue";
// import AuthSection from '../components/auth/AuthSection';

export default {
  name: "LoginPage",
  components: {
    LoginForm,
  },
};
</script>

<style lang="scss" scoped></style>
