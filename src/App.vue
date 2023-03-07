<script setup lang="ts">
import TheNavbar from "./components/TheNavbar.vue";
import SimpleFooter from "./components/SimpleFooter.vue";
import MealGrid from "./components/MealGrid.vue";
import { defineStore } from "pinia";
</script>

<template>
  <header>
    <TheNavbar />
  </header>

  <main>
    <MealGrid />
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

const item1: itemObj = {
  id: "pg2",
  fullTitle: "Title2",
  img_path: "../src/assets/logo.svg",
};

const item2: itemObj = {
  id: "pg3",
  fullTitle: "Title3",
  img_path: "../src/assets/logo.svg",
};

export const useStore = defineStore("storeId", {
  // arrow function recommended for full type inference
  state: () => {
    return {
      // type inferred automatically
      itemsFromStore: [item0, item1, item2],
    };
  },
});

export default {
  components: {
    MealGrid,
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
