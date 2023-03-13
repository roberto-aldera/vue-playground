<script setup lang="ts">
import TheNavbar from "./TheNavbar.vue";
import WelcomeItem from "./WelcomeItem.vue";
import DocumentationIcon from "./icons/IconDocumentation.vue";
import { useStore } from "../App.vue";
import type { ItemObj } from "./ItemObj";

const store = useStore();
</script>

<template>
  <TheNavbar />
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>
      {{
        (store.getItemById(categoryName, pageId) as ItemObj).fullName
      }}</template
    >
    {{ (store.getItemById(categoryName, pageId) as ItemObj).textContent }}
  </WelcomeItem>
</template>

<script lang="ts">
export default {
  computed: {
    pageId: function () {
      return this.$route.params.id as string;
    },
    categoryName: function () {
      return this.$route.params.name as string;
    },
  },
};
</script>
