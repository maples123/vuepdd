<template>
  <div class="cate-info">
    <img :src="img" :alt="shopTitle">
    <div class="info">
      <h3 class="title">{{shopTitle}}</h3>
      <p class="desc">
        {{text}}
      </p>
      <ul class="icons">
        <li
          v-for="(item,index) in iconText"
          :key="index"
          ref="icon"
        >
          <span class="pic"></span>
          <span class="text" v-text="item"></span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    name: "cateInfo",
    props: ["shopTitle","text","img","iconText"],
    data() {
      return {}
    },
    mounted() {
      const icon = this.$refs.icon;
      icon.forEach((item, index) => {

        if (index === 0) {
          icon[0].children[0].style.backgroundPositionX = -38 + "px";
          icon[0].children[0].style.backgroundPositionY = 2 + "px";
        }
        if (index === 1) {
          icon[1].children[0].style.backgroundPositionX = -40 + "px";
          icon[1].children[0].style.backgroundPositionY = -38 + "px";
        }
        if (index === 2) {
          icon[2].children[0].style.backgroundPositionX = 2 + "px";
          icon[2].children[0].style.backgroundPositionY = -80 + "px";
        }
        if (index === 3) {
          icon[3].children[0].style.backgroundPositionX = 2 + "px";
          icon[3].children[0].style.backgroundPositionY = 2 + "px";
        }
      })
    }
  }
</script>

<style scoped lang="less">
  .cate-info {
    background-color: #fff;
    img {
      display: block;
      width: 100%;
      height: 1.4rem;
    }
    .info {
      padding: .1rem .2rem 0;
      box-sizing: border-box;
      .title {
        padding: .1rem 0;
        font-size: .14rem;
        font-weight: 500;
        color: #111;
      }
      .desc {
        padding: .03rem 0;
        border-top: .001rem solid #d6d6d6;
        border-bottom: .001rem solid #d6d6d6;
        line-height: .22rem;
        font-size: .09rem;
        color: #686868;
      }
      .icons {
        display: flex;
        margin-top: .1rem;
        li {
          width: .65rem;
          height: .61rem;
          margin: 0 .02rem;
          .pic {
            display: block;
            width: .34rem;
            height: .34rem;
            margin: auto;
            border-radius: 50%;
            background: url("../../../static/images/cat_sprite.png") no-repeat 2px 2px;
            background-size: .7rem 1.1rem;
          }
          .text {
            display: block;
            margin-top: .04rem;
            text-align: center;
            font-size: .1rem;
            color: #868686;
          }
        }
      }
    }
  }
</style>
