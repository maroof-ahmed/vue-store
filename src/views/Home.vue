<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <a-button type="primary"> Primary </a-button>
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import { Button } from 'ant-design-vue';

Vue.use(Button);

@Component({
  components: {
    HelloWorld,
  },
})
export default class Home extends Vue {}
</script>
