<template>
  <div class="not404">
    <p>很抱歉，您要访问的页面不存在！</p>
    <p><router-link to="/">反回首页</router-link></p>
  </div>
</template>

<script>
  export default {
    name: "not404",
  }
</script>

<style scoped lang="less">
  .not404 {
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;
    p {
      margin: 1rem 0;
      font-size: .1rem;
      a{
        color:red;
      }
    }
  }
</style>
