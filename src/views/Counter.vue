<template>
  <div class="counter">
    <a-button type="primary" @click="subtractFromCounter"> - </a-button>
    <strong class="p-2">{{ value }}</strong>
    <a-button type="primary" @click="addToCounter"> + </a-button>
    <div class="mt-4 mb-4">
      <a-button v-show="value > 0" type="primary" @click="addToCart">
        Add to cart
      </a-button>
      <a-button
        class="ml-2"
        v-show="value > 0"
        type="danger"
        @click="$store.dispatch('removeProductToCart', product.id)"
      >
        Remove From cart
      </a-button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop, Watch } from 'vue-property-decorator';
import { Button } from 'ant-design-vue';

Vue.use(Button);

@Component({})
export default class Counter extends Vue {
  @Prop() product: any;

  value = 0;

  @Watch('value')
  onValueChanged(): void {
    this.product.value === this.value;
  }

  addToCounter(): void {
    this.value++;
  }
  subtractFromCounter(): void {
    if (this.value == 0) return;
    this.value--;
  }
  addToCart(): void {
    this.product.value = this.value;
    this.$store.dispatch('addProductToCartAction', this.product);
  }
  updateValue(): void {
    let check = this.$store.state.cart.find(
      (v: { id: any }) => v.id === this.product.id
    );
    if (check) {
      this.value = check.value;
    }
  }
  mounted(): void {
    this.updateValue();
  }
}
</script>
