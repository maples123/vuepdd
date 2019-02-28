<template>
  <div class="show-title">
    <span class="title-name">{{cateTitle}}</span>
    <p class="more">
      查看更多
    </p>
  </div>
</template>

<script>
  export default {
    name: "catTitle",
    props : ["cateTitle"],
    data(){
      return {
        title : ""
      }
    }
  }
</script>

<style scoped lang="less">

  .show-title {
    display: flex;
    height: .53rem;
    padding: 0 .1rem;
    background-color: #fff;
    box-sizing: border-box;
    justify-content: space-between;
    .title-name {
      display: block;
      line-height: .53rem;
      font-size: .14rem;
      color: #363636;
    }
    .more {
      display: flex;
      line-height: .53rem;
      font-size: .12rem;
      color: #868686;
    }
    .more:after {
      content: ">";
      display: inline-block;
      margin-left: .02rem;
      font-family: 宋体;
    }
  }
</style>
