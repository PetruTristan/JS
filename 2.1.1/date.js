var Post = function (header, message) {
 var date = new Date();
 this.header = header;
 this.message = message;
 Object.defineProperty(this, "date", {
  get: function () {
   return date.toString();
  },
  set: function (dateArg) {
   if (!dateArg) {    
    date = new Date();
   } else {
    date = new Date(dateArg);
   }
  }
 });
}
 var firstPost = new Post("Hello", " World!!");
 console.log(firstPost.date);
 setTimeout(function () {
  firstPost.date = "";
  console.log(firstPost.date);
 }, 2345);
 setTimeout(function () {
  firstPost.date = "2011, 12, 13";
  console.log(firstPost.date);
 }, 2345);
