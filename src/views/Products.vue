<template>
  <div class="products mt-5">
    <a-skeleton v-if="!products.length" />
    <a-row :gutter="[20, 20]">
      <a-col
        class="gutter-row"
        :lg="{ span: 12 }"
        :xl="{ span: 8 }"
        v-for="product in products"
        :key="product.id"
      >
        <a-card @click="openThisProduct(product)" hoverable>
          <img slot="cover" alt="example" :src="product.image" />
          <a-card-meta>
            <span slot="title">
              <a-tooltip>
                <template slot="title">
                  {{ product.title }}
                </template>
                <span>{{ product.title }}</span>
              </a-tooltip>
            </span>
            <template slot="description">
              <a-tooltip>
                <template slot="title">
                  {{ product.description }}
                </template>
                <span>{{ product.description.substring(0, 60) + '...' }}</span>
                <br />
                <span class="price"> Price: {{ product.price }} </span>
              </a-tooltip>
            </template>
          </a-card-meta>
        </a-card>
      </a-col>
    </a-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Row, Col, Card, Tooltip, Skeleton } from 'ant-design-vue';

let useComponents = [Row, Col, Card, Tooltip, Skeleton];

useComponents.forEach((item) => {
  Vue.use(item);
});

@Component({})
export default class Products extends Vue {
  products = [];

  created(): void {
    this.getAllProducts();
  }

  async getAllProducts(): Promise<string> {
    let data;
    await this.$store.dispatch('fetchAllProducts');
    data = this.$store.state.products;
    this.products = data;
    return data;
  }

  openThisProduct(product: { id: any }): void {
    this.$router.push({ name: 'productDetails', params: { id: product.id } });
  }
}
</script>

<style>
.ant-card-cover img {
  object-fit: contain;
  min-height: 280px;
  max-height: 280px;
  display: inline-block;
  padding: 12px;
}
.price {
  color: orange;
}
</style>
