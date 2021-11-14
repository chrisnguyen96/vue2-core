<template>
  <div class="error-404">
      <h1>{{ title }}</h1>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    data() {
        return {
            title: 'Error 404'
        }
    }
})
</script>

<style>

</style>