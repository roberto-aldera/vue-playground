<script setup lang="ts">
import TheNavbar from "./components/TheNavbar.vue";
import SimpleFooter from "./components/SimpleFooter.vue";
import MealGrid from "./components/MealGrid.vue";
</script>

<template>
  <header>
    <TheNavbar />
  </header>

  <main>
    <MealGrid :items="ItemList" />
  </main>

  <footer>
    <SimpleFooter />
  </footer>
</template>

<script lang="ts">
interface itemObj {
  id: string;
  fullTitle: string;
  img_path: string;
}

const item0: itemObj = {
  id: "pg1",
  fullTitle: "Title1",
  img_path: "../src/assets/logo.svg",
};

export default {
  components: {
    MealGrid,
  },
  data() {
    return {
      ItemList: [
        item0,
        {
          id: "pg2",
          fullTitle: "Title2",
          img_path: "../src/assets/logo.svg",
        },
        {
          id: "pg3",
          fullTitle: "Title3",
          img_path: "../src/assets/logo.svg",
        },
      ],
    };
  },
};
</script>

<style scoped>
header {
  line-height: 1.5;
}

/* .logo {
  display: block;
  margin: 0 auto 2rem;
} */

/* @media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
} */
</style>
