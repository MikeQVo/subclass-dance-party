var SpinningDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);

  this.$node = $();


};

SpinningDancer.prototype = Object.create(Dancer.prototype);
SpinningDancer.prototype.constructor = SpinningDancer;

SpinningDancer.prototype.step = function() {

    var oldStep = Dancer.prototype.step.bind(this);
    oldStep();

    this.$node.animate({left: "+=500"}, 2000);
    this.$node.animate({left: "-=300"}, 1000);
  };
