<template>
  <div id="app">
      <component :is="layout">
        <router-view :layout.sync="layout"/>
      </component>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import DefaultLayout from '@/layouts/DefaultLayout.vue';
import BlankLayout from '@/layouts/BlankLayout.vue';
import ErrorLayout from '@/layouts/ErrorLayout.vue';
export default Vue.extend({
  components: {
    DefaultLayout,
    BlankLayout,
    ErrorLayout
  },

  data() {
    return {
      layout: null as string | null,
    }
  },

  created() {    
    if (this.$route.meta?.layout !== undefined) {
      this.layout = this.$route.meta.layout;
      this.setBodyClass(this.$route.meta.bodyClass)
    } else {
      this.layout = 'DefaultLayout';
    }
  },

  watch: {
    $route(to, from) {  
      // set layout by route meta
      if (to.meta.layout !== undefined) {
        this.layout = to.meta.layout;
      } else {
        this.layout = 'DefaultLayout'; // this is default layout if route meta is not set
      }
      // set class name for body
      this.removeBodyClass(from.meta.bodyClass);
      this.setBodyClass(to.meta.bodyClass);
    },
  },

  methods: {
    setBodyClass(value: string) {
      if (value !== undefined) {
        document.body.classList.add(value);
      }
    },
    removeBodyClass(value: string) {
      if (value !== undefined) {
        document.body.classList.remove(value);
      }
    }

  },
  // destroyed() {
  //   this.removeBodyClass(this.$route.meta?.bodyClass);
  // }
})
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
