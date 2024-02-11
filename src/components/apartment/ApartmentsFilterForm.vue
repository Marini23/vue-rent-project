<template>
  <div>
    <form class="form" @submit.prevent="handleSubmit">
      <CustomSelect :items="cities" v-model="form.city" class="form__select" />
      <CustomInput v-model="form.price" placeholder="Цена, от" />
      <SubmitButton class="form__submit" type="submit">
        Подбор жилья
      </SubmitButton>
    </form>
  </div>
</template>

<script>
import CustomSelect from "../shared/CustomSelect.vue";
import CustomInput from "../shared/CustomInput.vue";
import SubmitButton from "../shared/Button.vue";
// import { isRequired, charLimit } from '../../utils/validationRules';

export default {
  components: {
    CustomSelect,
    CustomInput,
    SubmitButton,
  },
  data() {
    return { form: { price: "", city: "" } };
  },
  computed: {
    // rules() {
    //   return [isRequired, charLimit(10)];
    // },
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
    handleSubmit() {
      this.$emit("submit", this.form);
    },
  },
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
