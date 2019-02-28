<template>
  <div class="show">
    <cate-title :cateTitle="title"></cate-title>
    <div class="show-con">
      <div class="left">
        <router-link
          :to="{name : 'cate.detail',query:{title,name:item.title,id:item.id}}"
          v-for="(item,index) in showLeft"
          :key="index"
        >
          <img
            :src="item.img"
            :alt="item.title"
          >
        </router-link>
      </div>
      <div class="right">
        <router-link
          :to="{name : 'cate.detail',query:{title,name:item.title,id:item.id}}"
          v-for="(item,index) in showRight"
          :key="index"
        >
          <img
            class="show-img"
            :src="item.img"
            :alt="item.title"
          >
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  import dataUrl from "../comment/dataUrl";
  export default {
    name: "show",
    data() {
      return {
        title : "精彩活动",
        showLeft : [],
        showRight : []
      }
    },
    created(){

      this.Axios
        .get(dataUrl("show"))
        .then(res => {

          this.showLeft = res.data.left;
          this.showRight = res.data.right;
        })
    },
  }
</script>

<style scoped lang="less">
  .show {
    margin-top: .15rem;
    .show-con {
      overflow: hidden;
      display: flex;
      height: 2.73rem;
      background-color: #fff;
      justify-content: space-between;
      div {
        width: 1.87rem;
        height: 100%;
        a{
          img {
            display: block;
            width: 100%;
          }
          .show-img {
            height: .9rem;
            margin-top: .01rem;
          }
        }
      }
    }
  }
</style>
