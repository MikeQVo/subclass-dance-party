var SlideDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<div style="width:25%;height:0;padding-bottom:17%;position:relative;"><iframe src="https://giphy.com/embed/kuWN0iF9BLQKk" width="25%" height="25%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div>');

};

SlideDancer.prototype = Object.create(Dancer.prototype);
SlideDancer.prototype.constructor = SlideDancer;

SlideDancer.prototype.step = function() {

  var oldStep = Dancer.prototype.step.bind(this);
  oldStep();
  this.$node.css({top: top});
  this.$node.animate({left: [$('body').width(), 'swing']}, 3000);
  this.$node.hide([3000]);
  // this.$node.animate({left: "-=300"}, 1000);

};
