<template>
  <div class="cate-nav">
    <ul ref="ul">
      <li
        ref="cateNav"
        v-for="(item,index) in nav"
        :key="index"
        @click="cateNav"
      >{{item}}
      </li>
    </ul>
  </div>
</template>

<script>
  import connect from "../comment/connect";
  import dataUrl from "../comment/dataUrl";
  import {cate_nav,show_nav} from "../comment/constData";

  export default {
    name: "cateNav",
    props: ["nav","cateTitle"],
    data(){
      return {
        navArr : ""
      }
    },
    mounted(){
      //处理进入类目详情页是nav的类名显示
      const id = this.$route.query.id;
      const cateNav = this.$refs.cateNav;
      const ul = this.$refs.ul;

      ul.style.width = .78 * cateNav.length + "rem";
      cateNav[id].className = "on";
    },
    methods: {
      cateNav(e) {

        const cateNav = this.$refs.cateNav;
        const key = cateNav.findIndex(item => item === e.target);
        const cateTitle = this.$props.cateTitle;

        cateTitle === "精彩活动" ? this.navArr = show_nav : this.navArr = cate_nav;

        //点击nav切换内容
        cateNav.forEach((item,index) => {

          if(key === index){
            cateNav[index].className = "on";
          }else{
            cateNav[index].className = "";
          }
        });

        const data = {};
        this.Axios
          .get(dataUrl("detail",this.navArr[key]))
          .then(res => {

            data.title = res.data.cate_title;
            data.img = res.data.cate_img;
            data.text = res.data.cate_text;
            data.list = res.data.list;

            connect.$emit("cate_details",data)
          })
      }
    }
  }
</script>

<style scoped lang="less">

  .cate-nav {
    overflow: auto;
    width: 100%;
    height: .37rem;
    background-color: #ff324f;
    ul {
      display: flex;
      width: 180%;
      .on {
        background-color: rgba(0, 0, 0, .2);
      }
      li {
        width: .78rem;
        height: .37rem;
        line-height: .37rem;
        font-size: .13rem;
        text-align: center;
        color: #fafafa;
      }
    }
  }
</style>
