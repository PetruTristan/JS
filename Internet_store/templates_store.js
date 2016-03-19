var App = App || {};

App.fixtures = {
 products: [
  { 
   id: "1", 
   name: "Hat",
   description: "A great and warm hat",
   rating: 5,
   categoryId: "1",
   price: "20$"
  },
  {
   id: "2", 
   name: "Scarf",
   description: "A great and warm scarf",
   rating: 4.5,
   categoryId: "1",
   price: "15$"
  },
  {
   id: "3", 
   name: "Gloves",
   description: "Great and warm gloves",
   rating: 4,
   categoryId: "1",
   price: "10$"
  }
 ],
 categories: [
  {
   id: "1",
   name: "Clothes"
  }
 ]
};
App.templates = {
 product: '<div class="product">\
    <div class="product_head">{{name}}</div>\
    <div class="product_body">\
     <div class="product_description">{{description}}</div>\
     <div class="product_footer">\
      <div class="product_price">{{price}}</div>\
      <div class="product_rating">{{rating}}</div>\
     </div>\
    </div>\
   </div>',
}

App.Product = (function () {
 var Product = function (data) {
  for (var i in data) {
   this[i] = data[i];
  }
  this.template = App.templates.product;
  this.category = App.fixtures.categories.filter(function (val) {
   return val.id === data.categoryId;
  })[0];
 };

 Product.prototype.getHTML= function () {
  var reg = /{{([A-Za-z0-9\+\-\_\,\ ]+)}}/g;
  var self = this;
  return this.template.replace(reg, function (substring) {
   return self[substring.split(/{|}/).join("")];
  });
 } 

 return Product;
 
})();