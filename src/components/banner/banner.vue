<template>
  <div class="banner">
    <el-carousel :interval="3000">
      <el-carousel-item v-for="(item,index) in banner" :key="index">
        <router-link :to="{name : 'cate.detail',query:{title,name:item.title,id:item.q_id}}">
          <img :src="item.img" :alt="item.title">
        </router-link>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
  import dataUrl from "../comment/dataUrl";
    export default {
        name: "banner",
        data(){
          return {
            banner : [],
            title : "精选标题"
          }
        },
        created(){

          this.Axios
            .get(dataUrl("banner"))
            .then(res =>{

              this.banner = res.data;
            })
        }
    }
</script>

<style scoped lang="less">
  .el-carousel{
    overflow:hidden;
    height:1.4rem;
  }
  .el-carousel__item{
    height:1.4rem;
  }
  .el-carousel__item{
    a{
      display:block;
      width:100%;
      height:100%;
      img{
        display:block;
        width:100%;
        height:100%;
      }
    }
  }
</style>
