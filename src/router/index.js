import Vue from 'vue'
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name : "home",
      component : resolve => require(["../components/Home"],resolve)
    },
    // {
    //   path : "/bivariate",
    //   name : "bivariate",
    //   component : Bivariate
    // },
    {
      path : "/cart",
      name : "cart",
      component : resolve => require(["../components/cart/cart"],resolve)
    },
    {
      path : "/my",
      name : "my",
      component : resolve => require(["../components/my/my"],resolve)
    },
    {
      path : "/catedetail.detail",
      name : "cate.detail",
      component : resolve => require(["../components/shopdetail/catedetail"],resolve),
    },
    {
      path : "/goods",
      name : "goods",
      component : resolve => require(["../components/goods/goods"],resolve)
    },
    {
      path : "*",
      component : resolve => require(["../components/not404"],resolve)
    }
  ]
})
