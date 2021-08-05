<template>
  <div class="cart">
    <a-row :gutter="[50, 0]">
      <a-col :span="16">
        <a-list
          class="demo-loadmore-list"
          item-layout="horizontal"
          :data-source="$store.state.cart"
        >
          <a-list-item slot="renderItem" slot-scope="item">
            <a-button
              slot="actions"
              type="primary"
              shape="circle"
              @click="
                $store.dispatch('increaseDecreaseCartAction', {
                  id: item.id,
                  type: 'increase',
                })
              "
            >
              +
            </a-button>
            <a-button
              slot="actions"
              type="primary"
              shape="circle"
              @click="
                $store.dispatch('increaseDecreaseCartAction', {
                  id: item.id,
                  type: 'decrease',
                })
              "
            >
              -
            </a-button>
            <a-button
              slot="actions"
              type="danger"
              shape="circle"
              @click="$store.dispatch('removeProductToCart', item.id)"
            >
              <a-icon type="delete" />
            </a-button>

            <a-list-item-meta :description="item.description">
              <h3 slot="title">{{ item.title }}</h3>
              <img slot="avatar" width="100px" alt="logo" :src="item.image" />
            </a-list-item-meta>
            <div class="list-count">
              <strong>{{ item.value }}</strong>
            </div>
          </a-list-item>
        </a-list>
      </a-col>
    </a-row>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { Row, Col, List, Button, Icon } from 'ant-design-vue';

let useComponents = [Row, Col, List, Button, Icon];

useComponents.forEach((items) => {
  Vue.use(items);
});

@Component({})
export default class Cart extends Vue {}
</script>

<style lang="scss" scoped>
.cart {
  .ant-list-item {
    position: relative;
    .list-count {
      position: absolute;
      top: 22px;
      right: 68px;
    }
  }
}
</style>
