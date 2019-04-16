var DropDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);

};

DropDancer.prototype = Object.create(Dancer.prototype);
DropDancer.prototype.constructor = BlinkyDancer;

DropDancer.prototype.step = function() {


    var oldStep = Dancer.prototype.step.bind(this);
    oldStep();


    this.$node.toggle("shake");
  };