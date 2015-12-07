var Grub = function() {



  this.age = 0;
  this.color = 'pink';
  this.food = 'jelly';
  // this.eat = function() {};

};

Grub.prototype = new Grub();
// Grub.prototype =  Object.create(Grub.prototype)

Grub.prototype.eat = function() {

};
// var x = new Grub.prototype