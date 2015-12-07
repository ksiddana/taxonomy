var Bee = function() {
  Grub.call(this);
  // console.log(this)
  this.age = 5;
  this.color ='yellow';
  this.job = 'keep on growing';
};

Bee.prototype = Object.create(Grub.prototype);

//Make sure this is correct later on
Bee.prototype.constructor = Bee;

