<template>
  <div>
    <h1>Layout blank</h1>
    <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> | 
        <router-link to="/contact">Contact</router-link>
    </div>
    <slot/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
    data() {
        return {
            
        }
    }
})
</script>

<style>

</style>