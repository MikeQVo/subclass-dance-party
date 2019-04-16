var BouncyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);


};

BouncyDancer.prototype = Object.create(Dancer.prototype);
BouncyDancer.prototype.constructor = BouncyDancer;

BouncyDancer.prototype.step = function() {

  var oldStep = Dancer.prototype.step.bind(this);
  oldStep();
  this.$node.show().animate({left: ["+=50", "easeInBounce"], opacity: [.25, "swing"]}, {duration: 1000, easing: 'easeOutBounce'});

};
