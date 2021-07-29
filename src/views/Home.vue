<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" class="w-full mb-5" />
    <a-button type="primary" @click="incrementStateCount">
      Increment State Count
    </a-button>
    <a-button type="default" @click="updateStateCount">
      Update State Count
    </a-button>
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
// TODO: Lazy Load Components
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import { Button } from 'ant-design-vue';

Vue.use(Button);

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {
  incrementStateCount(): void {
    this.$store.dispatch('incrementCountAction');
  }
  updateStateCount(): void {
    this.$store.dispatch('updateCountAction');
  }
}
</script>
