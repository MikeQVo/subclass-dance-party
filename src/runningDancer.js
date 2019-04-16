var RunningDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.append('<div class="ponyta"></div>');

};

RunningDancer.prototype = Object.create(Dancer.prototype);
RunningDancer.prototype.constructor = SlideDancer;

RunningDancer.prototype.step = function() {

  var oldStep = Dancer.prototype.step.bind(this);
  oldStep();
  this.$node.css({top: top});
  this.$node.animate({left: [$('body').width(), 'swing']}, 3000);
  this.$node.hide([3000]);
  // this.$node.animate({left: "-=300"}, 1000);

};
