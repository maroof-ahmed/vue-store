<template>
  <div class="product-detail">
    <a-skeleton v-if="!product" />
    <a-row :gutter="[24, 24]" v-if="product">
      <a-page-header
        style="border: 1px solid rgb(235, 237, 240); margin: 12px"
        :title="product.title + ' ' + product.id"
      />
      <div class="align-item">
        <a-col :span="12">
          <div class="image-box">
            <img :src="product.image" alt="" width="100%" />
          </div>
        </a-col>
        <a-col :span="12">
          <div>
            <h3>Price: {{ product.price }}</h3>
            <p>{{ product.description }}</p>
            <Counter :product="product"></Counter>
          </div>
        </a-col>
      </div>
    </a-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { getProduct } from '@/api/getProduct';
import { Row, Col, Skeleton, PageHeader } from 'ant-design-vue';
import Counter from '@/views/Counter.vue';

let useComponents = [Row, Col, Skeleton, PageHeader];

useComponents.forEach((item) => {
  Vue.use(item);
});

@Component({
  components: {
    Counter,
  },
})
export default class ProductDetails extends Vue {
  product = null;

  created(): void {
    this.getProduct();
  }

  async getProduct(): Promise<string> {
    let data;
    let { id } = this.$route.params;
    try {
      data = await getProduct(id);
      this.product = data;
    } catch (err) {
      console.log(err);
    }
    return data;
  }
}
</script>

<style lang="scss" scoped>
.product-detail {
  .align-item {
    display: flex;
    justify-content: center;
    align-items: center;
    .image-box {
      display: flex;
      justify-content: center;
      overflow: hidden;
      padding: 15px;
      border-radius: 5px;
      border: 1px solid rgb(235, 237, 240);
      img {
        max-width: 300px;
        max-height: 300px;
        object-fit: contain;
      }
    }
    h3 {
      color: #747691;
      font-size: 30px;
    }
  }
}
</style>
