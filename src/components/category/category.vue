<template>
  <div class="category">
    <cate-title :cateTitle="title"></cate-title>
    <ul>
      <li
        v-for="(item,index) in category"
        :key="index"
      >
        <router-link :to="{name:'cate.detail',query : {title,name:item.title,id:item.id}}">
          <img :src="item.cate_img" :alt="item.title">
        </router-link>
        <div class="goods">
          <div class="goods-list" v-for="(cate,index) in item.cate_list" :key="index">
            <img :src="cate.list_img" :alt="cate.title">
            <p>
              {{cate.text}}
            </p>
            <div class="price">
              <span class="price-left red">￥{{cate.dis_price}}</span>
              <span class="price-right t-line">￥{{cate.price}}</span>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  import dataUrl from "../comment/dataUrl";
  export default {
    name: "goods",
    data() {
      return {
        title: "",
        category: []
      }
    },
    created() {
      this.Axios
        .get(dataUrl("category"))
        .then(res => {

          this.title = res.data.title;
          this.category = res.data.data;
        })
    }
  }
</script>

<style scoped lang="less">
  .category {
    margin-top: .15rem;
    ul {
      li {
        margin:.1rem 0;
        a {
          display: block;
          width: 100%;
          height: 1.87rem;
          img {
            display: block;
            width: 100%;
            height: 100%;
          }
        }
        .goods {
          display: flex;
          height: 1.9rem;
          padding: .1rem .06rem;
          background-color: #fff;
          justify-content: space-between;
          .goods-list {
            width: 1.168rem;
            height: 1.81rem;
            img {
              display: block;
              width: 1.168rem;
              height: 1.17rem;
            }
            p {
              overflow: hidden;
              height: .3rem;
              margin: .1rem 0;
              line-height: .16rem;
              font-size: .12rem;
              text-align: center;
              color: #6c6c6c;
            }
            .price {
              display: flex;
              margin-top: .05rem;
              font-size: .1rem;
              color: #999;
              justify-content: center;
              .price-left {
                display: block;
                margin-right: .05rem;
                line-height: .12rem;
                font-size: .15rem;
              }
            }
          }
        }
      }
    }
  }
</style>
