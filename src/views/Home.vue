<template>
  <div class="home">
    <a-page-header
      style="border: 1px solid rgb(235, 237, 240)"
      title="Products"
    >
      <template slot="extra">
        sort by price
        <a-button key="3" @click="$store.commit('sortDesending')">
          Assending
        </a-button>
        <a-button key="2" @click="$store.commit('sortAssending')">
          desending
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
