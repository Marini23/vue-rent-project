<script setup>
import ApartmentsList from "./components/apartment/ApartmentsList.vue";
import ApartmentsItem from "./components/apartment/ApartmentsItem.vue";
import apartments from "./components/apartment/apartments";
import ApartmentsFilterForm from "./components/apartment/ApartmentsFilterForm.vue";
import Container from "./components/shared/Container.vue";
import MyInput from "./components/shared/MyInput.vue";

import { ref } from "vue";

const inputFilter = ref("Hello World!");

const handleSubmit = (value) => {
  console.log(value, "---form submited");
};
</script>

<template>
  <div id="app">
    <p>{{ inputFilter }}</p>
    <MyInput v-model="inputFilter" />
    <Container>
      <ApartmentsFilterForm @submit="handleSubmit" />
    </Container>
    <ApartmentsList :items="apartments">
      <template v-slot:title="title">New title</template>
      <template v-slot:apartment="{ apartment }">
        <ApartmentsItem
          :key="apartment.id"
          :descr="apartment.descr"
          :rating="apartment.rating"
          :imgSrc="apartment.imgUrl"
          :price="apartment.price"
        />
      </template>
    </ApartmentsList>
  </div>
</template>

<style scoped>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: Montserrat, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.content {
  flex-grow: 1;
}

.apartments-filter {
  margin-bottom: 40px;
}
</style>
