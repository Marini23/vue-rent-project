<script setup>
import ApartmentsItem from "./components/apartment/ApartmentsItem.vue";
const apartment = {
  id: "5f689a2c09b16000e9a2f485",
  title: "Nihil pariatur eum ab a ducimus nam.",
  imgUrl: "/img/apartments/apartment-8.jpg",
  descr:
    "Quae aliquid odit aut quia. Sed aut sed quis repudiandae est consequatur id quo ut. Molestiae nemo maiores quis deleniti sequi et eaque architecto officia. Molestiae incidunt qui quia. Fugiat id eum totam porro autem.",
  rating: 1,
  price: 3959,
  location: {
    city: "Kharkiv",
  },
  owner: {
    name: "Estell",
    phone: "804-325-1372",
    email: "Alta_Green@hotmail.com",
  },
};
</script>

<template>
  <div id="app">
    <ApartmentsItem
      :descr="apartment.descr"
      :price="apartment.price"
      :rating="apartment.rating"
    />
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
</style>
