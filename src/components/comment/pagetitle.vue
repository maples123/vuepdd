<template>
  <div class="goods-head">
    <span @click="prev"><</span>
    <h3 class="goods-title" v-text="name"></h3>
  </div>
</template>

<script>
  export default {
    name: "pageTitle",
    props : ["name"],
    methods: {
      prev() {
        window.history.go(-1);
      }
    },
  }
</script>

<style scoped lang="less">
  .goods-head {
    position: fixed;
    top:0;
    left:0;
    right:0;
    display: flex;
    height: .4rem;
    border-bottom: 1px solid #ccc;
    background-color: #ff324f;
    span {
      position: absolute;
      width: .4rem;
      height: .4rem;
      line-height: .4rem;
      font-size: .3rem;
      font-family: 宋体;
      text-align: center;
      color: #fff;
    }
    .goods-title {
      margin: auto;
      line-height: .4rem;
      font-size: .14rem;
      font-weight: 500;
      color: #fff;
    }
  }
</style>
