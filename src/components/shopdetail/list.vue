<template>
  <div class="goods-list">
    <ul class="fl">
      <li
        v-for="(item,index) in list"
        :key="index"
      >
        <router-link :to="{name : 'goods',query:{shopTitle,id:item.goods_id}}">
          <div class="goods-pic">
            <img :src="item.list_img" :alt="item.title">
          </div>
          <div class="goods-txt">
            <p class="text">
              {{item.text}}
            </p>
            <div class="price">
              <span class="left red">￥{{item.dis_price}}</span>
              <span class="right t-line">￥{{item.price}}</span>
            </div>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "list",
    props: ["list", "shopTitle"],
    data() {
      return {

      }
    },
  }
</script>

<style scoped lang="less">
  .goods-list {
    padding: .1rem;
    margin-bottom: .6rem;
    ul {
      height: 100%;
      li:nth-child(2n) {
        margin-right: 0;
      }
      li {
        float: left;
        width: 1.7rem;
        height: 2.45rem;
        margin-right: .11rem;
        margin-bottom: .1rem;
        background-color: #fff;
        .goods-pic {
          padding: .14rem .14rem .11rem;
          box-sizing: border-box;
          img {
            display: block;
            width: 100%;
            height: 100%;
          }
        }
        .goods-txt {
          padding: 0 .1rem;
          .text {
            overflow: hidden;
            height: .5rem;
            font-size: .1rem;
            color: #686868;
          }
          .price {
            padding-top: .05rem;
            font-size: .08rem;
            text-align: center;
            .right {
              color: #ccc;
            }
          }
        }
      }
    }
  }
</style>
