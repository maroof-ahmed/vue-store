<template>
  <div class="products">
    <a-row :gutter="[20, 20]">
      <a-col
        class="gutter-row"
        :span="8"
        v-for="product in productsList"
        :key="product.id"
      >
        <a-card hoverable>
          <img slot="cover" alt="example" :src="product.image" />
          <a-card-meta>
            <span slot="title">
              <a-tooltip>
                <template slot="title">
                  {{ product.title }}
                </template>
                <span>{{ product.title.substring(0, 70) + '...' }}</span>
              </a-tooltip>
            </span>
            <template slot="description">
              <a-tooltip>
                <template slot="title">
                  {{ product.description }}
                </template>
                <span>{{ product.description.substring(0, 70) + '...' }}</span>
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

<script>
import { Component, Vue } from 'vue-property-decorator';
import { Row, Col, Card, Tooltip } from 'ant-design-vue';

let useComponents = [Row, Col, Card, Tooltip];

useComponents.forEach((item) => {
  Vue.use(item);
});

@Component({})
export default class Products extends Vue {
  productsList = [];

  async created() {
    await this.$store.dispatch('fetchAllProducts');
    this.productsList = this.$store.state.products;
    console.log('this.productsList: ', this.productsList);
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
