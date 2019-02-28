<template>
  <div class="goods">
    <page-title :name="shopTitle"></page-title>
    <div class="container">
      <div class="goods-info">
        <img :src="goods.list_img" :alt="goods.title">
        <p>
          {{goods.text}}
        </p>
        <span class="price">{{goods.dis_price}}</span>
      </div>
      <div class="sales">
        <span class="express">快递 : 包邮</span>
        <span>已有36人付款</span>
      </div>
      <div class="add-to">
        <p>购买数量</p>
        <div class="number">
          <span class="add" @click="reduceShop">-</span>
          <span class="num">{{num}}</span>
          <span class="reduce" @click="addShop">+</span>
        </div>
      </div>
      <div class="shopping">
        <span @click="addCart">加入购物车</span>
        <span @click="newBuy">立即购买</span>
      </div>
    </div>
    <pdd-ft></pdd-ft>
  </div>
</template>

<script>
  import dataUrl from "../comment/dataUrl";
  import connect from "../comment/connect";
  import shopTools from "../comment/shopTools";

  export default {
    name: "goods",
    data() {
      return {
        id : "",
        goods: {},
        shopTitle: "",
        num: 0
      }
    },
    created() {
      const id = this.$route.query.id;
      const shopTitle = this.$route.query.shopTitle;
      this.shopTitle = shopTitle;
      this.id = id;

      this.Axios
        .get(dataUrl("goods",id))
        .then(res => {

          this.goods = res.data;
        });
    },
    methods: {
      addShop() {

        if(this.num >= 20) return;
        this.num++;
      },
      reduceShop() {

        if(this.num <= 0) return;
        this.num--;
      },
      addCart() {
        //将商品添加到购物车
        connect.$emit("cartNum",this.num);

        //添加商品
        shopTools.addUpdata({
          id : this.id,
          num : this.num
        })
      },
      newBuy() {
        // 进入购物车结算
        this.$router.push({path:"/cart"})
      }
    }
  }
</script>

<style scoped lang="less">
  .goods {
    .container {
      margin-top: .4rem;
      padding: 0 .1rem;
      background-color: #fff;
      .goods-info {
        padding-top: .1rem;
        img {
          display: block;
          width: 2.3rem;
          height: 2rem;
          margin: auto;
        }
        p {
          margin: .1rem 0;
          font-size: .12rem;
          color: #131313;
        }
        .price:before {
          content: "￥";
          font-size: .12rem;
        }
        .price {
          display: block;
          margin: .1rem 0;
          font-size: .18rem;
          color: red;
        }
      }

      .sales {
        display: flex;
        padding: .05rem 0;
        font-size: .12rem;
        border-bottom: 1px solid #ccc;
        justify-content: space-between;
        .express {
          font-size: .14rem;
        }
      }

      .add-to {
        display: flex;
        margin-top: .1rem;
        justify-content: space-between;
        p {
          line-height: .35rem;
          font-size: .18rem;
        }
        .number {
          display: flex;
          span {
            display: block;
            width: .35rem;
            height: .35rem;
            line-height: .35rem;
            background-color: #eee;
            font-size: .24rem;
            text-align: center;
            color: #121212;
          }
          .num {
            font-size: .18rem;
            background-color: #fff;
          }
        }
      }

      .shopping {
        display: flex;
        padding: .2rem 0;
        justify-content: center;
        span {
          flex: 1;
          display: block;
          width: 100%;
          height: .5rem;
          background-color: orange;
          line-height: .5rem;
          font-size: .18rem;
          text-align: center;
          color: #fff;
        }
      }
    }
  }
</style>
