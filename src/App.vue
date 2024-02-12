<script setup>
import ApartmentsList from "./components/apartment/ApartmentsList.vue";
import ApartmentsItem from "./components/apartment/ApartmentsItem.vue";
import apartments from "./components/apartment/apartments";
import Container from "./components/shared/Container.vue";
import FilterForm from "./components/MyFiltersForm/FilterForm.vue";
import Footer from "./components/shared/Footer.vue";
import Header from "./components/shared/Header.vue";
import { reactive, computed } from "vue";

const filters = reactive({
  price: 0,
  city: "",
});

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
  <div id="app">
    <div class="content">
      <Header />
      <Container>
        <FilterForm @submit="filterForm" class="apartments-filter" />
      </Container>
      <Container>
        <router-view></router-view>
        <p v-if="!filteredApartments.length">Ничего не найдено</p>
        <ApartmentsList :items="filteredApartments">
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
      </Container>
    </div>
    <Footer />
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
  padding-top: 120px;
}

.apartments-filter {
  margin-bottom: 40px;
}
</style>
