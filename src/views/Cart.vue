<template>
  <div class="cart">
    <a-row :gutter="[50, 0]">
      <a-col :span="16">
        <a-list
          class="demo-loadmore-list"
          item-layout="horizontal"
          :data-source="$store.state.cart"
        >
          <a-list-item :key="item.id" slot="renderItem" slot-scope="item">
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
              @click="showModal(item.id, item.title)"
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
      <a-col :span="8">
        <a-affix :offset-top="120">
          <a-row>
            <a-col :span="16">
              <a-alert
                :message="'total Bill ' + $store.getters.getTotalBill"
                type="success"
              />
            </a-col>
            <a-col :span="8">
              <a-button type="primary" @click="gotoCheckoutPage">
                Checkout
              </a-button></a-col
            >
          </a-row>
          <br />
          <a-table
            :columns="columns"
            :data-source="$store.getters.getBillBreakDown"
            :scroll="{ y: 440 }"
          >
            <a slot="name" slot-scope="text">{{ text }}</a>
          </a-table>
        </a-affix>
      </a-col>
    </a-row>
    <ConfirmModal :discription="discription" :onOk="onOk" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import {
  Row,
  Col,
  List,
  Button,
  Icon,
  Table,
  Affix,
  Alert,
} from 'ant-design-vue';
import ConfirmModal from '@/views/ConfirmModal.vue';

let useComponents = [Row, Col, List, Button, Icon, Table, Affix, Alert];

useComponents.forEach((items) => {
  Vue.use(items);
});

@Component({
  components: {
    ConfirmModal,
  },
})
export default class Cart extends Vue {
  selectedId: number;
  discription = '';
  columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
      scopedSlots: { customRender: 'title' },
    },
    {
      title: 'Count',
      dataIndex: 'value',
      key: 'value',
      // width: 80,
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      ellipsis: true,
    },
    {
      title: 'Total/Product',
      dataIndex: 'total',
      key: 'total',
      ellipsis: true,
    },
  ];
  showModal(id: number, title: string): void {
    this.selectedId = id;
    this.discription = 'Do you want to delete these ' + title;
    this.$store.dispatch('handleShowModalAction');
  }

  onOk(): void {
    this.$store.dispatch('removeProductToCartAction', this.selectedId);
  }
}
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
