<template>
  <div class="head">
    <div class="head-top">
      <img src="../../../static/images/loge.png" alt="">
      <span>0.1元包邮抢16包清风面巾纸</span>
      <router-link to="/cart">前往购买</router-link>
    </div>
    <div class="hd-nav">
      <a href="/">首页</a>
      <a href="#">商家入驻</a>
      <a href="#">帮助</a>
    </div>
  </div>
</template>

<script>
    export default {
        name: "head"
    }
</script>

<style scoped lang="less">
  .head{
    overflow: hidden;
    width:100%;
  }
  .head-top{
    z-index:999;
    display:flex;
    position:fixed;
    top:0;
    left:0;
    right:0;
    width:100%;
    height:.45rem;
    background:url("../../../static/images/top_bg.png") no-repeat;
    background-size:100% 100%;
    justify-content: space-around;
    img{
      width:.9rem;
      height:.3rem;
      margin-top:.08rem;
    }
    span{
      display:block;
      line-height:.45rem;
      font-size:.1rem;
      color:#fff;
    }
    a{
      display:block;
      width:.74rem;
      height:.27rem;
      margin-top:.09rem;
      line-height:.27rem;
      border-radius:3px;
      background-color:#fff;
      font-size:.136rem;
      text-align:center;
      color:orangered;
    }
  }
  .hd-nav{
    display:flex;
    height:.5rem;
    margin-top:.45rem;
    background-color:#f3f3f3;
    a{
      display:block;
      padding:0 .11rem;
      box-sizing:border-box;
      line-height:.5rem;
      font-size:.136rem;
      color:#666;
    }
  }
</style>
