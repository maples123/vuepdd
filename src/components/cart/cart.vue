<template>
  <div class="cart">
    <page-title :name="name"></page-title>
    <div class="container">
      <div class="cart-con">
        <div class="cart-list">
          <ul>
            <li v-for="(item,index) in cartShop" :key="index">
              <div class="item-top">
                <img :src="item.list_img" :alt="item.title">
                <p>
                  {{item.text}}
                </p>
              </div>
              <div class="item-bot">
                <span class="price" v-text="item.dis_price"></span>
                <div class="add-red">
                  <span class="add" @click="reduceCartShop(index)">-</span>
                  <span class="num">{{item.num}}</span>
                  <span class="reduce" @click="addCartShop(index)">+</span>
                </div>
                <span class="del" @click="removeShop(index)">删除</span>
              </div>
            </li>
          </ul>
        </div>

        <div class="settle">
          <div class="set-left">
            <div class="total">
              <span class="to-txt">总计: </span>
              <span class="to-num">￥{{totalPrice.priceNum}}元</span>
            </div>
            <span class="dis-money">优惠：￥{{totalPrice.disPrice}}元</span>
          </div>
          <div class="set-right">
            <p class="set-but">
              去结算
              <span v-if="totalPrice.num">({{totalPrice.num}}件)</span>
            </p>
          </div>
        </div>
      </div>
    </div>
    <pdd-ft></pdd-ft>
  </div>
</template>

<script>
  import shopTools from "../comment/shopTools";
  import dataUrl from "../comment/dataUrl";
  import connect from "../comment/connect";

  export default {
    name: "cart",
    data() {
      return {
        name: "购物车",
        cartShop: [],
        shopSum: 0,
      }
    },
    created() {
      const goods = shopTools.getShop("goods");
      const goodsId = Object.keys(goods);
      this.shopSum = shopTools.getShopSum();

      goodsId.forEach(item => {
        this.Axios
          .get(dataUrl("goods", item))
          .then(res => {

            this.cartShop.push(res.data);
            this.cartShop.forEach(cart => {

              if(item){
                this.$set(cart,"num", goods[cart.goods_id]);
              }
            });
          })
      })
    },
    computed: {
      //处理商品价格
      totalPrice() {
        let num = 0,
          priceSum = 0,
          priceNum = 0,
          disPrice = 0;

        this.cartShop.forEach(item => {

          priceSum += item.price * item.num;
          priceNum += item.dis_price * item.num;
          num += item.num;
        });
        disPrice = priceSum - priceNum;

        return {
          num,
          priceNum : shopTools.shopPrice(priceNum),
          disPrice : shopTools.shopPrice(disPrice)
        }
      }
    },
    methods: {
      //增加商品
      addCartShop(i) {
        if(this.cartShop[i].num >= 20) return;

        this.cartShop[i].num ++;
        connect.$emit("cartNum",1);

        shopTools.addUpdata({
          id : this.cartShop[i].goods_id,
          num : 1
        });

      },
      //减少商品
      reduceCartShop(i) {
        if(this.cartShop[i].num <= 0) return;

        this.cartShop[i].num --;
        connect.$emit("cartNum",-1);

        shopTools.addUpdata({
          id : this.cartShop[i].goods_id,
          num : -1
        });
      },
      //移除商品
      removeShop(i){
        connect.$emit("cartNum",-this.cartShop[i].num);

        shopTools.delete(this.cartShop[i].goods_id);

        this.cartShop.splice(i,1);
      }
    },
  }
</script>

<style scoped lang="less">
  .container {
    margin-top: .4rem;
    .cart-con {
      overflow: auto;
      height: calc(100vh - 102px);
      .cart-list {
        ul {
          li {
            padding: .1rem .2rem;
            margin-top: .1rem;
            background-color: #fff;
            .item-top {
              display: flex;
              justify-content: space-between;
              img {
                display: block;
                width: 1rem;
                height: 1rem;
              }
              p {
                overflow: hidden;
                width: 2rem;
                height: .5rem;
                margin-top: .1rem;
                padding: .1rem 0;
                font-size: .1rem;
              }
            }
            .item-bot {
              display: flex;
              margin-top: .1rem;
              justify-content: space-around;
              .price {
                display: block;
                line-height: .3rem;
                font-size: .16rem;
              }
              .add-red {
                display: flex;
                font-size: .18rem;
                span {
                  display: block;
                  width: .3rem;
                  height: .3rem;
                  margin: 0 .01rem;
                  line-height: .3rem;
                  background-color: #ccc;
                  text-align: center;
                }
              }
              .del {
                font-size: .18rem;
                color: #3a8ee6;
              }
            }
          }
        }
      }

      .settle {
        display: flex;
        height: .55rem;
        background-color: #fff;
        .set-left {
          width: 70%;
          height: 100%;
          box-sizing: border-box;
          padding: .02rem .1rem;
          .total {
            display: flex;
            align-items: center;
            .to-txt {
              font-size: .18rem;
            }
            .to-num {
              font-size: .14rem;
              color: red;
            }
          }
          .dis-money {
            display: block;
            margin-top: .05rem;
            font-size: .12rem;
            color: #ccc;
          }
        }
        .set-right {
          width: 30%;
          height: 100%;
          font-size: .1rem;
          .set-but {
            width: 100%;
            height: 100%;
            line-height: .5rem;
            background-color: orangered;
            font-size: .16rem;
            text-align: center;
            color: #fff;
            span {
              font-size: .14rem;
            }
          }
        }
      }
    }
  }
</style>
