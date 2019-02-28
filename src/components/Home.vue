<template>
  <div class="home">
    <pdd-hd></pdd-hd>
    <banner></banner>
    <div class="container">
      <shop-show></shop-show>
      <category></category>
    </div>
    <pdd-ft></pdd-ft>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
  .container{
    margin-bottom:.6rem;
  }
</style>
