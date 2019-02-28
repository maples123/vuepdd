let shopTools = {};

const shop = JSON.parse(window.localStorage.getItem("goods") || "{}");
//添加商品
shopTools.addUpdata = function(goods){

  if(shop[goods.id]){
    shop[goods.id] += goods.num;
  }else{
    shop[goods.id] = goods.num;
  }

  this.saveShop("goods",shop);
};

//删除商品
shopTools.delete = function(id){

  delete shop[id];
  this.saveShop("goods",shop);

};

//获取商品
shopTools.getShop = function(title){

  return JSON.parse(window.localStorage.getItem(title) || "{}");
};

//单个商品种类的总数
shopTools.getShopSum =  function(){

  let sum = 0;
  for(let key in shop){

    sum += shop[key];
  }
  return sum;
};

//保存商品
shopTools.saveShop = function(title,shop){

  window.localStorage.setItem(title,JSON.stringify(shop));
};

shopTools.shopPrice = function(price){

  return price.toFixed(2);
};

export default shopTools;
