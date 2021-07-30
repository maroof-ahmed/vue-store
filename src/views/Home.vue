<template>
  <div class="home">
    <Products />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Products from '@/views/Products.vue';

@Component({
  components: {
    Products,
  },
})
export default class Home extends Vue {}
</script>

<style scoped></style>
