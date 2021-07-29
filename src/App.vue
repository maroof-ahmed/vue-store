<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import { Layout, Menu, Icon, Breadcrumb } from 'ant-design-vue';
import '@/assets/styles/global.scss';

import { getCategories } from '@/api/getCategories';

let useComponents = [Layout, Menu, Icon, Breadcrumb];

useComponents.forEach((item) => {
  Vue.use(item);
});

@Component
export default class App extends Vue {
  created(): void {
    console.log('App Component created');
    this.fetchCategories();
  }

  mounted(): void {
    console.log('App Component mounted');
  }

  async fetchCategories(): Promise<string> {
    let data;
    try {
      data = await getCategories();
      console.log('Categories: ', data);
    } catch (err) {
      console.log(err);
    }
    return data;
  }
}
</script>

<template>
  <div id="app">
    <!-- <div id="nav"></div> -->

    <a-layout id="components-layout-demo-top-side-2">
      <a-layout-header class="header">
        <img alt="Supermarché logo" class="logo" src="@/assets/logo.png" />
        <a-menu
          theme="dark"
          mode="horizontal"
          :default-selected-keys="['1']"
          :style="{ lineHeight: '50px' }"
        >
          <a-menu-item key="1">
            <router-link to="/">Home</router-link>
          </a-menu-item>

          <a-menu-item key="2">
            <router-link to="/about">About</router-link>
          </a-menu-item>

          <a-sub-menu theme="dark" mode="horizontal" class="float-right">
            <span slot="title" class="submenu-title-wrapper"
              ><a-icon type="setting" />Maroof Ahmed</span
            >
            <a-menu-item-group title="Item 1">
              <a-menu-item key="setting:1"> Option 1 </a-menu-item>
              <a-menu-item key="setting:2"> Option 2 </a-menu-item>
            </a-menu-item-group>
            <a-menu-item-group title="Item 2">
              <a-menu-item key="setting:3"> Option 3 </a-menu-item>
              <a-menu-item key="setting:4"> Option 4 </a-menu-item>
            </a-menu-item-group>
          </a-sub-menu>
        </a-menu>
      </a-layout-header>
      <a-layout>
        <a-layout-sider width="200" style="background: #fff">
          <a-menu
            mode="inline"
            :default-selected-keys="['1']"
            :default-open-keys="['sub1']"
            :style="{ height: '100%', borderRight: 0 }"
          >
            <a-sub-menu key="sub1">
              <span slot="title"><a-icon type="user" />subnav 1</span>
              <a-menu-item key="1"> option1 </a-menu-item>
              <a-menu-item key="2"> option2 </a-menu-item>
              <a-menu-item key="3"> option3 </a-menu-item>
              <a-menu-item key="4"> option4 </a-menu-item>
            </a-sub-menu>
            <a-sub-menu key="sub2">
              <span slot="title"><a-icon type="laptop" />subnav 2</span>
              <a-menu-item key="5"> option5 </a-menu-item>
              <a-menu-item key="6"> option6 </a-menu-item>
              <a-menu-item key="7"> option7 </a-menu-item>
              <a-menu-item key="8"> option8 </a-menu-item>
            </a-sub-menu>
            <a-sub-menu key="sub3">
              <span slot="title"><a-icon type="notification" />subnav 3</span>
              <a-menu-item key="9"> option9 </a-menu-item>
              <a-menu-item key="10"> option10 </a-menu-item>
              <a-menu-item key="11"> option11 </a-menu-item>
              <a-menu-item key="12"> option12 </a-menu-item>
            </a-sub-menu>
          </a-menu>
        </a-layout-sider>
        <a-layout style="padding: 0 24px 24px">
          <a-breadcrumb style="margin: 16px 0">
            <a-breadcrumb-item>Home</a-breadcrumb-item>
            <a-breadcrumb-item>List</a-breadcrumb-item>
            <a-breadcrumb-item>App</a-breadcrumb-item>
          </a-breadcrumb>
          <a-layout-content
            :style="{
              background: '#fff',
              padding: '24px',
              margin: 0,
              minHeight: '280px',
            }"
          >
            <router-view />
          </a-layout-content>
        </a-layout>
      </a-layout>
    </a-layout>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.ant-layout-header {
  height: 50px;
}

#components-layout-demo-top-side-2 .logo {
  height: 140px;
  margin: -45px 28px 0px -80px;
  float: left;
}
</style>
