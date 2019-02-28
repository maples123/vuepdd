<template>
  <div id="app">
    <router-view name="hd"/>
    <router-view/>
    <router-view name="ft"/>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style>
  #app{
    overflow:hidden;
    background-color:#f3f3f3;
  }
  *{
    margin:0;
    padding:0;
  }
  a{
    text-decoration: none;
    color:#121212;
  }
  li{
    list-style:none;
  }
</style>
