<template>
  <div class="foot">
    <router-link to="/">
      <span class="f-icon iconfont icon-home"></span>
      <span>首页</span>
    </router-link>
    <router-link to="/bivariate">
      <span class="f-icon iconfont icon-ditu"></span>
      <span>地图</span>
    </router-link>
    <router-link to="/cart">
      <span class="num" v-if="shopNum">{{shopNum}}</span>
      <span class="f-icon iconfont icon-gouwuche"></span>
      <span>购物车</span>
    </router-link>
    <router-link to="/my">
      <span class="f-icon iconfont icon-wode"></span>
      <span>我的</span>
    </router-link>
  </div>
</template>

<script>
  import connect from "./connect";
  import shopTools from "./shopTools";

  export default {
    name: "ft",
    data(){
      return {
        shopNum : 0,
      }
    },
    computed: {//监听状态的变化
      num() {
        return this.$store.state.num
      }
    },
    created() {
      this.shopNum = shopTools.getShopSum();

      connect.$off("cartNum");
      connect.$on("cartNum", (num) => {

        this.shopNum += num;
      })
    }
  }
</script>

<style scoped lang="less">
  .foot {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    height: .6rem;
    border-top: 1px solid #ccc;
    background-color: #fff;
    justify-content: space-around;
    align-items: center;
    a {
      position: relative;
      flex: 1;
      font-size: .1rem;
      .f-icon {
        width: .25rem;
        height: .25rem;
        line-height:.25rem;
        font-size:.25rem;
        text-align:center;
        margin: auto;
      }
      .num {
        position: absolute;
        top: -.1rem;
        left: .5rem;
        width: .15rem;
        height: .15rem;
        border-radius: 50%;
        line-height: .15rem;
        background-color: red;
        text-align: center;
        color: #ccc;
      }
      span {
        display: block;
        margin-top: .03rem;
        text-align: center;
      }
    }
  }
</style>
