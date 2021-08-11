<template>
  <div class="home">
    <a-page-header
      style="border: 1px solid rgb(235, 237, 240)"
      title="Products"
    >
      <template slot="extra">
        <strong>sort by price:</strong>
        <a-button key="3" @click="$store.dispatch('sortAscendingAction')">
          Low to High
        </a-button>
        <a-button key="2" @click="$store.dispatch('sortDescendingAction')">
          High to Low
        </a-button>
      </template>
    </a-page-header>
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
