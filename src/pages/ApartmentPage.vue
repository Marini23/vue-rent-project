<template>
  <main class="apartment-page">
    <Container>
      <div v-if="apartment" class="apartment-page__content">
        <ApartmentsItemInfo :apartment="apartment" />
        <div class="apartment-page__additional-info">
          <ApartmentsItemOwner
            class="apartment-page__owner"
            :owner="apartment.owner"
          />
          <Reviews :reviews="reviewsList" />
        </div>
      </div>
    </Container>
  </main>
</template>

<script>
import Container from "../components/shared/Container.vue";
import apartments from "../components/apartment/apartments.js";
import ApartmentsItemInfo from "../components/apartment/ApartmentsItemInfo.vue";
import ApartmentsItemOwner from "../components/apartment/ApartmentsItemOwner.vue";
import Reviews from "../components/reviews/ReviewsList.vue";
import reviewsList from "../components/reviews/reviews.json";
export default {
  name: "ApartmentPage",
  components: {
    Container,
    ApartmentsItemInfo,
    ApartmentsItemOwner,
    Reviews,
  },
  // data() {
  //   return {
  //     apartment: null,
  //   };
  // },
  // async created() {
  //   try {
  //     const { id } = this.$route.params;
  //     const { data } = await getApartmentById(id);

  //     this.apartment = data;
  //   } catch (error) {
  //     console.error(error);
  //   }
  // },
  computed: {
    reviewsList() {
      return reviewsList;
    },
    apartment() {
      return apartments.find(
        (apartment) => apartment.id === this.$route.params.id
      );
    },
  },
  mounted() {
    console.log(this.apartment);
  },
};
</script>

<style lang="scss" scoped>
.apartment-page {
  padding-bottom: 55px;

  &__content {
    display: flex;
    align-items: flex-start;
  }

  &__owner {
    min-width: 350px;
    /* margin-left: 30px; */
  }
  &__additional-info {
    margin-left: 30px;
    max-width: 350px;
    flex-grow: 0;
    flex-shrink: 1;
  }
}
</style>
