<template>
  <div class="error-404">
      <h1>{{ title }}</h1>
      <router-link to="/">Go to Home</router-link>
      <slot/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    name: 'ErrorLayout',
    data() {
        return {
            title: 'Error 404'
        }
    }
})
</script>

<style>

</style>