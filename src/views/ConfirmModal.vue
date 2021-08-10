<template>
  <a-modal
    title="Confirm"
    :visible="$store.state.visible"
    :confirm-loading="$store.state.confirmLoading"
    @ok="onOk"
    @cancel="$store.dispatch('handleCancelAction')"
  >
    <p>{{ discription }}</p>
  </a-modal>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { Modal } from 'ant-design-vue';

Vue.use(Modal);

@Component({})
export default class ConfirmModal extends Vue {
  @Prop() discription: string;
  @Prop() onOk: () => void;
}
</script>
