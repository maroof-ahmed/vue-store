<template>
  <div class="counter">
    <a-button type="primary" @click="$store.dispatch('decrementCountAction')">
      -
    </a-button>
    <strong class="p-2">{{ $store.state.count }}</strong>
    <a-button type="primary" @click="$store.dispatch('incrementCountAction')">
      +
    </a-button>
    <div class="mt-4 mb-4">
      <a-button v-show="$store.state.count > 0" type="primary">
        Add to cart
      </a-button>
      <a-button class="ml-2" v-show="$store.state.count > 0" type="danger">
        Remove From cart
      </a-button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { Button } from 'ant-design-vue';

Vue.use(Button);

@Component({})
export default class Counter extends Vue {
  @Prop() product!: string;
}
</script>
