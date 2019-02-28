<template>
  <div class="category">
    <pdd-hd></pdd-hd>
    <div class="container">

      <cate-nav
        :nav="goodsCate"
        :cateTitle="cateTitle"
      ></cate-nav>

      <cate-info
        :shopTitle="shopTitle"
        :text="cateText"
        :img="cateImg"
        :iconText="iconText"
      ></cate-info>

      <list
        :list="this.list"
        :shopTitle="shopTitle"
      ></list>

    </div>
    <pdd-ft></pdd-ft>
  </div>
</template>

<script>
  import connect from "../comment/connect";
  import dataUrl from "../comment/dataUrl";
  import {cate_nav,show_nav,icon_txt} from "../comment/constData";

  export default {
    name: "cateDetail",
    data() {
      return {
        id : "",
        list: [],
        cateTitle : "",
        shopTitle: "",
        cateText: "",
        cateImg: "",
        iconText: [],
        goodsCate: []
      }
    },
    created() {
      const cateTitle = this.$route.query.title;
      const name = this.$route.query.name;

      this.cateTitle = cateTitle;
      this.iconText = icon_txt;

      cateTitle === "精彩活动" ? this.goodsCate = show_nav : this.goodsCate = cate_nav;

      this.Axios
        .get(dataUrl("detail",name))
        .then(res => {

          this.shopTitle = res.data.cate_title;
          this.cateText = res.data.cate_text;
          this.cateImg = res.data.cate_img;
          this.list = res.data.list;
        });

      //nav切换处理
      connect.$on("cate_details", value => {

        this.shopTitle = value.title;
        this.cateImg = value.img;
        this.cateText = value.text;
        this.list = value.list;
      })
    }
  }
</script>

<style scoped lang="less">

</style>
