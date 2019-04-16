var BouncyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<div class="pokeball"><div class="pokebar"><div class="pokebutton"><div class="pokebtnMini"></div></div></div></div>');

};

BouncyDancer.prototype = Object.create(Dancer.prototype);
BouncyDancer.prototype.constructor = BouncyDancer;

BouncyDancer.prototype.step = function() {

  var oldStep = Dancer.prototype.step.bind(this);
  oldStep();
  this.$node.show().animate({top: 500 * Math.random(), left: 700 * Math.random() }, {duration: 3000, easing: 'easeOutBounce'});

};
