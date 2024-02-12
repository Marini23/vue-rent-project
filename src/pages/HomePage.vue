<script setup>
import ApartmentsList from "../components/apartment/ApartmentsList.vue";
import ApartmentsItem from "../components/apartment/ApartmentsItem.vue";
import apartments from "../components/apartment/apartments.js";
import Container from "../components/shared/Container.vue";
import FilterForm from "../components/MyFiltersForm/FilterForm.vue";
import getApartmentsList from "../../src/utils/axios.js";
import { reactive, computed, onMounted } from "vue";

const filters = reactive({
  price: 0,
  city: "",
});

// let apartments = [];

// onMounted(async () => {
//   try {
//     const { data } = await getApartmentsList();
//     console.log(data);
//     apartments = data;
//   } catch (error) {
//     console.error(error);
//   }
// });

function filterForm(data) {
  filters.price = data.price;
  filters.city = data.city;
}

const filterByCityName = (apartments) => {
  if (!filters.city) {
    return apartments;
  }
  return apartments.filter((apartment) => {
    return apartment.location.city === filters.city;
  });
};

function filterByPrice(apartments) {
  if (!filters.price) {
    return apartments;
  }
  return apartments.filter((apartment) => {
    return apartment.price >= filters.price;
  });
}

const filteredApartments = computed(() => {
  return filterByCityName(filterByPrice(apartments));
});
</script>

<template>
  <main class="homepage">
    <Container>
      <FilterForm @submit="filterForm" class="apartments-filter" />
    </Container>
    <Container>
      <p v-if="!filteredApartments.length">Ничего не найдено</p>
      <ApartmentsList :items="filteredApartments">
        <template v-slot:apartment="{ apartment }">
          <ApartmentsItem
            :key="apartment.id"
            :id="apartment.id"
            :descr="apartment.descr"
            :rating="apartment.rating"
            :imgSrc="apartment.imgUrl"
            :price="apartment.price"
          />
        </template>
      </ApartmentsList>
    </Container>
  </main>
</template>

<style lang="scss" coped>
.apartments-filter {
  margin-bottom: 40px;
}
</style>
