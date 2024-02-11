<template>
  <form @submit.prevent="submit" class="form">
    <MySelect :items="cities" class="form__select" v-model="form.city" />
    <MyInput type="text" v-model="form.text" />
    <SubmitButton type="submit" class="form__submit">Подбор жилья</SubmitButton>
  </form>
</template>

<script>
import SubmitButton from "../shared/Button.vue";
import MyInput from "../shared/MyInput.vue";
import MySelect from "../shared/MySelect.vue";

export default {
  components: {
    SubmitButton,
    MyInput,
    MySelect,
  },
  data() {
    return {
      form: {
        text: "",
        city: "",
      },
    };
  },
  computed: {
    cities() {
      return [
        { value: "", label: "Город", selected: true },
        "Kyiv",
        "Odesa",
        "Poltava",
        "Kharkiv",
        "Dnipro",
        "Lviv",
        "Kherson",
        "Mariupol",
      ];
    },
  },
  methods: {
    async submit() {
      this.$emit("submit", this.form);
    },
  },
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
