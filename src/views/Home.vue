<template>
  <div class="home">
    <a-page-header
      style="border: 1px solid rgb(235, 237, 240)"
      title="Products"
    />
    <Products />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Products from '@/views/Products.vue';
import { PageHeader } from 'ant-design-vue';

Vue.use(PageHeader);

@Component({
  components: {
    Products,
  },
})
export default class Home extends Vue {}
</script>
