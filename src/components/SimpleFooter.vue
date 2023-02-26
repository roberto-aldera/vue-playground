<script setup lang="ts">
import { MDBFooter } from "mdb-vue-ui-kit";
</script>

<template>
  <MDBFooter :text="['center', 'lg-start']">
    <!-- Copyright -->
    <div class="text-center p-3" style="background-color: rgba(0, 0, 0, 0.2)">
      Copyright © MyPetProject {{ new Date().getFullYear() }}
    </div>
    <!-- Copyright -->
  </MDBFooter>
</template>
