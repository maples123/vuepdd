<template>
  <div class="map">
    <page-title :name="name"></page-title>
    <bivar-con></bivar-con>
    <pdd-ft></pdd-ft>
  </div>
</template>

<script>
  export default {
    name: "bivariate",
    data() {
      return {
        name: "地图"
      }
    }
  }
</script>

<style scoped>
</style>
