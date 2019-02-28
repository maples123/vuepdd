<template>
  <div class="my">
    <page-title :name="name"></page-title>
    <my-con></my-con>
    <pdd-ft></pdd-ft>
  </div>
</template>

<script>
  export default {
    name: "my",
    data() {
      return {
        name : "我的"
      }
    }
  }
</script>

<style scoped lang="less">

</style>
